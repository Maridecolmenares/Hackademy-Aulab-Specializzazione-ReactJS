import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";
import routes from "../../router/routes";
// import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Navbar() {
    const [slug, setSlug] = useState("");
    const { user, signOut } = useContext(UserContext);

    const handleChange = (e) => {
        setSlug(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && slug.trim()) {
            window.location.href = `/search/${slug}`;
        }
    };

    const handleLogout = async () => {
        await navigate('/');
        signOut();
    };

    return (
        <div className="navbar bg-[#0B0C26] text-white px-4">

            {/* LEFT */}
            <div className="flex-1">
                <Link className="text-xl font-bold flex items-center gap-2 cursor-pointer hover:text-[#85079F] transition w-fit" to={routes.home}>
                    <IoGameController />
                    Reactor
                </Link>
            </div>

            {/* RIGHT */}
            <div className="flex gap-4 items-center">

                {/* LINKS */}
                <div className="hidden md:flex gap-4">
                    <Link className="cursor-pointer hover:text-[#85079F] transition" to={routes.home}>Home</Link>
                    <a className="cursor-pointer hover:text-[#85079F] transition">About</a>
                    {/* <Link to={routes.login} className="hover:text-[#85079F]">Login</Link>
                    <Link to={routes.register} className="hover:text-[#85079F]">Register</Link> */}

                    {!user ? (
                        <>
                            <Link to={routes.login} className="hover:text-[#85079F]">
                                Login
                            </Link>

                            <Link to={routes.register} className="hover:text-[#85079F]">
                                Register
                            </Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="hover:text-[#85079F]">
                            Logout
                        </button>
                    )
                    }


                </div>

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-24 md:w-auto bg-[#1E356A] border-none focus:outline-none text-white"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Link className="btn btn-square bg-[#1E356A] border-none hover:bg-[#7f46e7]" to={`/search/${slug}`}>
                    <FaSearch className="text-white" />
                </Link>


                {/* USER DROPDOWN */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#182B50] rounded-box w-52"
                    >
                        <li><Link to={routes.login} className="hover:text-[#85079F]">Login</Link></li>
                        <li><Link to={routes.register} className="hover:text-[#85079F]">Register</Link></li>
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge bg-[#702EE9] border-none">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}