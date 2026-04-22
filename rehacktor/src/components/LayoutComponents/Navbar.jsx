import { IoGameController } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className="navbar bg-[#0B0C26] text-white px-4">

            {/* LEFT (лого як ти хотіла) */}
            <div className="flex-1">
                <a className="text-xl font-bold flex items-center gap-2 cursor-pointer hover:text-[#85079F] transition w-fit">
                    <IoGameController />
                    Reactor
                </a>
            </div>

            {/* RIGHT */}
            <div className="flex gap-4 items-center">

                {/* LINKS (тільки текстовий hover) */}
                <div className="hidden md:flex gap-4">
                    <a className="cursor-pointer hover:text-[#85079F] transition">Home</a>
                    <a className="cursor-pointer hover:text-[#85079F] transition">Games</a>
                </div>

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-24 md:w-auto bg-[#1E356A] border-none focus:outline-none text-white"
                />
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
        </div>
    )
}