import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const EquipmentDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    console.log(id);

    return (
        <>
            <div>
                <Banner title={"Product Details"} desc={data.name}></Banner>
            </div>

            <div className="wrapper !max-w-3xl w-full bg-slate-200 dark:bg-slate-800  my-12 flex justify-center gap-16 items-center rounded-3xl bg-off-white p-8">
                <div className="h-72">
                    <img className="h-full" src={data.image} alt="" />
                </div>

                <div className="space-y-4 h-1/2">
                    <div className="!text-darkText">
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

                    {user && data.useremail && (
                        <div>
                            <Link to={`/updateEquipment/${id}`}><button className="btn w-full">Update Details</button></Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EquipmentDetails;
