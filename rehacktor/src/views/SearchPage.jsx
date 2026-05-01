import { useLoaderData, useParams } from "react-router-dom";
import GameList from "../components/HomeComponents/GameList";

export default function SearchPage() {
    const games = useLoaderData();
    const { slug } = useParams();

    return (
        <>
            <h1 className="text-2xl text-center mt-10">Search by slug: {slug}</h1>

            <GameList>
                {games.map(game => (
                    <GameList.Card key={game.id} game={game} />
                ))}
            </GameList>
        </>
    )

}