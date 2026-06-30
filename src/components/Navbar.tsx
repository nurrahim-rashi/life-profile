import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Backendless from "../lib/backendless";
// import logo2 from "../images/logo2.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const checkAuth = async () => {
    try {
      const user = await Backendless.UserService.getCurrentUser();
      setIsLoggedIn(!!user);
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await Backendless.UserService.logout();
    } catch (err) {
      console.error(err);
    }
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  const menus = isLoggedIn
    ? [
        { name: "Home", path: "/home" },
        { name: "Classes", path: "/classes" },
        { name: "Coaches", path: "/coaches" },
      ]
    : [
        { name: "About", path: "/about" },
        { name: "Classes", path: "/classes" },
        { name: "Coaches", path: "/coaches" },
        { name: "News", path: "/news" },
      ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/60 text-zinc-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 h-20">
        {/* LOGO */}
        <Link
          to="/"
          className="font-heading text-2xl font-semibold tracking-tight text-foreground"
        >
          Core
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 text-sm font-medium text-foreground/80 sm:flex">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden sm:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Log Out
              </button>
              <Link
                to="/classes"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
              >
                Book a class
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                Log In
              </Link>
              <Link
                to="/classes"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground/90"
              >
                Book a class
              </Link>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-zinc-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            {menus.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="py-2 text-foreground/80 hover:text-foreground"
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-zinc-200/60">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-foreground"
                  >
                    Log Out
                  </button>
                  <Link
                    to="/classes"
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-primary-foreground"
                  >
                    Book a class
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-5 py-2.5 text-foreground"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/classes"
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-primary-foreground"
                  >
                    Book a class
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
