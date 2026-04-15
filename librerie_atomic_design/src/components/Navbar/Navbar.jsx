export default function Nuvbar() {
    return (
        // <nav className="bg-red-300 md:bg-red-500 h-[70px]">
        //     <ul className="flex justify-center items-center gap-10 h-full">
        //         <li className="hover:text-amber-50">Home</li>
        //         <li className="hover:text-amber-50">About</li>
        //         <li className="hover:text-amber-50">Login</li>
        //     </ul>
        // </nav>


        <div className="navbar shadow-sm bg-red-500 md:bg-red-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl hover:bg-pink-400 text-white">About</a>
                <a className="btn btn-ghost text-xl hover:bg-pink-400 text-white">Contacts</a>
                <a className="btn btn-ghost text-xl hover:bg-pink-400 text-white">Home</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost hover:bg-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current text-white"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                </button>
            </div>
        </div>
    );
}