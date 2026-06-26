import { useEffect, useMemo, useRef, useState } from "react";
import Backendless from "../lib/backendless";

type ClassItem = {
  objectId: string;
  name: string;
  branch: string;
  datetime: string;
  duration?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  type: "Chair" | "Tower" | "Reformer" | "Mat" | "Flexband";
};

function Classes() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("Pick a date");
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedBranch, setSelectedBranch] = useState("");

  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [isMember, setIsMember] = useState(true);
  const [memberCode, setMemberCode] = useState("");

  const popoverRef = useRef<HTMLDivElement | null>(null);

  // ================= FETCH DB =================
  const fetchClasses = async () => {
    try {
      setLoading(true);

      const result = await Backendless.Data.of("Classes").find();

      const sorted = [...result].sort(
        (a: any, b: any) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
      );

      setClasses(sorted as ClassItem[]);
    } catch (err) {
      console.error("Failed to fetch classes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // ================= FILTER =================
  const filteredClasses = useMemo(() => {
    return classes.filter((c) => {
      const matchBranch = selectedBranch ? c.branch === selectedBranch : true;

      const matchType =
        filterTypes.length > 0 ? filterTypes.includes(c.type) : true;

      return matchBranch && matchType;
    });
  }, [classes, selectedBranch, filterTypes]);

  // ================= UI HELPERS =================
  const toggleCalendar = () => {
    popoverRef.current?.classList.toggle("hidden");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value || "Pick a date");
    popoverRef.current?.classList.add("hidden");
  };

  const toggleType = (type: string) => {
    setFilterTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-20 text-zinc-800">
          Our Classes
        </h2>

        {/* CONTROL BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* BRANCH */}
          <div className="dropdown relative">
            <div className="btn m-1 bg-white text-zinc-800">
              {selectedBranch || "All Branches"}
            </div>

            <ul className="dropdown-content menu bg-white rounded-box z-[60] w-52 p-2 shadow text-zinc-600">
              {["Setrasari", "Lengkong", "Soekarno Hatta"].map((b) => (
                <li key={b}>
                  <button onClick={() => setSelectedBranch(b)}>{b}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* TYPE FILTER */}
          <div className="flex gap-2 flex-wrap">
            {["Reformer", "Chair", "Tower", "Mat", "Flexband"].map((t) => (
              <button
                key={t}
                onClick={() => toggleType(t)}
                className={`btn text-zinc-600 bg-white ${
                  filterTypes.includes(t) ? "border-black" : ""
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* DATE */}
          <div className="relative">
            <button
              className="btn text-zinc-600 bg-white"
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

        {/* LIST */}
        <ul className="list bg-white rounded-box shadow-md mt-10 text-zinc-600">
          <li className="p-4 pb-2 text-xs opacity-60">Available classes</li>

          {loading ? (
            <li className="p-4">Loading classes...</li>
          ) : (
            filteredClasses.map((cls) => (
              <li key={cls.objectId} className="list-row items-center">
                <div className="size-10 rounded-box bg-zinc-100 flex items-center justify-center font-semibold">
                  {cls.type[0]}
                </div>

                <div className="flex-1">
                  <div className="font-semibold">{cls.type}</div>

                  <div className="text-xs opacity-60">
                    {cls.level} • {cls.duration || 50} min • {cls.branch}
                  </div>

                  <div className="text-xs opacity-40">
                    {new Date(cls.datetime).toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedClass(cls);
                    setSelectedBranch(cls.branch);

                    (
                      document.getElementById(
                        "booking_modal",
                      ) as HTMLDialogElement
                    )?.showModal();
                  }}
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
                >
                  Book
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="bg-base-100 rounded-3xl shadow-md p-12 text-center mt-20 text-zinc-600 bg-white">
          {" "}
          <h2 className="text-4xl font-bold mb-4 text-zinc-800">
            {" "}
            Want to Book a Private Session?{" "}
          </h2>{" "}
          <p className="text-zinc-600 max-w-2xl mx-auto mb-8">
            {" "}
            A private session helps you focus on your personal goals with full
            attention.{" "}
          </p>{" "}
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
            {" "}
            Book a Private Session{" "}
          </button>{" "}
        </div>

        {/* MODAL */}
        <dialog id="booking_modal" className="modal">
          <div className="modal-box bg-white text-zinc-600">
            <h3 className="font-bold text-2xl mb-6 text-zinc-600">
              Book Class
            </h3>

            <input
              value={selectedClass?.name || ""}
              readOnly
              className="input input-bordered w-full mb-3 text-zinc-600"
            />

            <select
              value={selectedClass?.branch || ""}
              className="select select-bordered w-full mb-3"
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option>Setrasari</option>
              <option>Lengkong</option>
              <option>Soekarno Hatta</option>
            </select>

            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => setIsMember(true)}
                className={`btn flex-1 ${
                  isMember ? "bg-green-800 text-white" : ""
                }`}
              >
                Member
              </button>

              <button
                type="button"
                onClick={() => setIsMember(false)}
                className={`btn flex-1 ${
                  !isMember ? "bg-green-800 text-white" : ""
                }`}
              >
                Non-Member
              </button>
            </div>

            {isMember && (
              <input
                value={memberCode}
                onChange={(e) => setMemberCode(e.target.value)}
                placeholder="Member code"
                className="input input-bordered w-full mb-3"
              />
            )}

            <input type="date" className="input input-bordered w-full mb-3" />

            <select className="select select-bordered w-full mb-3">
              <option>08:00 - 08:50</option>
              <option>09:00 - 09:50</option>
              <option>10:00 - 10:50</option>
            </select>

            <button
              onClick={() =>
                alert(
                  `Booked: ${selectedClass?.name} at ${selectedClass?.branch}`,
                )
              }
              className="w-full bg-black text-white py-3 rounded-full hover:bg-green-800"
            >
              Confirm Booking
            </button>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
}

export default Classes;
