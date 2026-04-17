import { Link } from "react-router-dom"
import { UserContext } from "../context/UseContext"
import { useContext } from "react"
import useScroll from "../hooks/useScroll";

export default function Navbar() {
    const [scrolled, scrollY] = useScroll(); //Custom Hooks
    const { user, logout } = useContext(UserContext);

    return (
        //Custom Hooks
        <nav
            ref={scrolled}
            className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 0 ? "bg-base-100 shadow-md" : "bg-neutral"
                }`}
        >
            <ul id="nav_list" className="flex gap-6 items-center justify-center w-full">

                <li className="nav_item">
                    <Link to="/" className="btn btn-ghost hover:text-blue-500">
                        Home
                    </Link>
                </li>

                {user && (
                    <li className="nav_item">
                        <Link to="/info" className="btn btn-ghost hover:text-blue-500">
                            Info
                        </Link>
                    </li>
                )}

                <li className="nav_item">
                    <Link to="/login" className="btn btn-ghost hover:text-blue-500">
                        Login
                    </Link>
                </li>

                {!user ? (
                    <li className="nav_item">
                        <Link to="/register" className="btn btn-ghost hover:text-blue-500">
                            Register
                        </Link>
                    </li>
                ) : (
                    <>
                        <li className="nav_item">
                            <p className=" font-semibold">{user.name}</p>
                        </li>
                        <li className="nav_item">
                            <button className="btn btn-sm btn-error" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    );
}