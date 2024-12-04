import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

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
        const stockAvailability = form.stockAvailability.value;

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
            stockAvailability
            };

        console.log(itemInfo);
    };

    return (
        <div>
            <h2>Add Your Equipment </h2>
            <div>
                <form onSubmit={handleAddEquipment}>
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
                        <label htmlFor="name">
                            <span>Item Name:</span>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your equipment name"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="category">
                            <span>Category Name:</span>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Enter your equipment category"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="price">
                            <span>Item Price:</span>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Enter your equipment price"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="rating">
                            <span>Item Rating:</span>
                            <input
                                type="text"
                                name="rating"
                                id="rating"
                                placeholder="Enter your equipment rating"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="customization">
                            <span>Item Customization:</span>
                            <input
                                type="text"
                                name="customization"
                                id="customization"
                                placeholder="Enter your customization"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="deliveryTime">
                            <span>Delivery Time:</span>
                            <input
                                type="text"
                                name="deliveryTime"
                                id="deliveryTime"
                                placeholder="Enter your delivery time"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="image">
                            <span>Item Image:</span>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                placeholder="Enter your equipment Image"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="stockAvailability">
                            <span>Stock Availabitly:</span>
                            <input
                                type="text"
                                name="stockAvailability"
                                id="stockAvailability"
                                placeholder="Enter your stockAvailability"
                            />
                        </label>
                    </div>
                    <div>
                        <button>Add Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;
