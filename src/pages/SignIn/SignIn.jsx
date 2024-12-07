import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";

const SignIn = () => {
    const { loginUser, googleLogin, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const [viewPassword, setViewPassword] = useState(false);

    if(user) return <Navigate to={state ? state : "/"}></Navigate>

    const handleGoogleSignIn = () => {
        googleLogin()
            .then((userCredential) => {
                Swal.fire({
                    title: `Welcome Back! ${userCredential?.user?.displayName}`,
                    text: "You have successfully logged in.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(state ? state : "/");
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

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                Swal.fire({
                    title: `Welcome Back! ${userCredential?.user?.displayName}`,
                    text: "You have successfully logged in.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(state ? state : "/");
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
                <title>Sign In | Sports Edge</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <section className="w-full min-h-screen grid place-items-center">
                <div className="wrapper bg-slate-200 dark:bg-darkPurple !p-8 my-12 rounded-xl !max-w-xl w-full dark:*:text-slate-200">
                    <h2 className="text-center text-4xl font-bold">Sign In</h2>
                    <div className="max-w-3xl w-full mx-auto mt-12">
                        <form className="grid gap-4" onSubmit={handleSignIn}>
                            <div>
                                <label
                                    className="flex flex-col gap-2"
                                    htmlFor="email"
                                >
                                    <span className="capitalize font-semibold">
                                        email:
                                    </span>
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
                                <label
                                    className="flex flex-col gap-2 relative"
                                    htmlFor="password"
                                >
                                    <span className="capitalize font-semibold">
                                        password:
                                    </span>
                                    <input
                                        required
                                        className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                        type={
                                            viewPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                    {
                                        <span
                                            className="absolute top-10 right-4"
                                            onClick={() =>
                                                setViewPassword(!viewPassword)
                                            }
                                        >
                                            {viewPassword ? (
                                                <FaRegEyeSlash
                                                    className="text-darkBg"
                                                    size={24}
                                                />
                                            ) : (
                                                <FaRegEye
                                                    className="text-darkBg"
                                                    size={24}
                                                />
                                            )}
                                        </span>
                                    }
                                </label>
                            </div>
                            <div>
                                <button className="btn w-full mt-6">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="my-6">
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn w-full"
                            >
                                Sign In with Google
                            </button>
                        </div>
                        <div>
                            <p className="text-lg font-medium mt-4 text-center">
                                Don&apos;t have an account?{" "}
                                <Link
                                    className="text-primary hover:underline underline-offset-2"
                                    to={"/signup"}
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};

export default SignIn;
