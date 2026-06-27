import type { Class } from "../../types/class";
import ClassCard from "./ClassCard";

type Props = {
  classes: Class[];
  loading: boolean;
  onBook: (item: Class) => void;
};

export default function ClassList({ classes, loading, onBook }: Props) {
  return (
    <ul className="list bg-white rounded-box shadow-md mt-10 text-zinc-800">
      <li className="p-4 pb-2 text-xs opacity-60">
        Available classes this week
      </li>

      {loading ? (
        <li className="p-4">Loading...</li>
      ) : (
        classes.map((item) => (
          <ClassCard key={item.objectId} item={item} onBook={onBook} />
        ))
      )}
    </ul>
  );
}
