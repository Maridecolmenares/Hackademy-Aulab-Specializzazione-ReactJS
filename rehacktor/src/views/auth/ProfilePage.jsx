import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Ryu from "../../assets/ryu.jpg";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
import { supabase } from "../../database/supabase";

export default function ProfilePage() {
  const { user, profile } = useContext(UserContext);

  const [avatarUrl, setAvatarUrl] = useState();
  const [favourites, setFavourites] = useState([]);
  const [reviews, setReviews] = useState([]);

  const download_avatar = async () => {
    if (profile?.avatar_url) {
      const { data } = await supabase.storage
        .from("avatars")
        .download(profile.avatar_url);

      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    }
  };

  const getFavourites = async () => {
    const { data } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile.id);

    setFavourites(data || []);
  };

  const getReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("profile_id", profile.id)
      .order("created_at", { ascending: false });

    setReviews(data || []);
  };

  useEffect(() => {
    if (profile) {
      download_avatar();
      getFavourites();
      getReviews();
    }
  }, [profile]);

  return (
    <main className="min-h-screen px-4 md:px-10 py-10">
      {user && profile && (
        <div className="max-w-7xl mx-auto">
          <section className="grid lg:grid-cols-[300px_1fr] gap-6 mb-10">
            {/* AVATAR */}
            <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl backdrop-blur-sm p-8 flex flex-col items-center">
              <img
                src={avatarUrl ?? Ryu}
                alt="Profile"
                className="w-[120px] h-[120px] rounded-full border-4 border-[#702EE9] object-cover shadow-xl"
              />
              <h1 className="text-2xl font-bold text-white mt-5 text-center">
                {profile.first_name} {profile.last_name}
              </h1>
              <p className="text-gray-400">@{profile.username}</p>
            </article>

            {/* PROFILE INFO */}
            <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl backdrop-blur-sm p-8 text-white">
              <h2 className="text-xl font-bold text-[#9B5CFF] mb-6">
                Profile Information
              </h2>
              <div className="space-y-3">
                <p className="text-gray-300">
                  Name: {profile.first_name} {profile.last_name}
                </p>
                <p className="text-gray-300">Username: {profile.username}</p>
                <p className="text-gray-300">Email: {user.email}</p>
              </div>
              <Link
                to={routes.profile_settings}
                className="inline-block mt-6 px-5 py-3 rounded-xl bg-[#702EE9] hover:bg-[#85079F] transition"
              >
                Settings
              </Link>
            </article>
          </section>

          {/* STATS + ANCHORS */}
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <a
              href="#favourites"
              className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center hover:border-[#702EE9] hover:scale-105 transition"
            >
              <p className="text-3xl font-bold text-white">
                {favourites.length}
              </p>
              <p className="text-gray-400">Liked</p>
            </a>

            <a
              href="#reviews"
              className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center hover:border-[#702EE9] hover:scale-105 transition"
            >
              <p className="text-3xl font-bold text-white">{reviews.length}</p>
              <p className="text-gray-400">Reviews</p>
            </a>

            <div className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-gray-400">Played</p>
            </div>

            <div className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-gray-400">Completed</p>
            </div>

            <div className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-gray-400">Backlog</p>
            </div>

            <div className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-white">0</p>
              <p className="text-gray-400">Purchased</p>
            </div>
          </section>

          {/* FAVOURITES */}
          <section id="favourites" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Favourite Games
            </h2>

            {favourites.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {favourites.map((game) => (
                  <Link
                    key={game.id}
                    to={`/detail/${game.game_id}`}
                    className="overflow-hidden rounded-2xl border border-[#2E3A6B] bg-[#0B0C26]/70 hover:border-[#702EE9] hover:scale-105 transition duration-300 block"
                  >
                    <img
                      src={game.game_image}
                      alt={game.game_name}
                      className="w-full h-[260px] object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-medium">
                        {game.game_name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No favourite games yet.</p>
            )}
          </section>

          {/* REVIEWS */}
          <section id="reviews">
            <h2 className="text-3xl font-bold text-white mb-8">Reviews</h2>

            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <article
                    key={review.id}
                    className="bg-[#0B0C26]/70 border border-[#2E3A6B] rounded-2xl p-6"
                  >
                    <h3 className="text-[#C084FC] font-semibold mb-2">
                      {review.game_name}
                    </h3>
                    <p className="text-gray-300">{review.description}</p>
                    <p className="text-gray-500 text-sm mt-3">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </article>
                ))
              ) : (
                <p className="text-gray-400">No reviews yet.</p>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
