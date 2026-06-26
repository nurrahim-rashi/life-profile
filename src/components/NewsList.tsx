import type { NewsItem } from "../types/news";

type Props = {
  news: NewsItem[];
  loading: boolean;
};

export default function NewsList({ news, loading }: Props) {
  return (
    <div className="space-y-6">
      {loading && <div className="text-center text-zinc-500">Loading...</div>}

      {!loading && news.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-zinc-200">
          <h3 className="text-2xl font-semibold text-zinc-800">No news yet</h3>

          <p className="text-zinc-500 mt-2">Be the first one to post.</p>
        </div>
      )}

      {news.map((item) => (
        <article
          key={item.objectId}
          className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-[350px] object-cover"
          />

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-600">by {item.username}</span>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              {item.title}
            </h2>

            <p className="text-zinc-600 leading-relaxed">{item.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
