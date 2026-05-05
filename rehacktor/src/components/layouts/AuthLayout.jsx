import { Outlet } from "react-router-dom";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";

export default function AuthLayout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex items-center justify-center">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}