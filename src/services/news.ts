import Backendless from "../lib/backendless";
import type { NewsItem } from "../types/newsItem";

export const getNews = async (): Promise<NewsItem[]> => {
  const result = await Backendless.Data.of("News").find();

  return [...result].sort(
    (a: any, b: any) => (b.created || 0) - (a.created || 0),
  ) as NewsItem[];
};

export const createNews = async (payload: {
  title: string;
  content: string;
  thumbnail: string;
  userId: string;
}) => {
  return await Backendless.Data.of("News").save(payload);
};
