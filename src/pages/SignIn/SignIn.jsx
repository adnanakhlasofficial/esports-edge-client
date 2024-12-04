import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);
    
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {email, password};
        console.log(userInfo);
        
        loginUser(email, password)
        .then(user => {
            console.log(user);
            navigate(state)
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <div>
            <h2>Sign In</h2>
            <div>
                <form onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="email">
                            <span className='capitalize'>email:</span>
                            <input type="text" name="email" id="email" placeholder="Enter your email" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span className='capitalize'>password:</span>
                            <input type="text" name="password" id="password" placeholder="Enter your password" />
                        </label>
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;