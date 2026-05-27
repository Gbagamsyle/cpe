import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <p><strong>Department of Computer Engineering</strong> · Federal University of Technology, Minna · Niger State, Nigeria</p>
      <p style={{marginTop: '6px'}}>© 2025 FUT Minna CPE Department. All rights reserved.</p>
    </footer>
  );
}
