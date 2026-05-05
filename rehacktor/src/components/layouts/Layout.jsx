import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";
import Sidebar from "../LayoutComponents/Sidebar";

export default function Layout() {
    const genres = useLoaderData();

    return (
        <>
            {/* <Navbar />
            <Outlet />
            <Footer /> */}

            <div className="flex flex-col min-h-screen">
                <Navbar />

                <div className="flex flex-1">
                    {/* Sidebar */}
                    <div className="hidden md:block w-64">
                        <Sidebar genres={genres} />
                    </div>

                    {/* Content */}
                    <main className="flex-1 p-4">
                        <Outlet />
                    </main>
                </div>

                <Footer />
            </div>
        </>
    )
}