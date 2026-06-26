import { useEffect, useState } from "react";
import Backendless from "../lib/backendless";
import type { NewsItem } from "../types/news";
import NewsList from "../components/NewsList";

type User = {
  name?: string;
  username?: string;
  email?: string;
};

export default function HomeAuth() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");

  // ================= USER =================
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Backendless.UserService.getCurrentUser();

        setUser(currentUser);
      } catch (err) {
        console.error("USER ERROR:", err);
      }
    };

    fetchUser();
  }, []);

  // ================= NEWS =================
  const getNews = async () => {
    try {
      const result = await Backendless.Data.of("News").find();

      const sorted = [...result].sort(
        (a: any, b: any) => (b.created || 0) - (a.created || 0),
      );

      setNews(sorted as NewsItem[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  // ================= HELPERS =================
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const toTitleCase = (str: string) =>
    str
      .toLowerCase()
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  // ================= CREATE =================
  const createNews = async () => {
    try {
      if (!title || !content || !thumbnail) {
        alert("Please fill all fields");
        return;
      }

      if (!isValidUrl(thumbnail)) {
        alert("Thumbnail must be a valid URL");
        return;
      }

      const payload = {
        title: toTitleCase(title),
        content,
        thumbnail,
        username: user?.name || user?.username || user?.email || "Anonymous",
      };

      await Backendless.Data.of("News").save(payload);

      setTitle("");
      setThumbnail("");
      setContent("");

      (
        document.getElementById("create_news_modal") as HTMLDialogElement
      )?.close();

      getNews();
    } catch (err: any) {
      console.error("CREATE NEWS ERROR:", err);
      alert(err?.message || "Failed to create news");
    }
  };

  // ================= LOGOUT =================
  const logout = async () => {
    try {
      await Backendless.UserService.logout();
      localStorage.clear();
      window.location.href = "/login";
    } catch (err) {
      console.error("LOGOUT ERROR:", err);
    }
  };

  // ================= UI =================
  return (
    <section className="min-h-screen bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-5xl font-bold text-zinc-900">Community News</h1>
            <p className="text-zinc-500 mt-2">
              Stay updated with the latest announcements.
            </p>
          </div>

          {/* optional logout */}
          <button
            onClick={logout}
            className="px-5 py-2 bg-zinc-900 text-white rounded-full"
          >
            Logout
          </button>
        </div>

        {/* POST BOX */}
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 mb-10">
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="size-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
              {(user?.name?.[0] || user?.email?.[0] || "U").toUpperCase()}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-3">
              <button
                onClick={() =>
                  (
                    document.getElementById(
                      "create_news_modal",
                    ) as HTMLDialogElement
                  )?.showModal()
                }
                className="w-full text-left border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-500 hover:bg-zinc-50 transition"
              >
                What's happening today?
              </button>

              <div className="flex justify-end">
                <button
                  onClick={() =>
                    (
                      document.getElementById(
                        "create_news_modal",
                      ) as HTMLDialogElement
                    )?.showModal()
                  }
                  className="bg-black text-white px-6 py-3 rounded-full"
                >
                  Create News
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NEWS LIST */}
        <NewsList news={news} loading={loading} />

        {/* MODAL */}
        <dialog id="create_news_modal" className="modal">
          <div className="modal-box max-w-2xl bg-white">
            <h3 className="font-bold text-3xl mb-6">Create News</h3>

            <div className="space-y-4">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="News title"
                className="input input-bordered w-full"
              />

              <input
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="Thumbnail URL"
                className="input input-bordered w-full"
              />

              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write content..."
                rows={8}
                className="textarea textarea-bordered w-full"
              />

              <button
                onClick={createNews}
                className="w-full bg-black text-white py-4 rounded-full"
              >
                Publish News
              </button>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
}
