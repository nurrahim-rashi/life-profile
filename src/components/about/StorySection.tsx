export default function StorySection() {
  return (
    <section className="grid md:grid-cols-2 gap-14 items-center mb-28">
      {/* IMAGE */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
          alt="Pilates Studio"
          className="rounded-3xl object-cover w-full h-full shadow-md"
        />

        {/* subtle overlay vibe */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-zinc-900/10 to-transparent pointer-events-none" />
      </div>

      {/* TEXT */}
      <div className="space-y-6">
        {/* BADGE */}
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Our Backstory
        </p>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-serif text-zinc-800 leading-tight">
          Movement that started
          <br />
          <span className="italic text-zinc-500">from intention.</span>
        </h2>

        {/* LEAD TEXT */}
        <p className="text-zinc-700 leading-8 text-base">
          Life Pilates was founded with a simple mission: to create a welcoming
          space where movement becomes a path to strength, confidence, and
          overall well-being.
        </p>

        {/* HIGHLIGHT QUOTE STYLE */}
        <div className="border-l-2 border-terracotta pl-4">
          <p className="text-zinc-600 leading-7 italic">
            Pilates is more than exercise — it’s how you reconnect with control,
            breath, and awareness in every movement.
          </p>
        </div>

        {/* SECOND PARAGRAPH */}
        <p className="text-zinc-600 leading-7">
          It improves posture, flexibility, balance, and body awareness while
          supporting a healthier lifestyle that lasts beyond the studio.
        </p>

        {/* MINI STATS / TRUST SIGNAL */}
        <div className="flex gap-8 pt-4">
          <div>
            <p className="text-2xl font-serif text-terracotta">5+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">
              Years
            </p>
          </div>

          <div>
            <p className="text-2xl font-serif text-terracotta">1K+</p>
            <p className="text-xs text-zinc-500 uppercase tracking-wider">
              Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
