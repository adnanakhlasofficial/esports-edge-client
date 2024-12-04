import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        logoutUser()
            .then(() => console.log("logout"))
            .catch((error) => console.log(error));
    };

    return (
        <nav className="bg-slate-400">
            <section className="wrapper flex justify-between items-center py-6">
                <div>
                    <h2>SportsBazar</h2>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/sports-equipment"}>
                                All Sports Equipment
                            </Link>
                        </li>
                        <li>
                            <Link to={"/add-equipment"}>Add Equipment</Link>
                        </li>
                        <li>
                            <Link to={"/equipments-list"}>
                                My Equipment List
                            </Link>
                        </li>
                        <li>
                            {user && user.email ? (
                                <button onClick={handleSignOut}>
                                    {user.displayName}
                                </button>
                            ) : (
                                <Link to={"/signin"}>Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
