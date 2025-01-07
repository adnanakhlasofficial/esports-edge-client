import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import myEquipment from "../../assets/img/myEquipment.jpeg";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";

const SportsEquipment = () => {
  const loadedEquipments = useLoaderData();
  const [equipments, setEquipments] = useState(loadedEquipments || []);

  const handleSortEquipment = () => {
    const sorted = equipments.sort((prev, curr) => {
      return prev.price - curr.price;
    }, 0);

    setEquipments([...sorted]);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sport Equipment | Sports Edge</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <Banner
          title={"All Sports Equipment"}
          desc={
            "Explore our extensive range of high-quality sports equipment, including the Autograph Bat, Adidas Brazuca, and Cricket Bat MB Malik Supreme. Each item is carefully selected to ensure top performance and durability."
          }
          img={myEquipment}
        ></Banner>
        <div className="wrapper my-20">
          <div className="text-right">
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Ascending Order"
              data-tooltip-place="top"
              onClick={handleSortEquipment}
              className="btn"
            >
              Sort by Price
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12 h-fit">
            {equipments.map((equipment) => (
              <EquipmentCard
                key={equipment._id}
                equipment={equipment}
              ></EquipmentCard>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SportsEquipment;
