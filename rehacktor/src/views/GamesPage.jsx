import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GameList from "../components/HomeComponents/GameList";

export default function GamesPage() {
  const { trending, newReleases, upcoming } = useLoaderData();

  const [category, setCategory] = useState("trending");
  const [visibleCount, setVisibleCount] = useState(20);
  const gamesMap = {
    trending,
    newReleases,
    upcoming,
  };

  const games = gamesMap[category];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white">Discover Games</h1>
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => {
              setCategory("trending");
              setVisibleCount(20);
            }}
            className={
              category === "trending"
                ? "cursor-pointer bg-[#702EE9] text-white px-4 py-2 rounded-xl"
                : "cursor-pointer bg-[#111633] text-gray-300 px-4 py-2 rounded-xl"
            }
          >
            Trending
          </button>

          <button
            onClick={() => {
              setCategory("newReleases");
              setVisibleCount(20);
            }}
            className={
              category === "newReleases"
                ? "cursor-pointer bg-[#702EE9] text-white px-4 py-2 rounded-xl"
                : "cursor-pointer bg-[#111633] text-gray-300 px-4 py-2 rounded-xl"
            }
          >
            New Releases
          </button>

          <button
            onClick={() => {
              setCategory("upcoming");
              setVisibleCount(20);
            }}
            className={
              category === "upcoming"
                ? "cursor-pointer bg-[#702EE9] text-white px-4 py-2 rounded-xl"
                : "cursor-pointer bg-[#111633] text-gray-300 px-4 py-2 rounded-xl"
            }
          >
            Upcoming
          </button>
        </div>
        <p className="text-gray-400 mt-2">
          Browse popular games from our collection.
        </p>
      </section>

      <GameList>
        {games.slice(0, visibleCount).map((game) => (
          <GameList.Card key={game.id} game={game} />
        ))}
      </GameList>

      <div className="text-center pb-16">
        {visibleCount < games.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 20)}
            className="
        px-6
        py-3
        rounded-xl
        bg-[#702EE9]
        text-white
        hover:bg-[#C32E8C]
        transition
      "
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
