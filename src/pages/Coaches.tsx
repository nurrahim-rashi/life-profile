import CoachesGrid from "../components/coaches/CoachesGrid";
import { useCoaches } from "../hooks/useCoaches";

export default function Coaches() {
  const { coaches, loading } = useCoaches();

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-12 text-zinc-800">
          Our Coaches
        </h2>

        <CoachesGrid coaches={coaches} loading={loading} />
      </div>
    </section>
  );
}
