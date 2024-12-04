import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    
    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        const newUser = { displayName, email, photoURL, password };
        console.log(newUser);
        createUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            updateUser({displayName, photoURL})
            console.log(user);
            
        })
        .catch((error) => console.log(error))
        
        form.reset();
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <div>
                <form onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="name">
                            <span className="capitalize">name:</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your full name"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            <span className="capitalize">email:</span>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="photo">
                            <span className="capitalize">photo:</span>
                            <input
                                type="url"
                                name="photo"
                                id="photo"
                                placeholder="Enter your photo url"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span className="capitalize">password:</span>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </label>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
