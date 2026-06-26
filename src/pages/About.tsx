import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-20">About Us</h2>
      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>

          <p className="text-zinc-600 leading-8">
            Life Pilates was founded with a simple mission: to create a
            welcoming space where movement becomes a path to strength,
            confidence, and overall well-being.
          </p>

          <p className="text-zinc-600 leading-8 mt-4">
            We believe Pilates is more than exercise. It is a practice that
            improves posture, flexibility, balance, and body awareness while
            supporting a healthier lifestyle for people of all ages and fitness
            levels.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
          alt="Pilates Studio"
          className="rounded-3xl"
        />
      </section>

      {/* Address */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Join Us on Your Journey to Wellness
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Setrasari */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl.+Setrasari+Indah+No.2+Bandung"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition" />
              <h3 className="font-semibold">Setrasari</h3>
            </div>

            <p className="text-zinc-600">
              On second floor, Jl. Setrasari Indah No.2 lantai 2, Sukarasa, Kec.
              Sukasari, Kota Bandung, Jawa Barat 40152
            </p>
            <br />

            <button
              className="
        bg-black
        text-white
        px-6 py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:bg-green-800
        hover:-translate-y-0.5"
            >
              Get Directions
            </button>
          </a>

          {/* Lengkong */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl.+Lengkong+Kecil+No.56+Bandung"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition" />
              <h3 className="font-semibold">Lengkong</h3>
            </div>

            <p className="text-zinc-600">
              Jl. Lengkong Kecil No.56, Paledang, Kec. Lengkong, Kota Bandung,
              Jawa Barat 40261
            </p>
            <br />
            <button
              className="
        bg-black
        text-white
        px-6 py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:bg-green-800
        hover:-translate-y-0.5
      "
            >
              Get Directions
            </button>
          </a>

          {/* Soekarno Hatta */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl.+Soekarno-Hatta+No.337B+Bandung"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition" />
              <h3 className="font-semibold">Soekarno Hatta (Pop-Up Branch)</h3>
            </div>

            <p className="text-zinc-600">
              Jl. Soekarno-Hatta No.337B, Kb. Lega, Kec. Bojongloa Kidul, Kota
              Bandung, Jawa Barat 40235
            </p>
            <br />

            <button
              className="
        bg-black
        text-white
        px-6 py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:bg-green-800
        hover:-translate-y-0.5
      "
            >
              Get Directions
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
