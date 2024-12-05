import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Root = () => {
    const {loading} = useContext(AuthContext);

    if(loading) return <h2 className="text-7xl text-red-500"></h2>
    
    return (
        <div className="bg-white dark:bg-darkBg dark:text-slate-200 transition-all duration-700">
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className="dark:bg-footerBg bg-slate-200">
                footer  
            </footer>
        </div>
    );
};

export default Root;