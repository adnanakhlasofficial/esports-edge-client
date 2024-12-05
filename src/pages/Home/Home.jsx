import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";

const Home = () => {
    const equipments = useLoaderData();
    console.log(equipments);

    return (
        <div className="mb-20">
            <BannerSlider></BannerSlider>

            <div className="wrapper my-12 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {equipments.slice(0, 6).map((equipment) => (
                    <EquipmentCard
                        key={equipment._id}
                        equipment={equipment}
                    ></EquipmentCard>
                ))}
            </div>
        </div>
    );
};

export default Home;
