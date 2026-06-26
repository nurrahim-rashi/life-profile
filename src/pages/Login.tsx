import pilates from "../images/pilates.jpeg";

export default function Login() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black/5"
      style={{
        backgroundImage: `url(${pilates})`,
      }}
    >
      <div className="absolute inset-0 bg-white/10" />

      {/* login card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-10">
        {/* title */}
        <h1 className="text-4xl font-bold text-center mb-8">Welcome Back</h1>

        {/* subtitle */}

        {/* form */}
        <form className="space-y-4">
          {/* email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* button */}
          <button
            type="submit"
            className="
              w-full
              bg-black
              text-white
              px-6 py-3
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:bg-zinc-800
              hover:-translate-y-0.5
              mt-4
            "
          >
            Log In
          </button>
        </form>

        {/* footer text */}
        <p className="text-center text-sm text-zinc-500 mt-6">
          Don't have an account? Contact admin
        </p>
      </div>
    </section>
  );
}
