import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import myEquipment from "../../assets/img/myEquipment.jpeg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

const EquipmentsList = () => {
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/equipments")
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {equipments.map((equipment) => (
                            <ProductCard
                                key={equipment._id}
                                equipment={equipment}
                            ></ProductCard>
                        ))}
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default EquipmentsList;
