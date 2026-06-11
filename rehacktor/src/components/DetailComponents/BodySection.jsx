import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { supabase } from "../../database/supabase";

export default function BodySection({ game, profile_id }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const [description, setDescription] = useState("");
  const [gameReviews, setGameReviews] = useState([]);
  const [checkReview, setCheckReview] = useState(false);

  const addGame = async () => {
    await supabase.from("favourites").insert([
      {
        profile_id,
        game_id: game.id,
        game_name: game.name,
      },
    ]);

    setIsFavourite(true);
  };

  const removeGame = async () => {
    await supabase
      .from("favourites")
      .delete()
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);

    setIsFavourite(false);
  };

  const getFavourite = async () => {
    const { data: favourites } = await supabase
      .from("favourites")
      .select("*")
      .eq("profile_id", profile_id)
      .eq("game_id", game.id);

    if (favourites?.length > 0) {
      setIsFavourite(true);
    }
  };

  const getReviews = async () => {
    const { data: reviews } = await supabase
      .from("reviews")
      .select("*")
      .eq("game_id", game.id);

    setGameReviews(reviews || []);
  };

  const addReview = async () => {
    if (!description.trim()) return;

    await supabase.from("reviews").insert([
      {
        profile_id,
        game_id: game.id,
        game_name: game.name,
        description,
      },
    ]);

    setDescription("");
    setCheckReview(!checkReview);
  };

  useEffect(() => {
    getFavourite();
    getReviews();
  }, [checkReview]);

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div
        className="
          bg-[#0B0C26]/70
          border border-[#2E3A6B]
          rounded-2xl
          backdrop-blur-sm
          p-8
        "
      >
        <h2 className="text-2xl font-bold text-white mb-8">Community</h2>

        <div className="grid lg:grid-cols-[1fr_250px] gap-10">
          {/* REVIEWS */}
          <div>
            <p className="text-white text-lg mb-6 font-semibold">Reviews</p>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                textarea
                w-full
                h-40
                bg-[#111633]
                border-[#2E3A6B]
                text-white
                focus:border-[#702EE9]
              "
              placeholder="Write your review..."
            />

            <button
              onClick={addReview}
              className="
                mt-4
                px-6
                py-3
                rounded-xl
                bg-[#702EE9]
                hover:bg-[#85079F]
                text-white
                transition
              "
            >
              Send Review
            </button>

            <div
              className="
                mt-8
                space-y-4
                max-h-[400px]
                overflow-y-auto
                pr-2
              "
            >
              {gameReviews.length > 0 ? (
                gameReviews.map((review, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#111633]
                      border border-[#2E3A6B]
                      rounded-xl
                      p-4
                      text-gray-300
                    "
                  >
                    {review.description}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>

          {/* FAVOURITES */}
          <div className="flex flex-col items-center justify-center">
            {isFavourite ? (
              <>
                <FaHeart
                  onClick={removeGame}
                  className="
                    text-[#C32E8C]
                    text-6xl
                    cursor-pointer
                    hover:scale-110
                    hover:drop-shadow-[0_0_12px_#C32E8C]
                    transition-all
                    duration-300
                  "
                />

                <p className="mt-4 text-[#C32E8C] font-medium text-center">
                  Added to favourites
                </p>
              </>
            ) : (
              <>
                <FaRegHeart
                  onClick={addGame}
                  className="
                    text-gray-400
                    text-6xl
                    cursor-pointer
                    hover:text-[#702EE9]
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                />

                <p className="mt-4 text-gray-300 font-medium text-center">
                  Add to favourites
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
