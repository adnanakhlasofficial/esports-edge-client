import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const EquipmentCard = ({ equipment }) => {
    console.log(equipment);

    return (
        <div className="bg-slate-200 p-4 rounded-md w-72">
            <div className="mb-6 h-48 flex justify-center">
                <img
                    className="h-full mix-blend-multiply"
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
                <button className="relative px-8 py-2 rounded-md bg-transparent isolation-auto z-10 border-2 text-blue-800 hover:text-white font-semibold border-blue-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                    View Details
                </button>
            </div>
        </div>
    );
};

EquipmentCard.propTypes = {
    equipment: PropTypes.object,
};

export default EquipmentCard;
