import { Link } from "react-router-dom";
import type { NewsItem } from "../../types/newsItem";

type Props = {
  news?: NewsItem[];
  currentId: string;
};

export default function NewsNavigator({ news = [], currentId }: Props) {
  // safety guard biar gak crash
  if (!Array.isArray(news) || news.length === 0) return null;

  const index = news.findIndex((n) => n.objectId === currentId);

  if (index === -1) return null;

  const prev = index > 0 ? news[index - 1] : null;
  const next = index < news.length - 1 ? news[index + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-200">
      {/* PREVIOUS */}
      {prev ? (
        <Link
          to={`/news/${prev.objectId}`}
          className="group p-4 rounded-2xl border border-zinc-200 hover:shadow-md transition"
        >
          <p className="text-xs text-zinc-500 mb-2">Previous</p>
          <p className="font-medium text-zinc-800 group-hover:text-terracotta">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {/* NEXT */}
      {next ? (
        <Link
          to={`/news/${next.objectId}`}
          className="group p-4 rounded-2xl border border-zinc-200 hover:shadow-md transition text-right"
        >
          <p className="text-xs text-zinc-500 mb-2">Next</p>
          <p className="font-medium text-zinc-800 group-hover:text-terracotta">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
