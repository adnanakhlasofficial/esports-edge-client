import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root/Root";
import Home from "../../pages/Home/Home";
import SportsEquipment from "../../pages/SportsEquipment/SportsEquipment";
import AddEquipment from "../../pages/AddEquipment/AddEquipment";
import EquipmentsList from "../../pages/EquipmentsList/EquipmentsList";
import SignUp from "../../pages/SignUp/SignUp";
import SecureRoute from "../SecureRoute/SecureRoute";
import SignIn from "../../pages/SignIn/SignIn";
import EquipmentDetails from "../../pages/EquipmentDetails/EquipmentDetails";
import UpdateEquipment from "../../pages/UpdateEquipment/UpdateEquipment";
import Error from "../../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://esports-edge-da.vercel.app/equipments"),
            },
            {
                path: "/sports-equipment",
                element: <SportsEquipment></SportsEquipment>,
                loader: () => fetch("https://esports-edge-da.vercel.app/equipments"),
            },
            {
                path: "/add-equipment",
                element: (
                    <SecureRoute>
                        <AddEquipment></AddEquipment>
                    </SecureRoute>
                ),
            },
            {
                path: "/equipments-list",
                element: (
                    <SecureRoute>
                        <EquipmentsList></EquipmentsList>
                    </SecureRoute>
                ),
            },
            {
                path: "/equipment/:id",
                element: (
                    <SecureRoute>
                        <EquipmentDetails></EquipmentDetails>
                    </SecureRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://esports-edge-da.vercel.app/equipment/${params.id}`),
            },
            {
                path: "/updateEquipment/:id",
                element: (
                    <SecureRoute>
                        <UpdateEquipment></UpdateEquipment>
                    </SecureRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://esports-edge-da.vercel.app/equipment/${params.id}`),
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

export default router;
