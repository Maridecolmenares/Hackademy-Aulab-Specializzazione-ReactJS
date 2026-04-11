import { Link } from "react-router-dom"
import { UserContext } from "../context/UseContext"
import { useContext } from "react"

export default function Navbar() {
    const { user, logout } = useContext(UserContext);

    return (
        <nav id="custom_navbar">
            <ul id="nav_list">
                <li className="nav_item">
                    <Link to={"/"} className="nav_link">Home</Link>
                </li>
                {user && (<li className="nav_item">
                    <Link to={"/info"} className="nav_link">Info</Link>
                </li>
                )}

                <li className="nav_item">
                    <Link to={"/login"} className="nav_link">Login</Link>
                </li>

                {(!user && (
                    <li className="nav_item">
                        <Link to={"/register"} className="nav_link">Register</Link>
                    </li>
                )) || (
                        <>
                            <li className="nav_item">
                                <p className="nav_link">{user.name}</p>
                            </li>
                            <li className="nav_item">
                                <button id="logout_btn" onClick={logout}>Logout</button>
                            </li>
                        </>
                    )}

            </ul>
        </nav>
    );
}