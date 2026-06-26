import { useRef, useState } from "react";

function Classes() {
  const [date, setDate] = useState("Pick a date");

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  const [isMember, setIsMember] = useState(true);
  const [memberCode, setMemberCode] = useState("");

  const popoverRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-20">Our Classes</h2>

        {/* CONTROL BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* BRANCH DROPDOWN */}
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn m-1">
              Branch Location
            </div>

            <ul className="dropdown-content menu bg-base-100 rounded-box z-[60] w-52 p-2 shadow">
              <li>
                <a>Setrasari</a>
              </li>
              <li>
                <a>Lengkong</a>
              </li>
              <li>
                <a>Soekarno Hatta</a>
              </li>
            </ul>
          </div>

          {/* FILTER */}
          <form className="flex items-center gap-2 flex-wrap">
            {["Reformer", "Chair", "Tower", "Mat Pilates", "Flexband"].map(
              (item) => (
                <input
                  key={item}
                  className="
                    btn
                    checked:bg-green-800
                    checked:border-green-800
                    checked:text-white
                  "
                  type="checkbox"
                  aria-label={item}
                />
              ),
            )}
            <input className="btn btn-square" type="reset" value="×" />
          </form>

          {/* CALENDAR */}
          <div className="relative">
            <button
              type="button"
              className="btn"
              onClick={() => popoverRef.current?.classList.toggle("hidden")}
            >
              {date}
            </button>

            <div
              ref={popoverRef}
              className="hidden absolute right-0 mt-2 z-50 bg-base-100 rounded-box shadow-lg p-3"
            >
              <calendar-date
                className="cally"
                onChange={(e: any) => {
                  const val = e.target?.value;
                  setDate(val || "Pick a date");
                  popoverRef.current?.classList.add("hidden");
                }}
              >
                <svg slot="previous" className="size-4" viewBox="0 0 24 24">
                  <path d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

                <svg slot="next" className="size-4" viewBox="0 0 24 24">
                  <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

                <calendar-month />
              </calendar-date>
            </div>
          </div>
        </div>

        {/* CLASS LIST */}
        <ul className="list bg-base-100 rounded-box shadow-md mt-10">
          <li className="p-4 pb-2 text-xs opacity-60">
            Available classes this week
          </li>

          {[
            { name: "Chair (R)", branch: "Setrasari", color: "rose" },
            { name: "Reformer 1.5", branch: "Lengkong", color: "blue" },
            { name: "Tower 2.0", branch: "Soekarno Hatta", color: "green" },
          ].map((cls) => (
            <li key={cls.name} className="list-row items-center">
              <div
                className={`size-10 rounded-box bg-${cls.color}-100 flex items-center justify-center font-semibold text-${cls.color}-600`}
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
        <div className="bg-base-100 rounded-3xl shadow-md p-12 text-center mt-20">
          <h2 className="text-4xl font-bold mb-4">
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
          <div className="modal-box max-w-xl">
            <h3 className="font-bold text-2xl mb-6">Book a Class</h3>

            {/* CLASS */}
            <input
              value={selectedClass}
              readOnly
              className="input input-bordered w-full mb-3"
            />

            {/* BRANCH DROPDOWN */}
            <select className="select select-bordered w-full mb-3">
              <option>Setrasari</option>
              <option>Lengkong</option>
              <option>Soekarno Hatta</option>
            </select>

            {/* MEMBER TYPE */}
            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => setIsMember(true)}
                className={`btn flex-1 ${isMember ? "bg-green-800 text-white" : ""}`}
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

            {/* MEMBER CODE */}
            {isMember && (
              <input
                value={memberCode}
                onChange={(e) => setMemberCode(e.target.value)}
                placeholder="Enter member code"
                className="input input-bordered w-full mb-3"
              />
            )}

            {/* DATE */}
            <input type="date" className="input input-bordered w-full mb-3" />

            {/* TIME */}
            <select className="select select-bordered w-full mb-3">
              <option>08:00 - 08:50</option>
              <option>09:00 - 09:50</option>
              <option>10:00 - 10:50</option>
              <option>11:00 - 11:50</option>
            </select>

            {/* ACTION */}
            <button
              onClick={() => {
                if (!isMember) {
                  window.location.href = "";
                } else {
                  alert(`Booking confirmed for ${selectedClass}`);
                }
              }}
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
