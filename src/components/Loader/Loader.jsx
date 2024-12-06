import Lottie from "lottie-react";
import loader from "../../assets/loader.json";

const Loader = () => {
    return (
        <div className="h-screen grid place-items-center bg-slate-200 dark:bg-[#161838]">
            <Lottie height={800} width={800} animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;
