import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import myEquipment from "../../assets/img/myEquipment.jpeg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import Swal from "sweetalert2";

const EquipmentsList = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);

  const handleRemoveEquipment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "'Do you really want to remove this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        const remaining = equipments.filter(
          (equipment) => equipment._id !== id
        );
        setEquipments(remaining);

        fetch(`https://esports-edge-da.vercel.app/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Removed!",
                text: "Your file has been deleted.",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch("https://esports-edge-da.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter(
          (singleData) => singleData.useremail === user.email
        );
        setEquipments(filterData);
      });
  }, [user.email]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>My Equipments | Sports Edge</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <Banner
          title={"All Sports Equipment"}
          desc={
            "Explore our extensive range of high-quality sports equipment, including the Autograph Bat, Adidas Brazuca, and Cricket Bat MB Malik Supreme. Each item is carefully selected to ensure top performance and durability."
          }
          img={myEquipment}
        ></Banner>

        <div className="wrapper my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {equipments.map((equipment) => (
              <ProductCard
                key={equipment._id}
                equipment={equipment}
                handleRemoveEquipment={handleRemoveEquipment}
              ></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default EquipmentsList;
