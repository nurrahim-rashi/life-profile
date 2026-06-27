type Props = {
  title: string;
  setTitle: (value: string) => void;

  thumbnail: string;
  setThumbnail: (value: string) => void;

  content: string;
  setContent: (value: string) => void;

  onSubmit: () => Promise<void>;
};

export default function CreateNewsModal({
  title,
  setTitle,
  thumbnail,
  setThumbnail,
  content,
  setContent,
  onSubmit,
}: Props) {
  const handleSubmit = async () => {
    try {
      await onSubmit();

      // reset form kalau sukses
      setTitle("");
      setThumbnail("");
      setContent("");

      // close modal
      const modal = document.getElementById(
        "create_news_modal",
      ) as HTMLDialogElement | null;

      modal?.close();
    } catch (err: any) {
      // 🔥 error message jelas, gak kosong
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to create news. Try again.";

      alert(message);

      console.error("CreateNews ERROR:", err);
    }
  };

  const isDisabled = !title.trim() || !thumbnail.trim() || !content.trim();

  return (
    <dialog id="create_news_modal" className="modal">
      <div className="modal-box max-w-2xl bg-white">
        <h3 className="font-bold text-3xl mb-6 text-zinc-800">Create News</h3>

        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="News title"
            className="input input-bordered w-full bg-white text-zinc-600"
          />

          <input
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Thumbnail URL"
            className="input input-bordered w-full bg-white text-zinc-600"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            placeholder="Write content..."
            className="textarea textarea-bordered w-full bg-white text-zinc-600"
          />

          <button
            onClick={handleSubmit}
            disabled={isDisabled}
            className={`w-full text-white py-4 rounded-full transition ${
              isDisabled
                ? "bg-zinc-400 cursor-not-allowed"
                : "bg-black hover:bg-green-800"
            }`}
          >
            Publish News
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
