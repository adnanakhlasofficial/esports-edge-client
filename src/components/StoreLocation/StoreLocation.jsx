const StoreLocation = () => {
    return (
        <div className="bg-slate-200 dark:bg-[#161838] py-12 my-12">
            <div className="wrapper">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    Our Store Locations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Map Placeholder */}
                    <div className="w-full min-h-64 bg-gray-300 dark:bg-slate-800 rounded-md mb-4 md:mb-0">
                        <p className="flex items-center justify-center h-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58377.894834473875!2d90.32768712167969!3d23.867679699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c424f183f5f1%3A0xbd664c765441e253!2sUttara%20Sports!5e0!3m2!1sen!2sbd!4v1733538598761!5m2!1sen!2sbd" className="w-full h-full border-2 border-primary rounded-lg" allowfullscreen="" loading="lazy" ></iframe>
                        </p>
                    </div>

                    {/* Store Details */}
                    <div className="space-y-6">
                        <div className="bg-slate-300 dark:bg-[#22244E] p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold">
                                Dhaka Main Store
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                123 Main Street, Dhaka, Bangladesh
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Phone: +880 1234-567890
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Email: dhaka@store.com
                            </p>
                        </div>
                        <div className="bg-slate-300 dark:bg-[#22244E] p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-bold">
                                Chittagong Branch
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                456 Another Street, Chittagong, Bangladesh
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Phone: +880 9876-543210
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Email: chittagong@store.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLocation;
