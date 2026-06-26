import pilates from "../images/pilates.jpeg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { loginSchema, type LoginFormData } from "../schema/loginSchema";
import { login } from "../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user = await login(data.email, data.password);

      console.log("Logged in:", user);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } catch (error: any) {
      console.error(error);

      alert(error?.message || "Invalid email or password");
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black/5 px-4 sm:px-0"
      style={{
        backgroundImage: `url(${pilates})`,
      }}
    >
      <div className="absolute inset-0 bg-white/10" />

      <div
        className="
          relative z-10 w-full max-w-md
          bg-white/90 backdrop-blur-md
          rounded-3xl shadow-lg
          p-6 sm:p-10
        "
      >
        <h1
          className="
            text-3xl sm:text-4xl
            font-bold text-center
            mb-6 sm:mb-8
            text-zinc-800
          "
        >
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-600">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="
                w-full mt-1
                px-3 sm:px-4
                py-2.5 sm:py-3
                rounded-xl
                border border-zinc-200
                focus:outline-none focus:ring-2 focus:ring-black
              "
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-600">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="
                w-full mt-1
                px-3 sm:px-4
                py-2.5 sm:py-3
                rounded-xl
                border border-zinc-200
                focus:outline-none focus:ring-2 focus:ring-black
              "
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
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
              disabled:opacity-50
            "
          >
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm text-zinc-600 mt-5 sm:mt-6">
          Don't have an account? Contact admin
        </p>
      </div>
    </section>
  );
}
