import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h2>Home</h2>,
    },
    {
        path: "/signin",
        element: <h2>Login</h2>
    }
]);

export default router;
