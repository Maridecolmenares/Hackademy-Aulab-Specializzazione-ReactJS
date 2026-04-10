import { createBrowserRouter } from "react-router-dom";
import Homepage from "../views/Homepage";
import Layout from "../components/Layout";
import Info from "../views/Info";
import { getAllPostsLoader } from "./loaders";
import { getSinglePostLoader } from "./loaders";
import DetailView from "../views/DetailView";
import Login from "../views/Login";
import Register from "../views/Register";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Homepage
            },
            {
                path: "/info",
                Component: Info,
                loader: getAllPostsLoader
            },
            {
                path: "/info/detail/:id",
                Component: DetailView,
                loader: getSinglePostLoader
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]
    },
]);

export default router;