import golf from "../../assets/img/golf world.png";
import gym from "../../assets/img/outdoor-gym.png";
import walk from "../../assets/img/walking-pad.png";

const Category = () => {
    return (
        <div>
            <div>
                <h2 className="text-center my-8 text-3xl font-bold">Specialized Category</h2>
            </div>
            <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-2">
                <img className="row-span-2 lg:col-span-1 w-full h-full" src={gym} alt="" />
                <img className="w-full h-full" src={walk} alt="" />
                <img className="w-full h-full" src={golf} alt="" />
            </div>
        </div>
    );
};

export default Category;
