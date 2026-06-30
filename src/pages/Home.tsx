import { Link } from "react-router-dom";
import pilates from "../images/pilates.jpeg";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-zinc-800">
      <main className="flex-1">
        <section className="relative flex min-h-screen items-center">
          <div className="absolute inset-0">
            <img
              src={pilates}
              alt="Bright, airy Pilates studio with reformers and natural light"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-background/40" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 pt-20">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-foreground/70">
                Pilates in a light-filled studio
              </p>
              <h1 className="font-heading text-5xl font-medium leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Move better.
                <br />
                Feel stronger.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80 sm:text-xl">
                Small-group classes designed to build strength, flexibility, and
                calm — one breath at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                <Link
                  to="/classes"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/50 px-8 py-4 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-medium text-foreground">
                  Small classes
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  No more than six people per session, so every movement gets
                  attention.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-medium text-foreground">
                  Expert guidance
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  Certified instructors meet you where you are, from
                  first-timers to advanced.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-medium text-foreground">
                  Calm space
                </h3>
                <p className="leading-relaxed text-foreground/70">
                  A quiet, light-filled studio designed to help you reset and
                  focus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              Ready to feel the difference?
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Book your first class and start with a complimentary intro
              session.
            </p>
            <div className="mt-8">
              <Link
                to="/classes"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Book your first class
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
