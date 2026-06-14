export async function getAllGamesLoader() {
  const [trendingResponse, newReleasesResponse, upcomingResponse] =
    await Promise.all([
      fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&ordering=-added&page_size=15`,
      ),

      fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,2025-12-31&ordering=-released&page_size=8`,
      ),

      fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2025-01-01,2026-12-31&ordering=released&page_size=8`,
      ),
    ]);

  const trending = await trendingResponse.json();
  const newReleases = await newReleasesResponse.json();
  const upcoming = await upcomingResponse.json();

  return {
    trending: trending.results,
    newReleases: newReleases.results,
    upcoming: upcoming.results,
  };
}

export async function getSearchedGames({ params }) {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`,
  );
  const json = await response.json();
  return json.results;
}

export async function getAllGenres() {
  const promise = await fetch(
    `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`,
  );
  const json = await promise.json();
  return json.results;
}

export async function getFilteredByGenreGames({ params }) {
  const promise = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`,
  );
  const json = await promise.json();
  return json.results;
}

export async function getGameDetails({ params }) {
  const [gameResponse, screenshotsResponse] = await Promise.all([
    fetch(
      `https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`,
    ),
    fetch(
      `https://api.rawg.io/api/games/${params.id}/screenshots?key=${import.meta.env.VITE_API_KEY}`,
    ),
  ]);

  const game = await gameResponse.json();
  const screenshots = await screenshotsResponse.json();

  return {
    ...game,
    screenshots: screenshots.results,
  };
}

// new
export async function getNewReleases() {
  const today = new Date();
  const lastMonth = new Date();

  lastMonth.setMonth(lastMonth.getMonth() - 1);

  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=${lastMonth.toISOString().split("T")[0]},${today.toISOString().split("T")[0]}&ordering=-released&page_size=8`,
  );

  const json = await response.json();

  return json.results;
}

export async function getUpcomingGames() {
  const today = new Date();
  const nextYear = new Date();

  nextYear.setFullYear(nextYear.getFullYear() + 1);

  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=${today.toISOString().split("T")[0]},${nextYear.toISOString().split("T")[0]}&ordering=released&page_size=8`,
  );

  const json = await response.json();

  return json.results;
}
