import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Story from "./pages/Story.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import Shop from "./pages/Shop.jsx";
import PlantWalls from "./pages/PlantWalls.jsx";
import Blog from "./pages/Blog.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-emerald-950 text-stone-50">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plant-walls" element={<PlantWalls />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}
