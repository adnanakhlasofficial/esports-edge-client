import Lottie from "lottie-react";
import contact from "../../assets/contact.json";

const ContactUs = () => {
    return (
        <section className="wrapper flex items-center justify-between">
            <div className="bg-slate-200 dark:bg-[#161838] px-8 py-12 w-full rounded-lg order-2">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                        Contact Us
                    </h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    className="flex flex-col gap-2"
                                    htmlFor="name"
                                >
                                    <span className="capitalize font-semibold">
                                        name:
                                    </span>
                                    <input
                                        required
                                        className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </label>
                            </div>
                            <div>
                                <label
                                    className="flex flex-col gap-2"
                                    htmlFor="email"
                                >
                                    <span className="capitalize font-semibold">
                                        email:
                                    </span>
                                    <input
                                        required
                                        className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    className="flex flex-col gap-2"
                                    htmlFor="subject"
                                >
                                    <span className="capitalize font-semibold">
                                        subject:
                                    </span>
                                    <input
                                        required
                                        className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Enter your subject"
                                    />
                                </label>
                            </div>
                            <div className="col-span-full">
                                <label
                                    className="flex flex-col gap-2"
                                    htmlFor="message"
                                >
                                    <span className="font-semibold">
                                        Message:
                                    </span>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary resize-none"
                                        name="message"
                                        id="message"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </label>
                            </div>
                        </div>

                        <div className="col-span-full mt-6">
                            <button className="btn w-full">
                                Add Equipment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Lottie
                    height={500}
                    width={500}
                    animationData={contact}
                    loop={true}
                />
            </div>
        </section>
    );
};

export default ContactUs;
