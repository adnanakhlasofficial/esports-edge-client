import aboutImg from "../../assets/img/about.jpg";

const AboutUs = () => {
    return (
        <div className="wrapper !p-12">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
                <div className="w-1/2 h-full bg-slate-200 dark:bg-[#161838] p-6 rounded-lg flex flex-col">
                    <div className="grow mt-6">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                            About Us
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Sports Edge has been a leading sporting goods, gym,
                            and fitness equipment chain since 2024. We excel in
                            providing top-quality products and customer
                            satisfaction. Our experienced management team and
                            knowledgeable staff ensure that customers find
                            exactly what they need. As the sole agent of several
                            renowned brands, we offer a wide range of sporting
                            goods and fitness equipment.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <div className=" text-center bg-slate-50 dark:bg-[#22244E] w-full p-6 rounded-xl space-y-2">
                            <h2 className="text-4xl text-primary">9</h2>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">
                                Years of Experience
                            </p>
                        </div>
                        <div className=" text-center bg-slate-50 dark:bg-[#22244E] w-full p-6 rounded-xl space-y-2">
                            <h2 className="text-4xl text-primary">20K</h2>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">
                                Happy Customers
                            </p>
                        </div>
                        <div className=" text-center bg-slate-50 dark:bg-[#22244E] w-full p-6 rounded-xl space-y-2">
                            <h2 className="text-4xl text-primary">100%</h2>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">
                                Clients Satisfaction
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 flex justify-center">
                    <img
                        src={aboutImg} // Replace this URL with your image URL
                        alt=""
                        className="h-full rounded-md shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
