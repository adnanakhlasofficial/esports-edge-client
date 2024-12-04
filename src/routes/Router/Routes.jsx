import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/Home/Home";
import SportsEquipment from "../../pages/SportsEquipment/SportsEquipment";
import AddEquipment from "../../pages/AddEquipment/AddEquipment";
import EquipmentsList from "../../pages/EquipmentsList/EquipmentsList";
import SignUp from "../../pages/SignUp/SignUp";
import SecureRoute from "../SecureRoute/SecureRoute";
import SignIn from "../../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "/sports-equipment",
                element: <SportsEquipment></SportsEquipment>
            },
            {
                path: "/add-equipment",
                element: <SecureRoute><AddEquipment></AddEquipment></SecureRoute>
            },
            {
                path: "equipments-list",
                element: <SecureRoute><EquipmentsList></EquipmentsList></SecureRoute>
            }
        ]
    },
    {
        path: "/signin",
        element: <SignIn></SignIn>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    }
]);

export default router;
