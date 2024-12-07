import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import logoDark from "/images/logo-dark.png";
import logoLight from "/images/logo-light.png";
import { MdClose } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [navStatus, setNavStatus] = useState(true);
    const [mode, setMode] = useState("light");

    function changeTheme() {
        const html = document.documentElement;

        if (mode == "light") {
            html.classList.remove("light");
            html.classList.add("dark");
            setMode("dark");
            localStorage.setItem("mode", "dark");
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            setMode("light");
            localStorage.setItem("mode", "light");
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light";
        document.documentElement.classList.add(currentMode);
        setMode(currentMode);
    }, []);

    const handleSignOut = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    title: "Logged Out",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK",
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
        <nav>
            <section className="wrapper relative flex justify-between items-center py-6 ">
                <div>
                    <Link to={"/"}>
                        <h2 className="text-4xl font-bold">
                            <img
                                loading="lazy"
                                className="w-24"
                                src={mode ? logoLight : logoDark}
                                alt=""
                            />
                        </h2>
                    </Link>
                </div>

                <div className="flex gap-6 items-center">
                    {user && (
                        <span className="cursor-pointer order-1 group">
                            <img
                                loading="lazy"
                                className="h-16 w-16 relative z-30 ring-2 ring-blue-500 object-cover rounded-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <div className="absolute z-50 bg-slate-300 dark:bg-[#1c1e43] px-8 py-6 transition-all duration-300 -top-52 group-hover:top-full right-0 rounded-lg space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-lg">
                                        {user?.displayName}
                                    </h2>
                                    <p className="text-sm tracking-wider">
                                        {user?.email}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        className="btn w-full"
                                        onClick={handleSignOut}
                                    >
                                        logout
                                    </button>
                                </div>
                            </div>
                        </span>
                    )}
                    <div className="order-2 fixed bottom-6 right-6 z-50">
                        <button
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={
                                mode === "light" ? "Dark Mode" : "Light Mode"
                            }
                            data-tooltip-place="left"
                            className="w-12 h-12 flex justify-center items-center bg-primary rounded-full"
                            onClick={changeTheme}
                        >
                            {mode === "light" ? (
                                <FaMoon className="text-white" size={24} />
                            ) : (
                                <FiSun className="text-white" size={24} />
                            )}
                        </button>
                    </div>
                    <div className="order-4 lg:hidden relative z-50">
                        <button
                            className="transition-all duration-300 text-primary"
                            onClick={() => setNavStatus(!navStatus)}
                        >
                            {navStatus ? (
                                <MdClose size={50} />
                            ) : (
                                <HiBars3 size={50} />
                            )}
                        </button>
                    </div>
                    <div
                        className={`absolute z-40 bg-slate-200 dark:bg-darkPurple lg:bg-inherit lg:dark:bg-inherit ${
                            navStatus ? "left-0" : "-left-[100rem]"
                        } transition-all duration-300 top-0 w-[60vh] h-screen lg:h-auto lg:w-auto lg:static `}
                    >
                        <ul className="flex flex-col lg:flex-row px-8 text-center py-16 h-full gap-8 items-start lg:items-center lg:p-0 text-lg font-medium *:text-left">
                            <li>
                                <NavLink
                                    className="hover:text-primary duration-300"
                                    to={"/"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="hover:text-primary duration-300"
                                    to={"/sports-equipment"}
                                >
                                    All Equipments
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="hover:text-primary duration-300"
                                    to={"/add-equipment"}
                                >
                                    Add Equipment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="hover:text-primary duration-300"
                                    to={"/equipments-list"}
                                >
                                    My Equipments
                                </NavLink>
                            </li>
                            {!user && (
                                <li>
                                    <NavLink to={"/signin"}>
                                        <button className="btn w-full">
                                            Login
                                        </button>
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
