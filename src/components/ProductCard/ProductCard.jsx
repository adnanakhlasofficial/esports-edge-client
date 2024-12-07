import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = ({ equipment, handleRemoveEquipment }) => {
    return (
        <div className="p-4 bg-slate-200 dark:bg-[#161838] rounded-lg shadow-md transition duration-300 flex flex-col">
            <div className="h-56 flex justify-center">
                <img
                    loading="lazy"
                    className="h-full object-cover rounded-lg"
                    src={equipment.image}
                    alt={equipment.name}
                />
            </div>
            <div className="p-4 grow">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {equipment.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {equipment.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    ${equipment.price}
                </p>

                <div className="mt-2 flex items-center">
                    <ReactStars
                        count={5}
                        value={parseFloat(equipment.rating)}
                        size={24}
                        isHalf={true}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                        {equipment.rating}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Delivery Time: {equipment.deliveryTime}
                </p>
                <p
                    className={`mt-2 ${
                        equipment.stockAvailability
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {equipment.stockAvailability ? "In Stock" : "Out of Stock"}
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <Link
                    className="w-full"
                    to={`/updateEquipment/${equipment._id}`}
                >
                    <button className="btn w-full">Update Details</button>
                </Link>
                <button
                    onClick={() => handleRemoveEquipment(equipment._id)}
                    className="btn border-red-500 before:bg-red-500"
                >
                    Remove Equipment
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    equipment: PropTypes.object,
    handleRemoveEquipment: PropTypes.func,
};

export default ProductCard;
