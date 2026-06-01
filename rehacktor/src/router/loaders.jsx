export async function getAllGamesLoader() {
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2019-09-01,2019-09-30&page_size=28`);
    const json = await promise.json();
    return json.results;
}

export async function getSearchedGames({ params }) {
    const response = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`
    );
    const json = await response.json();
    return json.results;
}

export async function getAllGenres() {
    const promise = await fetch(
        `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await promise.json();
    return json.results;
}

export async function getFilteredByGenreGames({ params }) {
    const promise = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`
    );
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({ params }) {

    const [gameResponse, screenshotsResponse] = await Promise.all([
        fetch(
            `https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`
        ),
        fetch(
            `https://api.rawg.io/api/games/${params.id}/screenshots?key=${import.meta.env.VITE_API_KEY}`
        )
    ]);

    const game = await gameResponse.json();
    const screenshots = await screenshotsResponse.json();

    return {
        ...game,
        screenshots: screenshots.results
    };
}