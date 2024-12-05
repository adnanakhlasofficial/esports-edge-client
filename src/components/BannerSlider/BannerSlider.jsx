import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Banner from "../Banner/Banner";

import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";

const BannerSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Banner
                        title={"Gear Up for Greatness"}
                        desc={"Discover top-quality sports equipment designed to elevate your performance. From beginner to pro, we have everything you need to succeed."}
                        img={slide1}
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title={"Unleash Your Potential"}
                        desc={"Equip yourself with the best in sports gear. Explore our wide range of products to find the perfect fit for your athletic journey."}
                        img={slide2}
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title={"Champion's Choice"}
                        desc={"Shop the gear trusted by champions. Our premium selection ensures you have the tools to reach your peak performance."}
                        img={slide3}
                    ></Banner>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
