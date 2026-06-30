import { useEffect, useState } from "react";
import Backendless from "../../lib/backendless";

type Booking = {
  objectId: string;
  className: string;
  branch: string;
  level: string;
  type: string;
  datetime: string;
  duration: number;
  status: string;
};

export default function UpcomingClasses() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const [newDateTime, setNewDateTime] = useState("");

  const fetchBookings = async () => {
    try {
      const currentUser = await Backendless.UserService.getCurrentUser();

      if (!currentUser?.objectId) return;

      const whereClause = `
        userId='${currentUser.objectId}'
        AND status='Booked'
      `;

      const result = await Backendless.Data.of("Bookings").find({
        where: whereClause,
      });

      const sorted = [...result].sort(
        (a: any, b: any) =>
          new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
      );

      setBookings(sorted as Booking[]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const cancelBooking = async () => {
    if (!selectedBooking) return;

    try {
      await Backendless.Data.of("Bookings").save({
        objectId: selectedBooking.objectId,
        status: "Cancelled",
      });

      (document.getElementById("cancel_modal") as HTMLDialogElement)?.close();

      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Failed to cancel booking");
    }
  };

  const rescheduleBooking = async () => {
    if (!selectedBooking || !newDateTime) return;

    try {
      await Backendless.Data.of("Bookings").save({
        objectId: selectedBooking.objectId,
        datetime: newDateTime,
      });

      (
        document.getElementById("reschedule_modal") as HTMLDialogElement
      )?.close();

      setNewDateTime("");

      fetchBookings();
    } catch (err) {
      console.error(err);
      alert("Failed to reschedule booking");
    }
  };

  return (
    <>
      <section className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8 mb-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Your Upcoming Classes
          </h2>

          <span className="text-sm text-zinc-500">
            {bookings.length} upcoming classes
          </span>
        </div>

        {loading && (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-24 bg-zinc-100 rounded-2xl animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && bookings.length === 0 && (
          <h3 className="text-xl font-semibold text-zinc-500">
            No Upcoming Classes
          </h3>
        )}

        {!loading &&
          bookings.map((booking) => (
            <div
              key={booking.objectId}
              className="border border-zinc-200 rounded-2xl p-5 mb-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {booking.className}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {booking.type} • {booking.level}
                  </p>

                  <p className="text-zinc-500">{booking.branch}</p>

                  <p className="text-zinc-500">
                    {new Date(booking.datetime).toLocaleString()}
                  </p>

                  <p className="text-zinc-500">{booking.duration} min</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedBooking(booking);

                      (
                        document.getElementById(
                          "reschedule_modal",
                        ) as HTMLDialogElement
                      )?.showModal();
                    }}
                    className="px-5 py-3 rounded-full bg-black text-white hover:bg-green-800 transition"
                  >
                    Reschedule
                  </button>

                  <button
                    onClick={() => {
                      setSelectedBooking(booking);

                      (
                        document.getElementById(
                          "cancel_modal",
                        ) as HTMLDialogElement
                      )?.showModal();
                    }}
                    className="px-5 py-3 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* CANCEL MODAL */}
      <dialog id="cancel_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-2xl mb-4">Cancel Booking</h3>

          <p className="text-zinc-600 mb-6">
            Are you sure you want to cancel this class?
          </p>

          <div className="flex gap-3">
            <button
              onClick={cancelBooking}
              className="flex-1 bg-red-500 text-white py-3 rounded-xl"
            >
              Confirm Cancel
            </button>

            <form method="dialog" className="flex-1">
              <button className="w-full border py-3 rounded-xl">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* RESCHEDULE MODAL */}
      <dialog id="reschedule_modal" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-2xl mb-4">Reschedule Class</h3>

          <input
            type="datetime-local"
            value={newDateTime}
            onChange={(e) => setNewDateTime(e.target.value)}
            className="input input-bordered w-full mb-6 bg-white"
          />

          <div className="flex gap-3">
            <button
              onClick={rescheduleBooking}
              className="flex-1 bg-black text-white py-3 rounded-xl"
            >
              Save Changes
            </button>

            <form method="dialog" className="flex-1">
              <button className="w-full border py-3 rounded-xl">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
