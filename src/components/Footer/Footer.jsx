import { Link } from "react-router-dom";
import logo from "/images/logo-dark.png";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="wrapper py-20 flex justify-between ">
            <div>
                <img className="w-24" src={logo} alt="" />
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold">Sport Edge</h2>
                    <p className="text-lg max-w-[40rem]">
                        Always ready to be your friend. Come & Contact with us
                        to share your memorable moments, to share with your best
                        companion.
                    </p>
                </div>
            </div>
            <div className="space-y-12">
                <div className="flex gap-4">
                    <Link to={"#"}>
                        <FaFacebook className="text-darkPurple" size={40} />
                    </Link>
                    <Link to={"#"}>
                        <FaTwitter className="text-darkPurple" size={40} />
                    </Link>
                    <Link to={"#"}>
                        <FaInstagram className="text-darkPurple" size={40} />
                    </Link>
                    <Link to={"#"}>
                        <FaLinkedin className="text-darkPurple" size={40} />
                    </Link>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <div className="space-y-3 mt-6">
                        <p className="flex items-center text-lg gap-2">
                            <MdCall className="text-darkPurple" size={24} />{" "}
                            +880 1672 478515
                        </p>
                        <p className="flex items-center text-lg gap-2">
                            <FaEnvelope className="text-darkPurple" size={24} />{" "}
                            info@gmail.com
                        </p>
                        <p className="flex items-center text-lg gap-2">
                            <FaLocationDot
                                className="text-darkPurple"
                                size={24}
                            />{" "}
                            72, Wall street, King Road, Dhaka
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
