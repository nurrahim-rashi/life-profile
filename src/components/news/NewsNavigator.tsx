import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { NewsItem } from "../../types/newsItem";

type Props = {
  news?: NewsItem[];
  currentId: string;
};

export default function NewsNavigator({ news = [], currentId }: Props) {
  if (!Array.isArray(news) || news.length === 0) return null;

  const index = news.findIndex((n) => n.objectId === currentId);

  if (index === -1) return null;

  const prev = index > 0 ? news[index - 1] : null;
  const next = index < news.length - 1 ? news[index + 1] : null;

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
      {/* PREVIOUS */}
      {prev ? (
        <Link
          to={`/news/${prev.objectId}`}
          className="group rounded-2xl border border-zinc-200 p-4 transition hover:shadow-md"
        >
          <div className="mb-3 flex items-center gap-2 text-zinc-500">
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
            <span className="text-xs uppercase tracking-wide">Previous</span>
          </div>

          <p className="font-medium text-zinc-800 transition group-hover:text-terracotta">
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
          className="group rounded-2xl border border-zinc-200 p-4 text-right transition hover:shadow-md"
        >
          <div className="mb-3 flex items-center justify-end gap-2 text-zinc-500">
            <span className="text-xs uppercase tracking-wide">Next</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>

          <p className="font-medium text-zinc-800 transition group-hover:text-terracotta">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
