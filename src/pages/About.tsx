import StorySection from "../components/About/StorySection";
import LocationsSection from "../components/About/LocationSection";

export default function About() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-20 text-zinc-800">
          About Us
        </h2>

        <StorySection />

        <LocationsSection />
      </div>
    </section>
  );
}
