import { MapPin } from "lucide-react";

export default function About() {
  const locations = [
    {
      name: "Setrasari",
      link: "https://www.google.com/maps/search/?api=1&query=Jl.+Setrasari+Indah+No.2+Bandung",
      address:
        "On second floor, Jl. Setrasari Indah No.2 lantai 2, Sukarasa, Kec. Sukasari, Kota Bandung, Jawa Barat 40152",
    },
    {
      name: "Lengkong",
      link: "https://www.google.com/maps/search/?api=1&query=Jl.+Lengkong+Kecil+No.56+Bandung",
      address:
        "Jl. Lengkong Kecil No.56, Paledang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261",
    },
    {
      name: "Soekarno Hatta (Pop-Up Branch)",
      link: "https://www.google.com/maps/search/?api=1&query=Jl.+Soekarno-Hatta+No.337B+Bandung",
      address:
        "Jl. Soekarno-Hatta No.337B, Kb. Lega, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40235",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-20 text-zinc-800">
          About Us
        </h2>

        {/* OUR STORY */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-zinc-800">
              Our Story
            </h2>

            <p className="text-zinc-600 leading-8">
              Life Pilates was founded with a simple mission: to create a
              welcoming space where movement becomes a path to strength,
              confidence, and overall well-being.
            </p>

            <p className="text-zinc-600 leading-8 mt-4">
              We believe Pilates is more than exercise. It improves posture,
              flexibility, balance, and body awareness while supporting a
              healthier lifestyle.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
            alt="Pilates Studio"
            className="rounded-3xl object-cover w-full h-full"
          />
        </section>

        {/* LOCATIONS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-800">
            Join Us on Your Journey to Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition" />
                  <h3 className="font-semibold">{loc.name}</h3>
                </div>

                <p className="text-zinc-600">{loc.address}</p>

                <button
                  onClick={() => window.open(loc.link, "_blank")}
                  className="
                  mt-6
                  bg-black
                  text-white
                  px-6 py-3
                  rounded-full
                  font-medium
                  transition-all
                  hover:bg-green-800
                  hover:-translate-y-0.5
                "
                >
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
