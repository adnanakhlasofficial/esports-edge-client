import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Services from "../../components/Services/Services";
import BrandSection from "../../components/BrandSection/BrandSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import StoreLocation from "../../components/StoreLocation/StoreLocation";
import AboutUs from "../../components/AboutUs/AboutUs";
import Category from "../../components/Category/Category";

const Home = () => {
    const equipments = useLoaderData();

    return (
        <HelmetProvider>
            <div className="mb-20">
                <Helmet>
                    <title>Home | Sports Edge</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <BannerSlider></BannerSlider>

                <section className="my-12">
                    <AboutUs></AboutUs>
                </section>

                <section className="my-12">
                    <Services></Services>
                </section>

                <section>
                    <h2 className="text-center my-12 text-3xl font-bold">Our Products</h2>
                    <div className="wrapper my-12 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {equipments.slice(0, 6).map((equipment) => (
                            <EquipmentCard
                                key={equipment._id}
                                equipment={equipment}
                            ></EquipmentCard>
                        ))}
                    </div>
                </section>

                <section className="my-12">
                    <Category></Category>
                </section>

                <section>
                    <BrandSection></BrandSection>
                </section>

                <section>
                    <ContactUs></ContactUs>
                </section>

                <section>
                    <StoreLocation></StoreLocation>
                </section>
            </div>
        </HelmetProvider>
    );
};

export default Home;
