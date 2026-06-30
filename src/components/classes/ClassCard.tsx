import { useState } from "react";
import type { Class } from "../../types/class";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  item: Class;
  onBook: (item: Class) => void;
};

export default function ClassCard({ item, onBook }: Props) {
  const [open, setOpen] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const [memberCode, setMemberCode] = useState("");

  const handleConfirm = () => {
    onBook(item); // ✅ FIX: now prop is used (no TS6133 error)
    alert(`Booked ${item.type} at ${item.branch}`);
    setOpen(false);
  };

  return (
    <li className="flex items-center justify-between gap-4 border-b border-zinc-200 bg-white px-4 py-3 hover:bg-zinc-50 transition">
      {/* LEFT ICON */}
      <div className="size-9 flex items-center justify-center bg-zinc-100 text-zinc-700 font-semibold text-xs">
        {item.type?.[0]}
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-zinc-800">{item.type}</span>

          <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
            {item.level}
          </Badge>
        </div>

        <div className="text-[11px] text-zinc-500 mt-0.5">
          {item.duration || 50} min • {item.branch}
        </div>

        <div className="text-[11px] text-zinc-400">
          {new Date(item.classDate).toLocaleString()}
        </div>
      </div>

      {/* ACTION */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
            Book
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[280px] p-4 rounded-xl border bg-white shadow-lg">
          <h3 className="font-semibold mb-3 text-sm">Book Class</h3>

          <div className="text-xs text-zinc-600 space-y-1 mb-3">
            <p>
              <b>{item.type}</b>
            </p>
            <p>{item.branch}</p>
            <p>{new Date(item.classDate).toLocaleString()}</p>
          </div>

          {/* MEMBER TOGGLE */}
          <div className="flex gap-2 mb-3">
            <button
              className={`flex-1 text-xs py-2 border rounded ${
                isMember ? "bg-black text-white" : ""
              }`}
              onClick={() => setIsMember(true)}
            >
              Member
            </button>

            <button
              className={`flex-1 text-xs py-2 border rounded ${
                !isMember ? "bg-black text-white" : ""
              }`}
              onClick={() => setIsMember(false)}
            >
              Non
            </button>
          </div>

          {/* MEMBER CODE */}
          {isMember && (
            <input
              value={memberCode}
              onChange={(e) => setMemberCode(e.target.value)}
              placeholder="Member code"
              className="w-full border rounded px-2 py-1 text-xs mb-3"
            />
          )}

          <Button onClick={handleConfirm} className="w-full text-xs">
            Confirm
          </Button>
        </PopoverContent>
      </Popover>
    </li>
  );
}
