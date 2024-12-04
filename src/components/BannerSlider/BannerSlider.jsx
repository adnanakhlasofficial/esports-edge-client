import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Banner from "../Banner/Banner";

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
                        title={"Lorem Ipsum"}
                        desc={"loremsadfasdfafaskdfhsd; asdfhaksdfjlkasdfj"}
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title={"Lorem Ipsum"}
                        desc={"loremsadfasdfafaskdfhsd; asdfhaksdfjlkasdfj"}
                    ></Banner>
                </SwiperSlide>
                <SwiperSlide>
                    <Banner
                        title={"Lorem Ipsum"}
                        desc={"loremsadfasdfafaskdfhsd; asdfhaksdfjlkasdfj"}
                    ></Banner>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
