import { Helmet, HelmetProvider } from "react-helmet-async";

const EquipmentsList = () => {
    return (
        <HelmetProvider>
            <div className="wrapper">
                <Helmet>
                    <title>Equipment List | Sport Edge</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
                <h2>Equipment List</h2>
            </div>
        </HelmetProvider>
    );
};

export default EquipmentsList;
