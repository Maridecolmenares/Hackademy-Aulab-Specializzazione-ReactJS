import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import routes from "../router/routes";
import { getAllGamesLoader, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        children: [
            {
                path: routes.home,
                Component: Homepage,
                loader: getAllGamesLoader
            },
            {
                path: routes.search,
                Component: SearchPage,
                loader: getSearchedGames
            }
        ]
    }
])

export default router;