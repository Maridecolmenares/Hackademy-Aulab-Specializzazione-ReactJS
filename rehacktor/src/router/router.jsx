import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Homepage from "../views/Homepage";
import routes from "../router/routes";
import { getAllGamesLoader, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import { getAllGenres, getFilteredByGenreGames } from "./loaders";
import GenrePage from "../views/GenrePage";
import AuthLayout from "../components/layouts/AuthLayout";
import LoginPage from "../views/auth/LoginPage";
import RegisterPage from "../views/auth/RegisterPage";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        loader: getAllGenres,
        children: [
            {
                index: true,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredByGenreGames
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: LoginPage
            },
            {
                path: 'register',
                Component: RegisterPage
            }
        ]
    }
]);

export default router;