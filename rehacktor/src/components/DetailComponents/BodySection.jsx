import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { supabase } from "../../database/supabase";

export default function BodySection({ game, profile_id }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const [description, setDescription] = useState("");
  const [gameReviews, setGameReviews] = useState([]);
  const [checkReview, setCheckReview] = useState(false);
  const [rating, setRating] = useState(5);

  const addGame = async () => {
    await supabase.from("favourites").insert([
      {
        profile_id,
        game_id: game.id,
        game_name: game.name,
        game_image: game.background_image,
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
      .select(
        `
      *,
      profiles(username)
    `,
      )
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
        rating,
      },
    ]);

    setDescription("");
    setRating(5);
    setCheckReview(!checkReview);
  };

  const deleteReview = async (reviewId) => {
    await supabase.from("reviews").delete().eq("id", reviewId);

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
            <p className="text-white text-lg mb-6 font-semibold">
              Reviews ({gameReviews.length})
            </p>

            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`
        text-4xl
        transition-all
        duration-300
        ${star <= rating ? "text-[#C32E8C]" : "text-gray-500"}
      `}
                >
                  ★
                </button>
              ))}
            </div>

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
                    <p className="font-semibold text-white mb-2">
                      {review.profiles?.username || "Unknown User"}
                    </p>
                    <>
                      <div className="mb-3 text-[#C32E8C] text-lg">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>

                      <p className="text-sm text-gray-500 mb-3">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>

                      <p>{review.description}</p>
                      {review.profile_id === profile_id && (
                        <button
                          onClick={() => deleteReview(review.id)}
                          className="
      mt-4
      text-red-400
      hover:text-red-300
      transition
      text-sm
    "
                        >
                          Delete review
                        </button>
                      )}
                    </>
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
