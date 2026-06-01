import { Link } from "react-router-dom";

export default function GameCard({ game }) {
    return (
        <>
            <Link to={`/detail/${game.id}`}>
                <div className="h-[200px] relative">
                    <img src={`${game.background_image}`} className="w-full h-full brightness-50" alt="image game" />
                    <p className="absolute bottom-px w-full text-center text-white">{game.name}</p>
                </div>
            </Link>
        </>
    )
}