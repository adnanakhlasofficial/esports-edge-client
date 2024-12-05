import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
    console.log(equipment);

    return (
        <div className="bg-slate-200 dark:bg-darkCard p-4 rounded-md w-72">
            <div className="mb-6 h-48 flex justify-center">
                <img
                    className="h-full"
                    src={equipment.image}
                    alt=""
                />
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-bold h-12">{equipment.name}</h2>
                <p className="flex gap-2 items-center">
                    <ReactStars
                        count={5}
                        value={4.8}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                    4.8
                </p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">{equipment.price}</p>
                <Link to={`/equipment/${equipment._id}`}>
                    <button className="btn">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

EquipmentCard.propTypes = {
    equipment: PropTypes.object,
};

export default EquipmentCard;
