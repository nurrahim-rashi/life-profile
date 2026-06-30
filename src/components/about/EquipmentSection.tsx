const equipments = [
  {
    name: "Reformer",
    desc: "Full-body resistance training that builds strength, control, and alignment through spring-based movement.",
  },
  {
    name: "Tower",
    desc: "Focuses on spinal articulation, mobility, and deep core activation with controlled vertical resistance.",
  },
  {
    name: "Chair",
    desc: "Compact but intense — challenges balance, stability, and lower-body strength in minimal space.",
  },
  {
    name: "Flexband",
    desc: "Portable resistance tool for improving flexibility, muscle endurance, and controlled stretching.",
  },
  {
    name: "Mat Pilates",
    desc: "Foundation practice that strengthens core stability, posture, and body awareness using bodyweight control.",
  },
];

export default function EquipmentSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-800 leading-tight">
            Movement tools designed
            <br />
            <span className="italic text-zinc-500">
              to transform your body.
            </span>
          </h2>

          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Each equipment in our studio is designed to target different aspects
            of strength, flexibility, and control — building a complete,
            balanced practice.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {equipments.map((item, i) => (
            <div className="group border border-zinc-200 rounded-3xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-terracotta">
                  0{i + 1}
                </span>
                <div className="w-2 h-2 rounded-full bg-terracotta/40 group-hover:bg-terracotta transition" />
              </div>

              <h3 className="text-2xl font-serif text-zinc-800 mb-3">
                {item.name}
              </h3>

              <p className="text-zinc-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
