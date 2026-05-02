import { Link } from "react-router-dom";

export default function Sidebar({ genres }) {
    return (
        <aside className="bg-[#0B0C26] p-4 text-white">
            <h2 className="text-xl mb-4">Genres</h2>

            <ul className="flex flex-col gap-2">
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <Link
                            to={`/genre/${genre.slug}`}
                            className="hover:text-[#85079F] transition"
                        >
                            {genre.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}