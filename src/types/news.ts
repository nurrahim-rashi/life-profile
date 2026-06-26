export interface News {
  objectId?: string;
  title: string;
  content: string;
  category: "promo" | "announcement" | "event";
  imageUrl: string;
  author: string;
  createdAt?: string;
}
