"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Nav.css";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["programs", "Programs"],
  ["academics", "Academics"],
  ["faculty", "Faculty"],
  ["news", "News & Events"],
  ["contact", "Contact"],
];

export default function Nav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void; }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav>
      <div className="nav-brand">
        <div className="nav-logo">
          <Image src="/logo.jpg" alt="CPE logo" className="nav-logo-img" width={36} height={36} />
        </div>
        <div className="nav-title">
          Dept. of Computer Engineering
          <span>Federal University of Technology, Minna</span>
        </div>
      </div>

      <button
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a
              href="#"
              className={active === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(id);
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
