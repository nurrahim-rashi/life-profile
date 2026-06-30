import { useEffect, useState } from "react";

import Backendless from "../lib/backendless";
import type { User } from "../types/user";

import PostBox from "../components/news/PostBox";
import NewsList from "../components/news/NewsList";
import UpcomingClasses from "../components/profile/UpcomingClass";

import { useNews } from "../hooks/useNews";
import { createNews } from "../services/news";

export default function HomeAuth() {
  const { news, loading, refreshNews } = useNews();

  const [user, setUser] = useState<User | null>(null);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");

  // kalau belum dipakai UI, aman dihapus aja biar TS gak rewel
  // nanti kalau mau modal tinggal hidupin lagi
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Backendless.UserService.getCurrentUser();
        setUser(currentUser || null);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleCreateNews = async () => {
    if (!user?.userId) return;

    await createNews({
      title,
      content,
      thumbnail,
      userId: user.userId,
    });

    await refreshNews();

    setTitle("");
    setThumbnail("");
    setContent("");
  };

  return (
    <section className="min-h-screen bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <UpcomingClasses />

        <PostBox
          user={user}
          title={title}
          setTitle={setTitle}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          content={content}
          setContent={setContent}
          onSubmit={handleCreateNews}
        />

        <NewsList news={news} loading={loading} />
      </div>
    </section>
  );
}
