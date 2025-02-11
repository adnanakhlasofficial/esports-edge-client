import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";
import signUpSvg from "../../assets/img/signup.svg";

const SignUp = () => {
  const { createUser, updateUser, setLoading, googleLogin, user } =
    useContext(AuthContext);
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();

  if (user) return <Navigate to={"/"}></Navigate>;

  const handleGoogleSignUp = () => {
    googleLogin()
      .then((userCredential) => {
        setLoading(false);
        Swal.fire({
          title: "Account Created!",
          text: `Your account has been successfully created. Welcome aboard! ${userCredential?.user?.displayName}`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Start Exploring",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    if (!passRegex.test(password))
      return Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Try Again",
      });

    createUser(email, password)
      .then(() => {
        updateUser({ displayName, photoURL });
        setLoading(false);
        Swal.fire({
          title: "Account Created!",
          text: `Your account has been successfully created. Welcome aboard! ${displayName}`,
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Start Exploring",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.code,
        });
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up | Sports Edge</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="wrapper flex items-center flex-col lg:flex-row gap-4">
        <div>
          <img src={signUpSvg} alt="Sign Up Vector Image" />
        </div>
        <div className="w-full min-h-screen grid place-items-center">
          <div className="bg-slate-200 dark:bg-darkPurple !p-8 my-12 rounded-xl !max-w-xl w-full ">
            <h2 className="text-center text-4xl font-bold">Sign Up</h2>
            <div className="max-w-3xl w-full mx-auto mt-12">
              <form className="grid gap-4" onSubmit={handleSignUp}>
                <div>
                  <label className="flex flex-col gap-2" htmlFor="name">
                    <span className="capitalize font-semibold">name:</span>
                    <input
                      required
                      className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-2" htmlFor="email">
                    <span className="capitalize font-semibold">email:</span>
                    <input
                      required
                      className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-2" htmlFor="photo">
                    <span className="capitalize font-semibold">photo:</span>
                    <input
                      required
                      className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                      type="url"
                      name="photo"
                      id="photo"
                      placeholder="Enter your photo url"
                    />
                  </label>
                </div>
                <div>
                  <label
                    className="flex flex-col gap-2 relative"
                    htmlFor="password"
                  >
                    <span className="capitalize font-semibold">password:</span>
                    <input
                      required
                      className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                      type={viewPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                    />
                    {
                      <span
                        className="absolute top-10 right-4"
                        onClick={() => setViewPassword(!viewPassword)}
                      >
                        {viewPassword ? (
                          <FaRegEyeSlash className="text-darkBg" size={24} />
                        ) : (
                          <FaRegEye className="text-darkBg" size={24} />
                        )}
                      </span>
                    }
                  </label>
                </div>
                <div>
                  <button className="btn w-full mt-6">Sign Up</button>
                </div>
              </form>
              <div className="my-6">
                <button onClick={handleGoogleSignUp} className="btn w-full">
                  Sign Up with Google
                </button>
              </div>
              <div>
                <p className="text-lg font-medium mt-4 text-center">
                  Already have an account?{" "}
                  <Link
                    className="text-primary hover:underline underline-offset-2"
                    to={"/signin"}
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default SignUp;
