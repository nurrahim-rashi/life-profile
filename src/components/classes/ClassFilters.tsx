import { useRef } from "react";

type Props = {
  date: string;
  setDate: (value: string) => void;

  selectedBranch: string;
  setSelectedBranch: (value: string) => void;

  filterTypes: string[];
  toggleType: (type: string) => void;
};

export default function ClassFilters({
  date,
  setDate,
  selectedBranch,
  setSelectedBranch,
  filterTypes,
  toggleType,
}: Props) {
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const toggleCalendar = () => {
    popoverRef.current?.classList.toggle("hidden");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value || "Pick a date");
    popoverRef.current?.classList.add("hidden");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* BRANCH */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn bg-white text-zinc-800">
          {selectedBranch || "All Branches"}
        </div>

        <ul className="dropdown-content menu bg-white rounded-box z-[60] w-52 p-2 shadow text-zinc-600">
          <li>
            <button onClick={() => setSelectedBranch("")}>All Branches</button>
          </li>

          {["Setrasari", "Lengkong", "Soekarno Hatta"].map((branch) => (
            <li key={branch}>
              <button onClick={() => setSelectedBranch(branch)}>
                {branch}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* TYPE FILTER */}
      <div className="flex flex-wrap gap-2">
        {["Reformer", "Chair", "Tower", "Mat", "Flexband"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => toggleType(type)}
            className={`btn bg-white text-zinc-600 ${
              filterTypes.includes(type) ? "border-black border-2" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* DATE */}
      <div className="relative">
        <button
          type="button"
          className="btn bg-white text-zinc-600"
          onClick={toggleCalendar}
        >
          {date}
        </button>

        <div
          ref={popoverRef}
          className="hidden absolute right-0 mt-2 z-50 bg-white rounded-box shadow-lg p-3"
        >
          <input
            type="date"
            className="input input-bordered"
            onChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
}
