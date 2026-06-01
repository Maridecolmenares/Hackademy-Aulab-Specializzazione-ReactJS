import { useState } from "react";

export default function Header({ game }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="max-w-7xl mx-auto px-6 py-8 text-white">
      {/* TOP INFO */}
      <div className="mb-5">
        <h1 className="text-5xl font-bold mb-2">{game.name}</h1>
        <p className="text-gray-400 mb-2">{game.released}</p>

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-[#9B5CFF] mb-1">
              Developer
            </p>
            <p className="text-l font-semibold">
              {game.developers?.[0]?.name || "Unknown"}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wider text-[#9B5CFF] mb-1">
              Publisher
            </p>
            <p className="text-l font-semibold">
              {game.publishers?.[0]?.name || "Unknown"}
            </p>
          </div>
        </div>
      </div>

      {/* POSTER + DESCRIPTION */}
      <section className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
        <div>
          <img
            src={game.background_image}
            alt={game.name}
            className="w-[240px] h-[320px] md:w-[260px] md:h-[340px] object-cover rounded-2xl shadow-2xl border border-[#702EE9]"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">About the game</h2>

          <div
            className="
            bg-[#0B0C26]/70
            border
            border-[#2E3A6B]
            rounded-2xl
            p-6
            backdrop-blur-sm
            transition-all
            duration-500
        "
          >
            <div
              className={`
                text-gray-300
                leading-8
                overflow-hidden
                transition-all
                duration-500
                ${expanded ? "max-h-[3000px]" : "max-h-[180px]"}
            `}
              dangerouslySetInnerHTML={{
                __html: game.description,
              }}
            />

            <button
              onClick={() => setExpanded(!expanded)}
              className="
                mt-4
                text-[#9B5CFF]
                hover:text-[#C084FC]
                transition
                font-medium
            "
            >
              {expanded ? "Show less ▲" : "Read more ▼"}
            </button>
          </div>
        </div>
      </section>

      {/* GAME INFO */}
      <section className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-16">
        <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] p-5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#9B5CFF] mb-2">Rating</h3>
          <p className="text-2xl font-bold">{game.rating}</p>
        </article>

        <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] p-5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#9B5CFF] mb-2">Genres</h3>
          <p>{game.genres?.map((g) => g.name).join(", ")}</p>
        </article>

        <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] p-5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#9B5CFF] mb-2">Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {game.platforms?.map((platform) => (
              <span
                key={platform.platform.id}
                className="px-3 py-1 rounded-full bg-[#1E356A] text-white text-sm"
              >
                {platform.platform.name}
              </span>
            ))}
          </div>
        </article>

        <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] p-5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#9B5CFF] mb-2">ESRB</h3>
          <p>{game.esrb_rating?.name || "N/A"}</p>
        </article>

        <article className="bg-[#0B0C26]/70 border border-[#2E3A6B] p-5 rounded-2xl backdrop-blur-sm">
          <h3 className="text-[#9B5CFF] mb-2">Metacritic</h3>
          <p className="text-green-400 font-bold">{game.metacritic || "N/A"}</p>
        </article>
      </section>

      {/* SCREENSHOTS */}
      {game.screenshots?.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {game.screenshots.map((shot) => (
              <img
                key={shot.id}
                src={shot.image}
                alt={game.name}
                className="w-full h-[220px] object-cover rounded-2xl border border-[#2E3A6B] shadow-xl hover:scale-[1.03] hover:border-[#702EE9] hover:shadow-[0_0_30px_rgba(112,46,233,0.35)] hover:border-[#702EE9] transition duration-300"
              />
            ))}
          </div>
        </section>
      )}
    </header>
  );
}
