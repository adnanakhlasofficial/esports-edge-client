import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import productBg from "../../assets/img/product.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

const EquipmentDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

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
                <button className="btn mt-16 w-56" onClick={() => navigate(-1)}>Go Back</button>
            </div>

            <div className="wrapper !max-w-3xl w-full bg-slate-200 dark:bg-[#161838]  my-12 flex flex-col lg:flex-row justify-between gap-16 items-center rounded-3xl bg-off-white !px-20 !py-16">
                <div className="h-72 w-full">
                    <img className="h-full" src={data.image} alt="" />
                </div>

                <div className="space-y-4 w-full">
                    <div className="dark:!text-darkText text-darkBg">
                        <p>{data.username}</p>
                        <p>{data.useremail}</p>
                    </div>
                    <h2 className="text-3xl font-bold text-deep-black">
                        {data.name}
                    </h2>
                    <p className="text-xl font-semibold text-deep-gray">
                        Price: ${data.price}
                    </p>
                    <p
                        className={
                            data.stockAvailability
                                ? "inline-block rounded-full border-2 border-[#309C08]  px-4 py-2 text-sm font-medium text-[#309C08]"
                                : "inline-block rounded-full border-2 border-gray px-4 py-2"
                        }
                    >
                        {data.stockAvailability ? "In Stock" : "Out of Stock"}
                    </p>
                    <p className="text-lg text-gray">{"dfadf"}</p>
                    <div>
                        <h2 className="text-lg font-bold text-deep-black">
                            Rating
                        </h2>
                        <div className="flex items-center gap-4">
                            {data.rating && (
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={data.rating}
                                    activeColor="#F9C004"
                                    edit={false}
                                />
                            )}
                            <span className="rounded-full border-2 border-gray px-4 py-2 text-sm font-medium text-deep-black">
                                {data.rating}
                            </span>
                        </div>
                    </div>

                    {user.email === data.useremail && (
                        <div className="w-full space-y-4">
                            <Link to={`/updateEquipment/${id}`}>
                                <button className="btn w-full">
                                    Update Details
                                </button>
                            </Link>
                            <button className="btn w-full !border-red-500  before:bg-red-500">
                                Remove Equipment
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default EquipmentDetails;
