import { Link } from "react-router-dom";
import type { NewsItem } from "../../types/newsItem";

type Props = {
  news: NewsItem[];
  loading: boolean;
};

function NewsSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white border border-zinc-200 rounded-3xl overflow-hidden animate-pulse"
        >
          <div className="h-[300px] bg-zinc-200" />
          <div className="p-8 space-y-3">
            <div className="h-3 w-1/4 bg-zinc-200" />
            <div className="h-6 w-2/3 bg-zinc-200" />
            <div className="h-4 w-full bg-zinc-200" />
            <div className="h-4 w-5/6 bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-zinc-200">
      <h3 className="text-2xl font-semibold text-zinc-800">No news yet</h3>
      <p className="text-zinc-500 mt-2">Be the first one to post.</p>
    </div>
  );
}

export default function NewsList({ news, loading }: Props) {
  if (loading) return <NewsSkeleton />;

  if (!loading && news.length === 0) return <EmptyState />;

  return (
    <div className="space-y-6">
      {news.map((item) => (
        <Link
          key={item.objectId}
          to={`/news/${item.objectId}`}
          className="block"
        >
          <article className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">
              <div className="flex items-center justify-between mb-4 text-sm text-zinc-500">
                <span>by {item.userId}</span>
              </div>

              <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                {item.title}
              </h2>

              <p className="text-zinc-600 leading-relaxed line-clamp-3">
                {item.content}
              </p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
