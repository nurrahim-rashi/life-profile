import StorySection from "../components/about/StorySection";
import LocationSection from "../components/about/LocationSection";
import VisionCard from "../components/about/VisionCard";
import EquipmentSection from "../components/about/EquipmentSection";

export default function About() {
  return (
    <section className="relative min-h-screen bg-white gap-12">
      <VisionCard />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <EquipmentSection />
        <StorySection />
        <LocationSection />
      </div>
    </section>
  );
}
