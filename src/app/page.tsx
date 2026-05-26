"use client";

import React, { useState } from "react";
import Nav from "../components/Nav";
import HomeSection from "../components/Home";
import About from "../components/About";
import Programs from "../components/Programs";
import Academics from "../components/Academics";
import Faculty from "../components/Faculty";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Nav active={active} onNavigate={(id) => setActive(id)} />

      <main>
        <HomeSection isActive={active === "home"} onNavigate={(id) => setActive(id)} />
        <About isActive={active === "about"} />
        <Programs isActive={active === "programs"} />
        <Academics isActive={active === "academics"} />
        <Faculty isActive={active === "faculty"} />
        <News isActive={active === "news"} />
        
        <Contact isActive={active === "contact"} />
      </main>

      <Footer />
    </>
  );
}
