import Backendless from "../lib/backendless";

export interface NewsItem {
  objectId?: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
}

export const createNews = async (news: NewsItem) => {
  return await Backendless.Data.of("News").save(news);
};

export const getNews = async () => {
  return await Backendless.Data.of("News").find();
};
