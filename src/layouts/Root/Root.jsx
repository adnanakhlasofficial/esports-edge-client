import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Footer from "../../components/Footer/Footer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Loader from "../../components/Loader/Loader";

const Root = () => {
    const { loading } = useContext(AuthContext);

    if (loading) return <Loader></Loader>;

    return (
        <div className="bg-white dark:bg-darkBg dark:text-slate-200 transition-all duration-700">
            <header className="bg-slate-200 dark:bg-[#161838]">
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className="dark:bg-[#161838] bg-slate-200">
                <Footer></Footer>
            </footer>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Root;
