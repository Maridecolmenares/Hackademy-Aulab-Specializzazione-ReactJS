import GameCard from "./GameCard";

export default function GameList({ children }) {
  return (
    <main
      className="
        max-w-7xl
        mx-auto
        px-6
        pb-16
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-6
      "
    >
      {children}
    </main>
  );
}

GameList.Card = GameCard;
