import { Link, NavLink, useNavigate } from "react-router-dom";
import logo2 from "../images/logo2.png";

function Navbar() {
  const navigate = useNavigate();

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Classes", path: "/classes" },
    { name: "Coaches", path: "/coaches" },
    { name: "News", path: "/news" },
  ];

  // cek status login
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar bg-white px-6 lg:px-10">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {menus.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}

            {/* Mobile auth button */}
            <li className="mt-2">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="text-red-500">
                  Logout
                </button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-black">
          <img src={logo2} alt="Life Pilates" className="h-20" />
        </Link>
      </div>

      {/* Desktop Menu */}
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

      {/* CTA */}
      <div className="navbar-end flex items-center gap-3">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="btn bg-black text-white rounded-full hover:bg-green-800"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-transparent rounded-full border-black text-black hover:bg-green-800 hover:text-white hover:-translate-y-0.5 transition"
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
