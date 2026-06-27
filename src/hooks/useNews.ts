import { useEffect, useState } from "react";
import type { NewsItem } from "../types/newsItem";
import { getNews } from "../services/news";

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshNews = async () => {
    try {
      const data = await getNews();
      setNews(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshNews();
  }, []);

  return {
    news,
    loading,
    refreshNews,
  };
}
