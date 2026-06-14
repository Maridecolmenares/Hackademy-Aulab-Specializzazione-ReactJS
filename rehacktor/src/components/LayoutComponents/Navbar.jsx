import { useState, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import routes from "../../router/routes";
import { UserContext } from "../../context/UserContext";

import Logo from "../../assets/logo_nav.png";
import Ryu from "../../assets/ryu.jpg";
import { supabase } from "../../database/supabase";

export default function Navbar() {
  const [slug, setSlug] = useState("");
  const [genres, setGenres] = useState([]);

  const { user, profile, signOut } = useContext(UserContext);
  const [avatarUrl, setAvatarUrl] = useState();

  const navigate = useNavigate();

  const getGenres = async () => {
    const response = await fetch(
      `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`,
    );

    const json = await response.json();

    setGenres(json.results);
  };

  const downloadAvatar = async () => {
    if (profile?.avatar_url) {
      const { data } = await supabase.storage
        .from("avatars")
        .download(profile.avatar_url);

      const url = URL.createObjectURL(data);

      setAvatarUrl(url);
    }
  };

  const handleChange = (e) => {
    setSlug(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && slug.trim()) {
      navigate(`/search/${slug}`);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    downloadAvatar();
    getGenres();
  }, [profile]);

  return (
    <div
      className="
        navbar
        bg-[#0B0C26]/95
        backdrop-blur-md
        text-white
        px-4
        border-b
        border-[#2B3F77]
        sticky
        top-0
        z-50
      "
    >
      {/* LOGO */}
      <div className="flex-1">
        <Link
          to={routes.home}
          className="
            group
            flex
            items-center
            gap-3
            w-fit
          "
        >
          <img
            src={Logo}
            alt="Reactor"
            className="
              h-12
              w-auto
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:rotate-3
              group-hover:drop-shadow-[0_0_18px_#C32E8C]
            "
          />

          <span
            className="
    hidden
    md:block
    text-xl
    font-bold
    transition-all
    duration-300
    group-hover:text-[#C32E8C]
    group-hover:[text-shadow:0_0_10px_#C32E8C]
  "
          >
            Reactor
          </span>
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to={routes.home}
            className="
    hover:text-[#C32E8C]
    transition
  "
          >
            Home
          </Link>

          <a
            className="
    cursor-pointer
    hover:text-[#C32E8C]
    transition
  "
          >
            About
          </a>
        </div>

        {/* GENRES */}

        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="
                cursor-pointer
                hover:text-[#C32E8C]
                transition
              "
          >
            Genres
          </div>

          <ul
            tabIndex={0}
            className="
                dropdown-content
                z-[999]
                mt-4
                p-2
                w-56
                rounded-2xl
                bg-[#182B50]
                border
                border-[#2B3F77]
                shadow-2xl
                max-h-[500px]
                overflow-y-auto
              "
          >
            {genres.map((genre) => (
              <li key={genre.id}>
                <Link
                  to={`/genre/${genre.slug}`}
                  className="
                      block
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-[#702EE9]
                      transition
                    "
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search games..."
            value={slug}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="
              input
              w-28
              md:w-64
              bg-[#111633]
              border
              border-[#2B3F77]
              text-white
              focus:border-[#702EE9]
              focus:outline-none
            "
          />

          <Link
            to={slug.trim() ? `/search/${slug}` : "#"}
            className="
              text-lg
              hover:text-[#C32E8C]
              transition
              hover:scale-110
            "
          >
            <FaSearch />
          </Link>
        </div>

        {/* USER */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="
              cursor-pointer
              transition
              hover:scale-105
            "
          >
            <div
              className="
                w-11
                h-11
                rounded-full
                overflow-hidden
                border-2
                border-[#702EE9]
                hover:border-[#C32E8C]
                transition
              "
            >
              <img
                src={avatarUrl ?? Ryu}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="
              menu
              menu-sm
              dropdown-content
              mt-4
              z-[100]
              p-2
              w-56
              rounded-2xl
              bg-[#111633]
              border
              border-[#2B3F77]
              shadow-2xl
            "
          >
            {!user ? (
              <>
                <li>
                  <Link to={routes.login} className="hover:text-[#C32E8C]">
                    Login
                  </Link>
                </li>

                <li>
                  <Link to={routes.register} className="hover:text-[#C32E8C]">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mb-2 px-3 py-2 border-b border-[#2B3F77]">
                  <p className="text-[#C32E8C] font-semibold">
                    {profile?.username || profile?.first_name}
                  </p>
                </li>

                <li>
                  <Link to={routes.profile} className="hover:text-[#C32E8C]">
                    Profile
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="
                      text-left
                      hover:text-[#C32E8C]
                    "
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
