import PropTypes from "prop-types";
import { Fade, Slide } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";

const Banner = ({ title, desc, img }) => {
    const { pathname } = useLocation();

    return (
        <div
            className={`relative ${
                pathname === "/" ? "h-[75vh]" : "h-[40vh]"
            } flex justify-center items-center text-center`}
        >
            <div className="absolute w-full h-full z-10">
                <img
                    className="w-full h-full object-cover object-center"
                    src={img}
                    alt=""
                />
            </div>
            <div className="relative z-30 space-y-4">
                <Slide>
                    <h2 className="text-4xl font-bold text-slate-100">
                        {title}
                    </h2>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className="text-xl text-slate-300 max-w-[40rem]">
                        {desc}
                    </p>
                </Fade>
            </div>
            <div className="bg-black/70 absolute w-full h-full z-20"></div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
};

export default Banner;
