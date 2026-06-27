import type { Class } from "../../types/class";

type Props = {
  item: Class;
  onBook: (item: Class) => void;
};

export default function ClassCard({ item, onBook }: Props) {
  return (
    <li className="list-row items-center">
      <div className="size-10 rounded-box bg-zinc-100 flex items-center justify-center font-semibold text-zinc-800">
        {item.type[0]}
      </div>

      <div className="flex-1">
        <div className="font-semibold">{item.type}</div>

        <div className="text-xs opacity-60">
          {item.level} • {item.duration || 50} min • {item.branch}
        </div>

        <div className="text-xs opacity-40">
          {new Date(item.classDate).toLocaleString()}
        </div>
      </div>

      <button
        onClick={() => onBook(item)}
        className="bg-black text-white px-6 py-3 rounded-full"
      >
        Book
      </button>
    </li>
  );
}
