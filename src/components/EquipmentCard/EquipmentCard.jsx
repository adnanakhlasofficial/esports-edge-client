import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
    console.log(equipment);

    return (
        <div className="bg-slate-200 dark:bg-[#161838] py-6 px-8 rounded-md w-10/12 flex flex-col">
            <div className="mb-6 h-48 flex justify-center">
                <img
                    className="h-full"
                    src={equipment.image}
                    alt=""
                />
            </div>
            <div className="grow flex gap-2">
                <h2 className="text-xl font-bold grow">{equipment.name}</h2>
                <p className="px-4 py-1 border-2  border-primary rounded-full w-max h-max">
                    4.8
                </p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <p className="text-2xl font-bold">${equipment.price}</p>
                <Link to={`/equipment/${equipment._id}`}>
                    <button className="btn w-max h-max">
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
