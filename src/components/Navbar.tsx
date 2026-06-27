import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Backendless from "../lib/backendless";
import logo2 from "../images/logo2.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <div className="navbar bg-white px-6 lg:px-10">
      {/* LEFT */}
      <div className="navbar-start">
        {/* MOBILE */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-zinc-800"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg text-zinc-800"
          >
            {menus.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* LOGO */}
        <Link
          to={isLoggedIn ? "/home" : "/"}
          className="text-2xl font-bold tracking-tight text-zinc-800"
        >
          <img src={logo2} alt="Life Pilates" className="h-20" />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          {menus.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                  text-sm
                  font-medium
                  transition
                  ${isActive ? "text-black" : "text-zinc-500 hover:text-black"}
                `
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-3">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="btn bg-transparent rounded-full border-black text-zinc-800 hover:bg-red-800 hover:text-white hover:-translate-y-0.5 transition"
            >
              Log Out
            </button>

            <Link
              to="/classes"
              className="btn rounded-full bg-black text-white border-none hover:bg-green-800"
            >
              Book a Class
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-transparent rounded-full border-black text-zinc-800 hover:bg-green-800 hover:text-white hover:-translate-y-0.5 transition"
            >
              Log In
            </Link>

            <Link
              to="/classes"
              className="btn rounded-full bg-black text-white border-none hover:bg-green-800"
            >
              Book a Class
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
