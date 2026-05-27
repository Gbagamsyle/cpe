"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Nav.module.css";

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
    <nav className={styles.root}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="CPE logo" className={styles.logoImg} width={36} height={36} />
        </div>
        <div className={styles.title}>
          Dept. of Computer Engineering
          <span>Federal University of Technology, Minna</span>
        </div>
      </div>

      <button
        className={`${styles.toggle} ${menuOpen ? styles.open : ""}`}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a
              href="#"
              className={`${styles.link} ${active === id ? styles.active : ""}`}
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
