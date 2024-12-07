import Marquee from "react-marquee-slider";
import {
    FaApple,
    FaGoogle,
    FaMicrosoft,
    FaAmazon,
    FaFacebook,
} from "react-icons/fa";

const BrandSection = () => {
    const brands = [
        {
            name: "Apple",
            icon: (
                <FaApple className="text-6xl text-gray-800 dark:text-gray-100 mx-6" />
            ),
        },
        {
            name: "Google",
            icon: (
                <FaGoogle className="text-6xl text-gray-800 dark:text-gray-100 mx-6" />
            ),
        },
        {
            name: "Microsoft",
            icon: (
                <FaMicrosoft className="text-6xl text-gray-800 dark:text-gray-100 mx-6" />
            ),
        },
        {
            name: "Amazon",
            icon: (
                <FaAmazon className="text-6xl text-gray-800 dark:text-gray-100 mx-6" />
            ),
        },
        {
            name: "Facebook",
            icon: (
                <FaFacebook className="text-6xl text-gray-800 dark:text-gray-100 mx-6" />
            ),
        },
    ];

    return (
        <div className="bg-slate-200 dark:bg-[#161838] py-12 my-12">
            <div className="wrapper">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                    Our Trusted Brands
                </h2>
                <Marquee velocity={80}>
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center"
                        >
                            {brand.icon}
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BrandSection;
