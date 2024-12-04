import PropTypes from "prop-types";

const Banner = ({ title, desc }) => {
    return (
        <div className="relative h-[30rem] flex justify-center items-center text-center">
            <div className="absolute w-full h-full -z-10">
                <img
                    className="w-full h-full object-cover object-center"
                    src="https://i.ibb.co.com/TYmyj7M/10004.jpg"
                    alt=""
                />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

export default Banner;
