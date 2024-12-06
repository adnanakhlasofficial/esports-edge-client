import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import productBg from "../../assets/img/product.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Swal from "sweetalert2";

const EquipmentDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

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
                fetch(`http://localhost:5000/equipment/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        Swal.fire({
                            title: "Removed!",
                            text: "Your file has been deleted.",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "OK",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate("/");
                            }
                        });
                    })
                    .catch((error) => console.log(error));
            }
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Equipment Details | Sport Edge</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <Banner
                    title={"Product Details"}
                    desc={data.name}
                    img={productBg}
                ></Banner>
            </div>

            <div className="wrapper">
                <button className="btn mt-16 w-56" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>

            <div className="max-w-2xl mx-auto my-4 p-4 bg-slate-200 dark:bg-darkPurple rounded-lg shadow-md transition duration-300">
                {" "}
                <div className="flex justify-center">
                    <img
                        className="h-80 rounded-lg"
                        src={data.image}
                        alt={data.name}
                    />
                </div>{" "}
                <div className="p-4">
                    {" "}
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {data.name}
                    </h2>{" "}
                    <p className="text-gray-600 dark:text-gray-400">
                        {data.category}
                    </p>{" "}
                    <p className="text-gray-800 dark:text-gray-100 mt-2 text-3xl font-bold">
                        Price: ${data.price}
                    </p>{" "}
                    <p className="text-yellow-500 mt-2 flex items-center gap-2 font-bold">
                        Rating:{" "}
                        <ReactStars
                            count={5}
                            value={data.rating}
                            size={24}
                            activeColor="#EAB308"
                        />{" "}
                        <span>{data.rating}</span>
                    </p>{" "}
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Customization: {data.customization}
                    </p>{" "}
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Delivery Time: {data.deliveryTime}
                    </p>{" "}
                    <p
                        className={`mt-2 font-bold ${
                            data.stockAvailability
                                ? "text-green-500 px-4 py-2 border-2 border-green-500 w-max rounded-full"
                                : "text-red-500 px-4 py-2 border-2 border-red-500 w-max rounded-full"
                        }`}
                    >
                        {" "}
                        {data.stockAvailability
                            ? "In Stock"
                            : "Out of Stock"}{" "}
                    </p>{" "}
                    <div className="mt-4">
                        {" "}
                        <p className="text-gray-600 dark:text-gray-400">
                            User Email: {data.useremail}
                        </p>{" "}
                        <p className="text-gray-600 dark:text-gray-400">
                            User Name: {data.username}
                        </p>{" "}
                    </div>{" "}
                    {user?.email === data?.useremail && (
                        <div className="mt-8 flex gap-4">
                            <Link
                                className="w-full block"
                                to={`/updateEquipment/${data._id}`}
                            >
                                <button className="btn block w-full">
                                    Update Details
                                </button>
                            </Link>
                            <button
                                onClick={() => handleRemoveEquipment(id)}
                                className="w-full btn border-red-500 before:bg-red-500 block"
                            >
                                Remove Equipment
                            </button>
                        </div>
                    )}
                </div>{" "}
            </div>
        </HelmetProvider>
    );
};

export default EquipmentDetails;
