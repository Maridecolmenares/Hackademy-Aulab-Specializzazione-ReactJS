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