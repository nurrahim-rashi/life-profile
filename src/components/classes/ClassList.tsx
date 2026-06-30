import type { Class } from "../../types/class";
import ClassCard from "./ClassCard";

type Props = {
  classes: Class[];
  loading: boolean;
  onBook: (item: Class) => void;
};

function ClassSkeleton() {
  return (
    <div className="space-y-3 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 animate-pulse">
          <div className="size-9 bg-zinc-200" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/3 bg-zinc-200" />
            <div className="h-2 w-1/2 bg-zinc-200" />
          </div>
          <div className="h-8 w-16 bg-zinc-200 rounded-full" />
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="p-10 text-center">
      <p className="text-sm font-medium text-zinc-800">
        No classes available right now
      </p>
      <p className="text-xs text-zinc-500 mt-1">
        Try adjusting filters or check again later
      </p>
    </div>
  );
}

export default function ClassList({ classes, loading, onBook }: Props) {
  return (
    <ul className="bg-white border border-zinc-200 mt-10 text-zinc-800">
      <li className="p-4 text-xs uppercase tracking-wider text-zinc-500 border-b">
        Available classes this week
      </li>

      {loading ? (
        <li>
          <ClassSkeleton />
        </li>
      ) : classes.length === 0 ? (
        <li>
          <EmptyState />
        </li>
      ) : (
        classes.map((item) => (
          <ClassCard key={item.objectId} item={item} onBook={onBook} />
        ))
      )}
    </ul>
  );
}
