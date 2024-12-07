import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const SecureRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const { pathname } = useLocation();

    if (!user) {
        return <Navigate to={"/signin"} state={pathname}></Navigate>;
    }

    return <>{children}</>;
};

SecureRoute.propTypes = {
    children: PropTypes.object,
};

export default SecureRoute;
