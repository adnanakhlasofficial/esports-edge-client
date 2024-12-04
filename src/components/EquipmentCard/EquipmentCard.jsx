const EquipmentCard = () => {
    return (
        <div className="max-w-sm mx-auto my-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-300">
            {" "}
            <img
                className="w-full h-48 object-cover rounded-t-lg"
                src=""
                alt=""
            />{" "}
            <div className="p-4">
                {" "}
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    name
                </h2>{" "}
                <p className="text-gray-600 dark:text-gray-400">
                    category
                </p>{" "}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    descriptin
                </p>{" "}
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4">
                    $price
                </p>{" "}
                <p className="text-yellow-500 mt-2">Rating: rating</p>{" "}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Customization: customization
                </p>{" "}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Processing Time: Processing time
                </p>{" "}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Stock Status: stockAvailability
                </p>{" "}
                <div className="mt-4">
                    {" "}
                    <p className="text-gray-600 dark:text-gray-400">
                        User Email: email
                    </p>{" "}
                    <p className="text-gray-600 dark:text-gray-400">
                        User Name: username
                    </p>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default EquipmentCard;
