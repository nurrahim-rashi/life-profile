import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Classes from "../pages/Classes";
import Coaches from "../pages/Coaches";
import News from "../pages/News";
import HomeAuth from "../pages/HomeAuth";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";
import PublicOnlyRoute from "./PublicOnlyRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/news" element={<News />} />

      {/* Private */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeAuth />
          </ProtectedRoute>
        }
      />

      {/* Login Only */}
      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <Login />
          </PublicOnlyRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
