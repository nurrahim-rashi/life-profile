import NewsCarousel from "../components/news/NewsCarousel";
import NewsList from "../components/news/NewsList";
import { useNews } from "../hooks/useNews";

export default function News() {
  const { news, loading } = useNews();

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-12 text-zinc-800">
          News
        </h1>

        <NewsCarousel />

        <NewsList news={news} loading={loading} />
      </div>
    </section>
  );
}
