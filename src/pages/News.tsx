function News() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12 text-zinc-800">
          News
        </h1>

        {/* HERO CAROUSEL */}
        <div className="carousel w-full rounded-3xl overflow-hidden shadow-lg">
          {/* slide 1 */}
          <div id="item1" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full object-cover h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">New Member Promotion</h2>
              <p className="mt-2 text-sm text-white/80">
                Get 20% off your first private pilates session this month.
                Limited slots available.
              </p>
            </div>
          </div>

          {/* slide 2 */}
          <div id="item2" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full object-cover h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">Weekend Special Classes</h2>
              <p className="mt-2 text-sm text-white/80">
                Join our exclusive weekend reformer pilates sessions designed
                for deep core activation.
              </p>
            </div>
          </div>

          {/* slide 3 */}
          <div id="item3" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full object-cover h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">Instructor Highlight</h2>
              <p className="mt-2 text-sm text-white/80">
                Meet our certified instructors who bring years of experience in
                movement and recovery training.
              </p>
            </div>
          </div>

          {/* slide 4 */}
          <div id="item4" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full object-cover h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">
                Studio Upgrade Announcement
              </h2>
              <p className="mt-2 text-sm text-white/80">
                We have upgraded our equipment and studio environment for a
                better pilates experience.
              </p>
            </div>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex w-full justify-center gap-2 py-6">
          <a href="#item1" className="btn btn-md bg-white text-zinc-600">
            1
          </a>
          <a href="#item2" className="btn btn-md bg-white text-zinc-600">
            2
          </a>
          <a href="#item3" className="btn btn-md bg-white text-zinc-600">
            3
          </a>
          <a href="#item4" className="btn btn-md bg-white text-zinc-600">
            4
          </a>
        </div>
      </div>
    </section>
  );
}

export default News;
