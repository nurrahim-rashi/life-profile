import { location } from "../../services/location";
import LocationCard from "./LocationCard";

export default function LocationSection() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-semibold text-center mb-12 text-zinc-800">
        Join Us on Your Journey to Wellness
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {location.map((location) => (
          <LocationCard key={location.name} location={location} />
        ))}
      </div>
    </section>
  );
}
