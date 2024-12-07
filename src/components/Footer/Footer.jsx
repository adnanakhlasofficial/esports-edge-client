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
        <>
            <section className="wrapper py-20 gap-16 flex justify-between flex-col lg:flex-row">
                <div>
                    <img loading="lazy" className="w-24" src={logo} alt="" />
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold">Sports Edge</h2>
                        <p className="text-lg max-w-[40rem]">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                    </div>
                </div>
                <div className="space-y-12">
                    <div className="flex gap-8">
                        <Link
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Join Facebook"
                            data-tooltip-place="top"
                            to={"#"}
                        >
                            <FaFacebook
                                className="text-darkPurple dark:text-slate-300"
                                size={40}
                            />
                        </Link>
                        <Link
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Join Twitter"
                            data-tooltip-place="top"
                            to={"#"}
                        >
                            <FaTwitter
                                className="text-darkPurple dark:text-slate-300"
                                size={40}
                            />
                        </Link>
                        <Link
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Join Instagram"
                            data-tooltip-place="top"
                            to={"#"}
                        >
                            <FaInstagram
                                className="text-darkPurple dark:text-slate-300"
                                size={40}
                            />
                        </Link>
                        <Link
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content="Join LinkedIn"
                            data-tooltip-place="top"
                            to={"#"}
                        >
                            <FaLinkedin
                                className="text-darkPurple dark:text-slate-300"
                                size={40}
                            />
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">Get in Touch</h2>
                        <div className="space-y-3 mt-6">
                            <p className="flex items-center text-lg gap-2">
                                <MdCall
                                    className="text-darkPurple dark:text-slate-300"
                                    size={24}
                                />{" "}
                                +880 1672 478515
                            </p>
                            <p className="flex items-center text-lg gap-2">
                                <FaEnvelope
                                    className="text-darkPurple dark:text-slate-300"
                                    size={24}
                                />{" "}
                                info@gmail.com
                            </p>
                            <p className="flex items-center text-lg gap-2">
                                <FaLocationDot
                                    className="text-darkPurple dark:text-slate-300"
                                    size={24}
                                />{" "}
                                72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center py-4 border-t-2 border-darkText">
                <p>&copy; 2024 Sports Edge. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
