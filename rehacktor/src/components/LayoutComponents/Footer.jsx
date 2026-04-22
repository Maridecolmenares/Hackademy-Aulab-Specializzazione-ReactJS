import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-[#0B0C26] text-white p-10">

            {/* LINKS */}
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover hover:text-[#85079F] transition">About</a>
                <a className="link link-hover hover:text-[#85079F] transition">Contact</a>
                <a className="link link-hover hover:text-[#85079F] transition">Jobs</a>
                <a className="link link-hover hover:text-[#85079F] transition">Press</a>
            </nav>

            {/* SOCIAL ICONS */}
            <nav>
                <div className="grid grid-flow-col gap-6 text-xl">
                    <FaTwitter className="cursor-pointer hover:text-[#85079F] transition" />
                    <FaYoutube className="cursor-pointer hover:text-[#85079F] transition" />
                    <FaFacebook className="cursor-pointer hover:text-[#85079F] transition" />
                    <FaInstagram className="cursor-pointer hover:text-[#85079F] transition" />
                    <FaGithub className="cursor-pointer hover:text-[#85079F] transition" />
                </div>
            </nav>

            {/* COPYRIGHT */}
            <aside>
                <p>
                    © {new Date().getFullYear()} Reactor — All rights reserved
                </p>
            </aside>
        </footer>
    )
}