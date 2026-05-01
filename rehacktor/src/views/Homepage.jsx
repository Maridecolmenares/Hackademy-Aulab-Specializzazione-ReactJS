import { useLoaderData } from "react-router-dom";
import GameList from "../components/HomeComponents/GameList";

export default function Homepage() {
    const games = useLoaderData();


    return (
        <>
            <h1 className="font-electro text-4xl text-center font-bold mt-3">Reactor</h1>
            <p className="font-electro text-xl text-center m-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, id quisquam velit molestias qui animi sint asperiores, temporibus vero, eligendi facere nulla dolorem necessitatibus! Itaque consectetur eum commodi doloremque eaque!</p>
            <GameList>
                {games.map((game) => {
                    return (
                        <GameList.Card key={game.id} game={game} />
                    )
                })}
            </GameList>
        </>
    )
}
