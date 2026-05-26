"use client";

import React from "react";
import Image from "next/image";
import "./Nav.css";

export default function Nav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void; }) {
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

      <ul className="nav-links">
        {[
          ["home", "Home"],
          ["about", "About"],
          ["programs", "Programs"],
          ["academics", "Academics"],
          ["faculty", "Faculty"],
          ["news", "News & Events"],
          ["contact", "Contact"]
        ].map(([id, label]) => (
          <li key={id}>
            <a
              href="#"
              className={active === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(id as string);
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
