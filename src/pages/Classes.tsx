import { useRef, useState } from "react";

function Classes() {
  const [date, setDate] = useState("Pick a date");

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const [isMember, setIsMember] = useState(true);
  const [memberCode, setMemberCode] = useState("");

  const popoverRef = useRef<HTMLDivElement | null>(null);

  const classes = [
    { name: "Chair (R)", branch: "Setrasari", color: "rose" },
    { name: "Reformer 1.5", branch: "Lengkong", color: "blue" },
    { name: "Tower 2.0", branch: "Soekarno Hatta", color: "green" },
  ];

  const colorMap: Record<string, string> = {
    rose: "bg-rose-100 text-rose-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
  };

  const toggleCalendar = () => {
    popoverRef.current?.classList.toggle("hidden");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value || "Pick a date");
    popoverRef.current?.classList.add("hidden");
  };

  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-20 text-zinc-800">
          Our Classes
        </h2>

        {/* CONTROL BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* BRANCH DROPDOWN */}
          <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white text-zinc-800"
            >
              {selectedBranch || "Branch Location"}
            </div>

            <ul className="dropdown-content menu bg-white rounded-box z-[60] text-zinc-600 w-52 p-2 shadow">
              {["Setrasari", "Lengkong", "Soekarno Hatta"].map((b) => (
                <li key={b}>
                  <button type="button" onClick={() => setSelectedBranch(b)}>
                    {b}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* FILTER */}
          <form className="flex items-center gap-2 flex-wrap text-zinc-600">
            {["Reformer", "Chair", "Tower", "Mat Pilates", "Flexband"].map(
              (item) => (
                <input
                  key={item}
                  className="btn text-zinc-600 bg-white"
                  type="checkbox"
                />
              ),
            )}
            <input
              className="btn btn-square text-zinc-600 bg-white"
              type="reset"
              value="×"
            />
          </form>

          {/* CALENDAR */}
          <div className="relative">
            <button
              type="button"
              className="btn text-zinc-600 bg-white"
              onClick={toggleCalendar}
            >
              {date}
            </button>

            <div
              ref={popoverRef}
              className="hidden absolute right-0 mt-2 z-50 bg-base-100 rounded-box shadow-lg p-3"
            >
              <input
                type="date"
                className="input input-bordered"
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>

        {/* CLASS LIST */}
        <ul className="list bg-base-100 rounded-box shadow-md mt-10 text-zinc-600 bg-white">
          <li className="p-4 pb-2 text-xs opacity-60">
            Available classes this week
          </li>

          {classes.map((cls) => (
            <li key={cls.name} className="list-row items-center">
              <div
                className={`size-10 rounded-box flex items-center justify-center font-semibold ${colorMap[cls.color]}`}
              >
                {cls.name[0]}
              </div>

              <div className="flex-1">
                <div className="font-semibold">{cls.name}</div>
                <div className="text-xs opacity-60">
                  Beginner • 50 min • {cls.branch}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedClass(cls.name);
                  setSelectedBranch(cls.branch);

                  (
                    document.getElementById(
                      "booking_modal",
                    ) as HTMLDialogElement
                  )?.showModal();
                }}
                className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition"
              >
                Book
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="bg-base-100 rounded-3xl shadow-md p-12 text-center mt-20 text-zinc-600 bg-white">
          <h2 className="text-4xl font-bold mb-4 text-zinc-800">
            Want to Book a Private Session?
          </h2>

          <p className="text-zinc-600 max-w-2xl mx-auto mb-8">
            A private session helps you focus on your personal goals with full
            attention.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
            Book a Private Session
          </button>
        </div>

        {/* MODAL */}
        <dialog id="booking_modal" className="modal">
          <div className="modal-box max-w-xl bg-white text-zinc-600">
            <h3 className="font-bold text-2xl mb-6">Book a Class</h3>

            <input
              value={selectedClass}
              readOnly
              className="input input-bordered w-full mb-3 bg-white text-zinc-600"
            />

            <select className="select select-bordered w-full mb-3 bg-white text-zinc-600">
              <option>Setrasari</option>
              <option>Lengkong</option>
              <option>Soekarno Hatta</option>
            </select>

            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => setIsMember(true)}
                className={`btn flex-1  ${isMember ? "bg-green-800 text-white" : ""}`}
              >
                Member
              </button>

              <button
                type="button"
                onClick={() => setIsMember(false)}
                className={`btn flex-1 ${!isMember ? "bg-green-800 text-white" : ""}`}
              >
                Non-Member
              </button>
            </div>

            {isMember && (
              <input
                value={memberCode}
                onChange={(e) => setMemberCode(e.target.value)}
                placeholder="Enter member code"
                className="input input-bordered w-full mb-3 bg-white text-zinc-600"
              />
            )}

            <input
              type="date"
              className="input input-bordered w-full mb-3 bg-white text-zinc-600"
            />

            <select className="select select-bordered w-full mb-3 bg-white text-zinc-600">
              <option>08:00 - 08:50</option>
              <option>09:00 - 09:50</option>
              <option>10:00 - 10:50</option>
              <option>11:00 - 11:50</option>
            </select>

            <button
              onClick={() => alert(`Booking confirmed for ${selectedClass}`)}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-green-800 transition"
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
