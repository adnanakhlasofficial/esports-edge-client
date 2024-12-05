import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddEquipment = () => {
    const { user } = useContext(AuthContext);

    const handleAddEquipment = (e) => {
        e.preventDefault();

        const form = e.target;
        const username = form.username.value;
        const useremail = form.useremail.value;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const deliveryTime = form.deliveryTime.value;
        const image = form.image.value;
        const stockAvailability =
            parseInt(form.stockAvailability.value) ? true : false;

            console.log(stockAvailability);
        const itemInfo = {
            username,
            useremail,
            name,
            category,
            price,
            rating,
            customization,
            deliveryTime,
            image,
            stockAvailability,
        };

        console.log(itemInfo);
        // fetch("http://localhost:5000/equipments/", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(itemInfo),
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));
    };

    return (
        <HelmetProvider>
            <div className="wrapper bg-slate-200 dark:bg-darkPurple p-8 my-12 rounded-xl !max-w-4xl w-full">
                <Helmet>
                    <title>Add Equipment | Sport Edge</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <h2 className="text-center text-4xl font-bold">
                    Add Your Equipment{" "}
                </h2>
                <div className="max-w-3xl w-full mx-auto mt-12">
                    <form
                        className="grid grid-cols-2 gap-4"
                        onSubmit={handleAddEquipment}
                    >
                        <div className="hidden">
                            <label htmlFor="username">
                                <span>User Name:</span>
                                <input
                                    type="text"
                                    defaultValue={user.displayName}
                                    name="username"
                                    id="username"
                                    disabled
                                />
                            </label>
                        </div>
                        <div className="hidden">
                            <label htmlFor="useremail">
                                <span>User Email:</span>
                                <input
                                    type="text"
                                    defaultValue={user.email}
                                    name="useremail"
                                    id="useremail"
                                    disabled
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="name"
                            >
                                <span className="font-semibold">
                                    Item Name:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your equipment name"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="category"
                            >
                                <span className="font-semibold">
                                    Category Name:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter your equipment category"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="price"
                            >
                                <span className="font-semibold">
                                    Item Price:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Enter your equipment price"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="rating"
                            >
                                <span className="font-semibold">
                                    Item Rating:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="rating"
                                    id="rating"
                                    placeholder="Enter your equipment rating"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="customization"
                            >
                                <span className="font-semibold">
                                    Item Customization:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="customization"
                                    id="customization"
                                    placeholder="Enter your customization"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="deliveryTime"
                            >
                                <span className="font-semibold">
                                    Delivery Time:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="deliveryTime"
                                    id="deliveryTime"
                                    placeholder="Enter your delivery time"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="image"
                            >
                                <span className="font-semibold">
                                    Item Image:
                                </span>
                                <input
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    type="text"
                                    name="image"
                                    id="image"
                                    placeholder="Enter your equipment Image"
                                />
                            </label>
                        </div>
                        <div>
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="stockAvailability"
                            >
                                <span className="font-semibold">
                                    Stock Availabitly:
                                </span>
                                <input
                                    min={0}
                                    className="w-full px-4 py-2 rounded-lg text-darkBg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-primary"
                                    type="number"
                                    name="stockAvailability"
                                    id="stockAvailability"
                                    placeholder="Enter available stock quantity"
                                />
                            </label>
                        </div>
                        <div className="col-span-full">
                            <label
                                className="flex flex-col gap-2"
                                htmlFor="description"
                            >
                                <span className="font-semibold">
                                    Description
                                </span>
                                <textarea
                                    rows={6}
                                    className="w-full px-4 py-2 rounded-lg text-darkBg focus:outline-primary"
                                    name="description"
                                    id="description"
                                    placeholder="Enter equipment description"
                                ></textarea>
                            </label>
                        </div>
                        <div className="col-span-full mt-6">
                            <button className="btn w-full">
                                Add Equipment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default AddEquipment;
