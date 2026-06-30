import CoachesGrid from "../components/coaches/CoachesGrid";
import { useCoaches } from "../hooks/useCoaches";

export default function Coaches() {
  const { coaches, loading } = useCoaches();

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="tracking-[0.3em] text-sm mb-3">Meet The Team</p>

          <h1 className="text-5xl font-bold text-zinc-800 mb-6">Our Coaches</h1>

          <p className="max-w-2xl mx-auto">
            Our experienced instructors are here to guide every step of your
            Pilates journey. Whether you're just getting started or looking to
            refine your technique, you'll be supported by passionate
            professionals dedicated to helping you move better and feel
            stronger.
          </p>
        </div>

        {/* Coaches List */}
        <CoachesGrid coaches={coaches} loading={loading} />

        {/* Bottom CTA */}
        {!loading && coaches.length > 0 && (
          <div className="text-center mt-20">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to train with us?
            </h3>

            <p className="max-w-xl mx-auto">
              Find the coach that matches your goals and start building a
              healthier, stronger version of yourself today.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
