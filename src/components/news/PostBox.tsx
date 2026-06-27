import type { User } from "../../types/user";

type Props = {
  user: User | null;
};

export default function PostBox({ user }: Props) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 mb-10">
      <div className="flex gap-4">
        <div className="size-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
          {(user?.name?.[0] || user?.email?.[0] || "U").toUpperCase()}
        </div>

        <div className="flex-1">
          <button
            onClick={() =>
              (
                document.getElementById(
                  "create_news_modal",
                ) as HTMLDialogElement
              )?.showModal()
            }
            className="w-full text-left border border-zinc-200 rounded-2xl px-5 py-4 text-zinc-600"
          >
            What's happening today? Share with the community ♥︎
          </button>
        </div>
      </div>
    </div>
  );
}
