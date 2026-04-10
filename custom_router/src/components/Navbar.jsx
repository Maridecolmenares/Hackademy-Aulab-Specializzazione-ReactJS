import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav id="custom_navbar">
            <ul id="nav_list">
                <li className="nav_item">
                    <Link to="/" className="nav_link">Home</Link>
                </li>
                <li className="nav_item">
                    <Link to="/info" className="nav_link">Info</Link>
                </li>

                <li className="nav_item">
                    <Link to="/login" className="nav_link">Login</Link>
                </li>

                <li className="nav_item">
                    <Link to="/register" className="nav_link">Register</Link>
                </li>

            </ul>
        </nav>
    )
}