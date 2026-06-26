import { useEffect, useState } from "react";
import NewsList from "../components/NewsList";
import Backendless from "../lib/backendless";
import type { NewsItem } from "../types/news";

function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getNews = async () => {
    try {
      const result = await Backendless.Data.of("News").find();

      const sorted = [...result].sort(
        (a: any, b: any) => (b.created || 0) - (a.created || 0),
      );

      setNews(sorted as NewsItem[]);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12 text-zinc-800">
          News
        </h1>

        {/* HERO CAROUSEL */}
        <div className="carousel w-full rounded-3xl overflow-hidden shadow-lg">
          <div id="item1" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">New Member Promotion</h2>
              <p className="mt-2 text-sm text-white/80">
                Get 20% off your first private pilates session this month.
              </p>
            </div>
          </div>

          <div id="item2" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">Weekend Special Classes</h2>
              <p className="mt-2 text-sm text-white/80">
                Join reformer pilates weekend sessions.
              </p>
            </div>
          </div>

          <div id="item3" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">Instructor Highlight</h2>
              <p className="mt-2 text-sm text-white/80">
                Meet our certified instructors.
              </p>
            </div>
          </div>

          <div id="item4" className="carousel-item w-full relative">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-8">
              <h2 className="text-3xl font-bold">Studio Upgrade</h2>
              <p className="mt-2 text-sm text-white/80">
                New equipment just arrived ✨
              </p>
            </div>
          </div>
        </div>

        {/* NAV */}
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

        {/* NEWS LIST */}
        <NewsList news={news} loading={loading} />
      </div>
    </section>
  );
}

export default News;
