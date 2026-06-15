import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import LogoFooter from "../../assets/logo_footer.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C26] border-t border-[#2B3F77]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* НАВІГАЦІЯ */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a className="hover:text-[#C32E8C] transition cursor-pointer">
            About
          </a>
          <a className="hover:text-[#C32E8C] transition cursor-pointer">
            Contact
          </a>
          <a className="hover:text-[#C32E8C] transition cursor-pointer">Jobs</a>
          <a className="hover:text-[#C32E8C] transition cursor-pointer">
            Press
          </a>
        </nav>

        {/* ЛОГОТИП ТА КОПІРАЙТ */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <img
            src={LogoFooter}
            alt="Reactor"
            className="w-[100px] transition duration-300 hover:scale-105"
          />
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Reactor — All rights reserved
          </p>
        </div>

        {/* СОЦМЕРЕЖІ */}
        <div className="flex gap-5 text-xl">
          <FaTwitter className="cursor-pointer hover:text-[#C32E8C] transition" />
          <FaYoutube className="cursor-pointer hover:text-[#C32E8C] transition" />
          <FaFacebook className="cursor-pointer hover:text-[#C32E8C] transition" />
          <FaInstagram className="cursor-pointer hover:text-[#C32E8C] transition" />
          <FaGithub className="cursor-pointer hover:text-[#C32E8C] transition" />
        </div>
      </div>
    </footer>
  );
}
