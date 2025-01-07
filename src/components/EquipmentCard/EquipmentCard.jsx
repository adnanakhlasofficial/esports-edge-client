import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
  return (
    <div className="w-full pt-4 bg-slate-200 dark:bg-[#161838] rounded-lg hover:shadow-lg flex flex-col h-full lg:hover:-translate-x-1 lg:hover:-translate-y-1 transition">
      {/* Image */}
      <div className="h-56 flex justify-center">
        <img
          loading="lazy"
          className="w-10/12 object-cover object-top rounded-md"
          src={equipment.image}
          alt={equipment.name}
        />
      </div>
      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow space-y-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {equipment.name}
          </h2>
          <p className="text-slate-600 my-1 text-xs bg-blue-200 px-2 py-1 rounded-lg w-max">
            {equipment.category}
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            &#36;{equipment.price}
          </p>
        </div>
        <div className="mt-4">
          <Link className="w-full" to={`/equipment/${equipment.id}`}>
            <button className="btn w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

EquipmentCard.propTypes = {
  equipment: PropTypes.object,
};

export default EquipmentCard;
