import { Link } from "react-router"

export default function Navbar() {
    return (
        <nav id="custom_navbar">
            <ul id="nav_list">
                <li className="nav_item">
                    {/* <a href="/" className="nav_link">Home</a> */}
                    <Link to="/" className="nav_link">Home</Link>
                </li>
                <li className="nav_item">
                    {/* <a href="/info" className="nav_link">Info</a> */}
                    <Link to="/info" className="nav_link">Info</Link>
                </li>

            </ul>
        </nav>
    )
}