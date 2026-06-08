import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { supabase } from "../../database/supabase";

export default function BodySection({ game, profile_id }) {
  const [isFavourite, setIsFavourite] = useState(false);

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

  useEffect(() => {
    getFavourite();
  }, []);

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

        <div className="flex flex-col items-center">
          <p className="text-white text-lg mb-6">Reviews</p>

          <textarea
            className="
                            textarea
                            w-full
                            max-w-2xl
                            h-40
                            bg-[#111633]
                            border-[#2E3A6B]
                            text-white
                            focus:border-[#702EE9]
                        "
            placeholder="Write your review..."
          />

          <div className="mt-8 text-center">
            {isFavourite ? (
              <>
                <FaHeart
                  onClick={removeGame}
                  className="
          text-[#C32E8C]
          text-5xl
          cursor-pointer
          hover:scale-110
          hover:drop-shadow-[0_0_12px_#C32E8C]
          transition-all
          duration-300
          mx-auto
        "
                />

                <p className="mt-4 text-[#C32E8C] font-medium">
                  Added to favourites
                </p>
              </>
            ) : (
              <>
                <FaRegHeart
                  onClick={addGame}
                  className="
          text-gray-400
          text-5xl
          cursor-pointer
          hover:text-[#702EE9]
          hover:scale-110
          transition-all
          duration-300
          mx-auto
        "
                />

                <p className="mt-4 text-gray-300 font-medium">
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
