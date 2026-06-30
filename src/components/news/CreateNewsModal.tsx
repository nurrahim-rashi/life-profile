import { Dialog, DialogContent, DialogCancel } from "../ui/alert-dialog";
import { Button } from "../ui/button";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;

  title: string;
  setTitle: (value: string) => void;

  thumbnail: string;
  setThumbnail: (value: string) => void;

  content: string;
  setContent: (value: string) => void;

  onSubmit: () => Promise<void>;
};

export default function CreateNewsModal({
  open,
  setOpen,
  title = "",
  setTitle,
  thumbnail = "",
  setThumbnail,
  content = "",
  setContent,
  onSubmit,
}: Props) {
  const isDisabled = !title.trim() || !thumbnail.trim() || !content.trim();

  const handleSubmit = async () => {
    if (isDisabled) return;

    await onSubmit();

    setTitle("");
    setThumbnail("");
    setContent("");

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="
          fixed left-1/2 top-1/2 z-50
          -translate-x-1/2 -translate-y-1/2
          w-full max-w-lg
          rounded-2xl bg-white p-6 shadow-xl
          pointer-events-auto
        "
      >
        <h2 className="text-2xl font-bold mb-6">Create News</h2>

        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's new in the Core community?"
            className="input input-bordered w-full titlecase"
          />
          <input
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            placeholder="Put your Thumbnail URL"
            className="input input-bordered w-full"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            placeholder="Share what happened!"
            className="textarea textarea-bordered w-full"
          />
          <div className="flex justify-end gap-3 pt-2">
            <DialogCancel asChild>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-11 min-w-[120px] rounded-xl border border-zinc-300 px-6 font-medium transition hover:bg-zinc-100"
              >
                Cancel
              </button>
            </DialogCancel>

            <Button
              onClick={handleSubmit}
              disabled={isDisabled}
              className="h-11 min-w-[120px] rounded-xl"
            >
              Publish
            </Button>
          </div>{" "}
        </div>
      </DialogContent>
    </Dialog>
  );
}
