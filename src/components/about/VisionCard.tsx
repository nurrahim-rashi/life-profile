import React from "react";

const VisionCard: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-card relative grain">
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
        {/* LEFT STICKY */}
        <div className="md:col-span-4 md:sticky md:top-32">
          <p className="uppercase text-xs tracking-[0.3em] text-terracotta mb-6">
            Core's Vision.
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-zinc-800 leading-tight">
            Movement
            <br />
            <span className="italic text-zinc-500">with intention.</span>
          </h2>

          {/* <h2 className="font-serif text-5xl md:text-6xl leading-none">
            Movement
            <br />
            <span className="italic text-sage-deep">with intention.</span>
          </h2> */}
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            At Core Pilates Studio, every class is designed around precision,
            control, and awareness — not just repetition. We focus on how you
            move, not how much you do.
          </p>

          <p className="text-muted-foreground">
            Our sessions combine classical Pilates principles with modern
            functional training. Whether you're building strength, recovering
            from fatigue, or improving posture, each movement is guided with
            intention and supported by expert instructors.
          </p>

          <p className="text-muted-foreground">
            From Reformer flows to private 1:1 sessions, every class is
            structured to help you reconnect with your body — safely,
            progressively, and sustainably.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border text-foreground/70">
            {[
              { n: "6+", l: "Class Types" },
              { n: "1:1", l: "Private Focus" },
              { n: "100%", l: "Form First" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl text-terracotta">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionCard;
