export default function PrivateSession() {
  return (
    <div className="rounded-3xl shadow-md p-12 text-center mt-20 bg-white">
      <h2 className="text-4xl font-bold mb-4 text-zinc-800">
        Want to Book a Private Session?
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-zinc-600">
        A private session helps you focus on your personal goals with full
        attention.
      </p>

      <button className="bg-black text-white px-8 py-3 rounded-full">
        Book a Private Session
      </button>
    </div>
  );
}
