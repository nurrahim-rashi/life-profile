import { useState } from "react";
import type { User } from "../../types/user";
import CreateNewsModal from "./CreateNewsModal";

type Props = {
  user: User | null;

  title: string;
  setTitle: (value: string) => void;

  thumbnail: string;
  setThumbnail: (value: string) => void;

  content: string;
  setContent: (value: string) => void;

  onSubmit: () => Promise<void>;
};

export default function PostBox({
  user,
  title,
  setTitle,
  thumbnail,
  setThumbnail,
  content,
  setContent,
  onSubmit,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 mb-10">
        <div className="flex gap-4">
          <div className="size-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
            {(user?.name?.[0] || user?.email?.[0] || "U").toUpperCase()}
          </div>

          <div className="flex-1">
            <button
              onClick={() => setOpen(true)}
              className="w-full text-left border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-500"
            >
              What's happening today? Share with the community ♥︎
            </button>
          </div>
        </div>
      </div>
      <CreateNewsModal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        thumbnail={thumbnail}
        setThumbnail={setThumbnail}
        content={content}
        setContent={setContent}
        onSubmit={onSubmit}
      />
    </>
  );
}
