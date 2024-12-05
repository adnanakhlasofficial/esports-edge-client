import { Helmet, HelmetProvider } from "react-helmet-async";

const SportsEquipment = () => {
    return (
        <HelmetProvider>
            <Helmet>
                    <title>Sport Equipment | Sport Edge</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            <div>
                <h2>Sports Equipment</h2>
            </div>
        </HelmetProvider>
    );
};

export default SportsEquipment;
