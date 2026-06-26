import { Link } from "react-router-dom";
import pilates from "../images/pilates.jpeg";

export default function Home() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${pilates})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/25" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-7xl font-bold text-black">
            Move Better.
            <br />
            Feel Stronger.
          </h1>

          <div className="mt-8">
            <Link
              to="/classes"
              className="
    btn
    bg-black
    text-white
    border-none
    px-8
    py-8
    rounded-full
    text-lg
    font-medium
    transition-all
    duration-300
    hover:bg-green-800
    hover:-translate-y-0.5
  "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
