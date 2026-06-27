import type { Class } from "../../types/class";

type Props = {
  selectedClass: Class | null;

  isMember: boolean;
  setIsMember: (value: boolean) => void;

  memberCode: string;
  setMemberCode: (value: string) => void;
};

export default function BookingModal({
  selectedClass,
  isMember,
  setIsMember,
  memberCode,
  setMemberCode,
}: Props) {
  const handleBooking = () => {
    if (!selectedClass) return;

    alert(`Booked ${selectedClass.type} at ${selectedClass.branch}`);

    (document.getElementById("booking_modal") as HTMLDialogElement)?.close();
  };

  return (
    <dialog id="booking_modal" className="modal">
      <div className="modal-box max-w-xl bg-white text-zinc-600">
        <h3 className="font-bold text-2xl mb-6 text-zinc-800">Book Class</h3>

        {/* CLASS */}
        <input
          value={selectedClass?.type || ""}
          readOnly
          className="input input-bordered w-full mb-3 bg-white"
        />

        {/* BRANCH */}
        <input
          value={selectedClass?.branch || ""}
          readOnly
          className="input input-bordered w-full mb-3 bg-white"
        />

        {/* DATETIME */}
        <input
          value={
            selectedClass
              ? new Date(selectedClass.classDate).toLocaleString()
              : ""
          }
          readOnly
          className="input input-bordered w-full mb-3 bg-white"
        />

        {/* LEVEL */}
        <input
          value={selectedClass?.level || ""}
          readOnly
          className="input input-bordered w-full mb-3 bg-white"
        />

        {/* DURATION */}
        <input
          value={`${selectedClass?.duration || 50} min`}
          readOnly
          className="input input-bordered w-full mb-3 bg-white"
        />

        {/* MEMBER SWITCH */}
        <div className="flex gap-4 mb-4">
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

        {/* MEMBER CODE */}
        {isMember && (
          <input
            value={memberCode}
            onChange={(e) => setMemberCode(e.target.value)}
            placeholder="Enter member code"
            className="input input-bordered w-full mb-4 bg-white"
          />
        )}

        <button
          onClick={handleBooking}
          className="w-full bg-black text-white py-3 rounded-full hover:bg-green-800 transition"
        >
          Confirm Booking
        </button>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
