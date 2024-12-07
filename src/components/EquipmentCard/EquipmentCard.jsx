import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const EquipmentCard = ({ equipment }) => {
    return (
        <div className="w-full p-4 bg-slate-200 dark:bg-[#161838] rounded-lg shadow-lg">
            {" "}
            <div className="h-56 flex justify-center">
                <img
                    className="h-full object-cover rounded-lg"
                    src={equipment.image}
                    alt={equipment.name}
                />
            </div>{" "}
            <div className="p-4">
                {" "}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {name}
                </h2>{" "}
                <p className="text-gray-600 dark:text-gray-400">
                    {equipment.category}
                </p>{" "}
                <div className="mt-2 flex items-center gap-1">
                    {" "}
                    <span className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        ${equipment.price}
                    </span>{" "}
                    <ReactStars
                        count={5}
                        value={parseFloat(equipment.rating)}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                        className="ml-4"
                    />{" "}
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                        {equipment.rating}
                    </span>{" "}
                </div>{" "}
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Delivery Time: {equipment.deliveryTime}
                </p>{" "}
                <p
                    className={`mt-2 ${
                        equipment.stockAvailability
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {" "}
                    {equipment.stockAvailability
                        ? "In Stock"
                        : "Out of Stock"}{" "}
                </p>{" "}
                <div className="mt-4 flex justify-between items-center">
                    {" "}
                    <Link className="w-full" to={`/equipment/${equipment._id}`}>
                        <button className="btn w-full"> View Details </button>{" "}
                    </Link>
                </div>{" "}
            </div>{" "}
        </div>
    );
};

EquipmentCard.propTypes = {
    equipment: PropTypes.object,
};

export default EquipmentCard;
