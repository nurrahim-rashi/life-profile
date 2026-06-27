export default function StorySection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-zinc-800">Our Story</h2>

        <p className="text-zinc-600 leading-8">
          Life Pilates was founded with a simple mission: to create a welcoming
          space where movement becomes a path to strength, confidence, and
          overall well-being.
        </p>

        <p className="text-zinc-600 leading-8 mt-4">
          We believe Pilates is more than exercise. It improves posture,
          flexibility, balance, and body awareness while supporting a healthier
          lifestyle.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
        alt="Pilates Studio"
        className="rounded-3xl object-cover w-full h-full"
      />
    </section>
  );
}
