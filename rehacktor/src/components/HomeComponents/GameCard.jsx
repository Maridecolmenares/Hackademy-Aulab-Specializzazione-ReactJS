import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link
      to={`/detail/${game.id}`}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border border-[#2B3F77]
        bg-[#111C66]/50
        backdrop-blur-sm
        shadow-xl
        transition-all
        duration-300
        hover:border-[#702EE9]
        hover:scale-[1.03]
      "
    >
      <div className="relative">
        <img
          src={game.background_image}
          alt={game.name}
          className="
            w-full
            h-[260px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0B0C26]
            via-transparent
            to-transparent
          "
        />

        <h3
          className="
            absolute
            bottom-4
            left-4
            right-4
            text-white
            font-bold
            text-lg
            drop-shadow-lg
          "
        >
          {game.name}
        </h3>
      </div>
    </Link>
  );
}
