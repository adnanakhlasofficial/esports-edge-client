import Lottie from "lottie-react";
import error from "../../assets/error404.json";



const Error = () => {
    return (
        <div className="h-screen grid place-items-center bg-slate-200 dark:bg-[#161838]">
            <Lottie height={800} width={800} animationData={error} loop={true} />
        </div>
    );
};

export default Error;