import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Classes from "../pages/Classes";
import Coaches from "../pages/Coaches";
import News from "../pages/News";
import CreateNews from "../pages/CreateNews";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/create" element={<CreateNews />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
