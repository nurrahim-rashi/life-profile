import { useEffect, useState } from "react";

import Backendless from "../lib/backendless";
import type { User } from "../types/user";

import PostBox from "../components/news/PostBox";
import NewsList from "../components/news/NewsList";
import CreateNewsModal from "../components/news/CreateNewsModal";
import UpcomingClasses from "../components/profile/UpcomingClass";

import { useNews } from "../hooks/useNews";
import { createNews } from "../services/news";

export default function HomeAuth() {
  const { news, loading, refreshNews } = useNews();

  const [user, setUser] = useState<User | null>(null);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");

  // ================= USER =================
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

  // ================= CREATE NEWS =================
  const handleCreateNews = async () => {
    if (!user?.userId) return;

    await createNews({
      title,
      content,
      thumbnail,
      userId: user.userId,
    });

    await refreshNews();

    // optional UX clean reset
    setTitle("");
    setThumbnail("");
    setContent("");
  };

  return (
    <section className="min-h-screen bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* UPCOMING */}
        <UpcomingClasses />

        {/* POST BOX */}
        <PostBox user={user} />

        {/* NEWS LIST */}
        <NewsList news={news} loading={loading} />

        {/* MODAL */}
        <CreateNewsModal
          title={title}
          setTitle={setTitle}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          content={content}
          setContent={setContent}
          onSubmit={handleCreateNews}
        />
      </div>
    </section>
  );
}
