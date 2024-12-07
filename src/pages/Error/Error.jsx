import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            {" "}
            <div className="text-center">
                {" "}
                <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100">
                    404
                </h1>{" "}
                <p className="text-2xl mt-4 mb-8 text-gray-600 dark:text-gray-400">
                    {" "}
                    Oops! The page you&apos;re looking for doesn&apos;t exist.{" "}
                </p>{" "}
                <Link to="/">
                    {" "}
                    <button className="btn">Go Home</button>{" "}
                </Link>{" "}
            </div>{" "}
        </div>
    );
};

export default Error;
