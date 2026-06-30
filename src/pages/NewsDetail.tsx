import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { NewsItem } from "../types/newsItem";
import { useNews } from "../hooks/useNews";
import NewsNavigator from "../components/news/NewsNavigator";
import { Breadcrumb } from "../components/ui/breadcrumb";

function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[420px] md:h-[520px] bg-zinc-200" />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        <div className="h-3 w-32 bg-zinc-200 rounded" />
        <div className="h-10 w-3/4 bg-zinc-200 rounded" />
        <div className="h-6 w-full bg-zinc-200 rounded" />
        <div className="h-6 w-5/6 bg-zinc-200 rounded" />
        <div className="h-6 w-2/3 bg-zinc-200 rounded" />

        <div className="mt-10 space-y-3">
          <div className="h-4 w-full bg-zinc-200 rounded" />
          <div className="h-4 w-full bg-zinc-200 rounded" />
          <div className="h-4 w-4/5 bg-zinc-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function NewsDetail() {
  const { id } = useParams();
  const { news } = useNews();

  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const found = news?.find((n) => n.objectId === id) || null;
    setArticle(found);

    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [id, news]);

  if (loading || !article) return <Skeleton />;

  return (
    <article className="min-h-screen bg-white">
      {/* HERO */}
      <div className="w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <Breadcrumb />

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-xs uppercase tracking-[0.25em] text-terracotta mb-4">
          Community News
        </div>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight text-zinc-800 mb-6">
          {article.title}
        </h1>

        <p className="text-lg text-zinc-600 leading-8 mb-10">
          {article.content}
        </p>

        <div className="space-y-6 text-zinc-700 leading-8">
          <p>
            At Core Pilates Studio, we believe every movement tells a story.
          </p>
          <p className="text-zinc-600">
            From beginners to advanced practitioners, every session matters.
          </p>
        </div>

        <div className="my-12 border-t border-zinc-200" />

        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>Core Pilates Studio</span>
          <span>
            {article.created
              ? new Date(article.created).toLocaleDateString()
              : "Recently"}
          </span>
        </div>

        <div className="mt-10">
          <NewsNavigator news={news || []} currentId={id || ""} />
        </div>
      </div>
    </article>
  );
}
