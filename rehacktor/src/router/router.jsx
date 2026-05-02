import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import routes from "../router/routes";
import { getAllGamesLoader, getSearchedGames } from "./loaders";
import SearchPage from "../views/SearchPage";
import { getAllGenres, getFilteredByGenreGames } from "./loaders";
import GenrePage from "../views/GenrePage";

const router = createBrowserRouter([
    {
        path: routes.home,
        Component: Layout,
        loader: getAllGenres,
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
            },
            {
                path: routes.genre,
                Component: GenrePage,
                loader: getFilteredByGenreGames
            }
        ]
    }
])

export default router;