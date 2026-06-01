import Navbar from "../components/LayoutComponents/Navbar";
import Footer from "../components/LayoutComponents/Footer";
import Header from "../components/DetailComponents/Header";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DetailPage() {
  const game = useLoaderData();

  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(11,12,38,0.92) 0%,
      rgba(11,12,38,0.65) 15%,
      rgba(11,12,38,0.65) 40%,
      rgba(11,12,38,0.98) 100%
    ),
    radial-gradient(
      circle at center,
      rgba(11,12,38,0.15) 10%,
      rgba(11,12,38,0.95) 100%
    ),
    url(${game.background_image_additional || game.background_image})
  `,
        }}
      >
        <Header game={game} />
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl bg-[#1E356A] text-white hover:bg-[#702EE9] transition"
          >
            <FaArrowLeft />
            Back
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
