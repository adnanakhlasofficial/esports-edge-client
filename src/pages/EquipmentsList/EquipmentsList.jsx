import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import myEquipment from "../../assets/img/myEquipment.jpeg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const EquipmentsList = () => {
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState([])

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
                    <div className="wrapper my-20">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="*:px-2 *:py-2">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>Stock</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {equipments.map((equipment, idx) => (
                                    <tr
                                        key={equipment._id}
                                        className="divide-y-2 divide-gray-200 dark:divide-gray-700  *:px-2 *:py-3 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                                    >
                                        <th className="text-right">
                                            {idx + 1}
                                        </th>
                                        <th>{equipment.name}</th>
                                        <th>${equipment.price}</th>
                                        <th>{equipment.rating}</th>
                                        <th>
                                            {equipment.stockAvailability ? (
                                                <span className="text-green-600">
                                                    In Stock
                                                </span>
                                            ) : (
                                                <span className="text-red-600">
                                                    Not in Stock
                                                </span>
                                            )}
                                        </th>
                                        <th className="text-center text-primary hover:underline underline-offset-2">
                                            <Link
                                                to={`/equipment/${equipment._id}`}
                                            >
                                                View Details
                                            </Link>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default EquipmentsList;
