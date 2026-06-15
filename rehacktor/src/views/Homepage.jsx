import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import GameList from "../components/HomeComponents/GameList";
import routes from "../router/routes";

import { supabase } from "../database/supabase";
import { useEffect, useState } from "react";

import homeBg from "../assets/home_bg.png";

export default function Homepage() {
  const { trending, newReleases, upcoming } = useLoaderData();
  const [latestReviews, setLatestReviews] = useState([]);

  const getLatestReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select(
        `
        *,
        profiles(username)
      `,
      )
      .order("created_at", { ascending: false });

    if (!data) return;

    const uniqueGames = [];
    const gameIds = new Set();

    for (const review of data) {
      if (!gameIds.has(review.game_id) && uniqueGames.length < 6) {
        gameIds.add(review.game_id);

        try {
          const response = await fetch(
            `https://api.rawg.io/api/games/${review.game_id}?key=${import.meta.env.VITE_API_KEY}`,
          );

          const game = await response.json();

          uniqueGames.push({
            ...review,
            background_image: game.background_image,
          });
        } catch {
          uniqueGames.push(review);
        }
      }
    }

    setLatestReviews(uniqueGames);
  };

  useEffect(() => {
    getLatestReviews();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(11,12,38,0.92) 0%,
            rgba(11,12,38,0.65) 15%,
            rgba(11,12,38,0.65) 40%,
            rgba(11,12,38,0.98) 100%
          ),
          radial-gradient(
            circle at center,
            rgba(11,12,38,0.15) 10%,
            rgba(11,12,38,0.95) 100%
          ),
          url(${homeBg})
        `,
      }}
    >
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Welcome to <span className="text-[#C32E8C]">REACTOR</span>
        </h1>

        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Track your games, build collections, share reviews and discover new
          worlds.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to={routes.register}
            className="px-7 py-3 rounded-xl bg-[#702EE9] text-white font-semibold hover:bg-[#C32E8C] transition-all duration-300 hover:scale-105"
          >
            Join Reactor
          </Link>

          <Link
            to={routes.login}
            className="px-7 py-3 rounded-xl border border-[#702EE9] text-white font-semibold hover:border-[#C32E8C] hover:text-[#C32E8C] transition-all"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-6 mb-2">
        <h2 className="text-xl font-bold text-white">Trending Games</h2>
        <p className="text-gray-400 mt-1">
          Discover what gamers are playing right now.
        </p>
      </section>

      <GameList>
        {trending.map((game) => (
          <GameList.Card key={game.id} game={game} />
        ))}
      </GameList>

      <div className="h-px max-w-5xl mx-auto mb-10 bg-gradient-to-r from-transparent via-[#702EE9] to-transparent" />

      {/* NEW RELEASES */}
      <section className="max-w-7xl mx-auto px-6 mb-4">
        <h2 className="text-xl font-bold text-white">New Releases</h2>
        <p className="text-gray-400 mt-1">Recently released games.</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-12">
        {newReleases.map((game) => (
          <Link key={game.id} to={`/detail/${game.id}`} className="group">
            <img
              src={game.background_image}
              alt={game.name}
              className="rounded-xl aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <p className="text-white mt-2 text-sm">{game.name}</p>
          </Link>
        ))}
      </div>

      <div className="h-px max-w-5xl mx-auto mb-10 bg-gradient-to-r from-transparent via-[#702EE9] to-transparent" />

      {/* UPCOMING */}
      <section className="max-w-7xl mx-auto px-6 mb-4">
        <h2 className="text-xl font-bold text-white">Upcoming Releases</h2>
        <p className="text-gray-400 mt-1">Games coming soon.</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-12">
        {upcoming.map((game) => (
          <Link key={game.id} to={`/detail/${game.id}`} className="group">
            <img
              src={game.background_image}
              alt={game.name}
              className=" rounded-xl aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <p className="text-[#C32E8C] text-xs mt-1">
              Release: {game.released}
            </p>
          </Link>
        ))}
      </div>

      <div className="h-px max-w-5xl mx-auto mb-10 bg-gradient-to-r from-transparent via-[#702EE9] to-transparent" />

      {/* LATEST REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 mb-4">
        <h2 className="text-xl font-bold text-white">Latest Reviews</h2>
        <p className="text-gray-400 mt-1">Recent reviews from the community.</p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestReviews.map((review) => (
          <Link
            key={review.game_id}
            to={`/detail/${review.game_id}`}
            className="flex gap-4 p-4 rounded-2xl bg-[#111633]/80 backdrop-blur-sm border border-[#2B3F77] hover:border-[#702EE9] transition duration-300"
          >
            <img
              src={review.background_image}
              alt={review.game_name}
              className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col flex-1">
              <h3 className="text-[#C32E8C] font-semibold">
                {review.game_name}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2 mt-1">
                {review.description}
              </p>
              <span className="text-xs text-gray-500 mt-auto">
                {review.profiles?.username} •{" "}
                {new Date(review.created_at).toLocaleDateString()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div> // Замінили закриваючий фрагмент </> на </div>
  );
}
