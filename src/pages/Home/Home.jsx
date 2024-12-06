import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    const equipments = useLoaderData();
    console.log(equipments);

    return (
        <HelmetProvider>
            <div className="mb-20">
                <Helmet>
                    <title>Home | Sport Edge</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <BannerSlider></BannerSlider>

                <div className="wrapper my-12 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipments.slice(0, 6).map((equipment) => (
                        <EquipmentCard
                            key={equipment._id}
                            equipment={equipment}
                        ></EquipmentCard>
                    ))}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;
