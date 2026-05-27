import React from "react";
import styles from "./Faculty.module.css";
import { FaEnvelope } from 'react-icons/fa';

export default function Faculty({ isActive }: { isActive?: boolean }) {
  return (
    <section id="faculty" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>Faculty</span></div>
          <h1>Faculty Directory</h1>
          <p>Our academic and research staff</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-eyebrow">Academic Staff</div>
        <div className="section-title">Meet our faculty</div>
        <p className="section-lead">Our team brings together expertise spanning embedded systems, artificial intelligence, networking, cybersecurity, signal processing, and software engineering.</p>

        <div className={styles.facultyGrid}>
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>ED</div>
            <h3>Prof. Eustace M. Dogo</h3>
            <div className={styles.facultyTitle}>Head of Department · Professor</div>
            <div className={styles.facultyArea}>Artificial Intelligence, Machine Learning, Computer Vision</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>eustace.dogo@futminna.edu.ng</span>
            </div>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>JA</div>
            <h3>Dr. J. Agajo</h3>
            <div className={styles.facultyTitle}>Professor</div>
            <div className={styles.facultyArea}>Digital Signal Processing, Image Processing, Pattern Recognition</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>james.agajo@futminna.edu.ng</span>
            </div>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>IA</div>
            <h3>Engr.Dr. I.M Abdullahi</h3>
            <div className={styles.facultyTitle}>Senior Lecturer</div>
            <div className={styles.facultyArea}>Database Systems, Software Engineering, Cloud Computing</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>ibrahim.abdullahi@futminna.edu.ng</span>
            </div>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>BU</div>
            <h3>Engr. B.U. Umar</h3>
            <div className={styles.facultyTitle}>Senior Lecturer</div>
            <div className={styles.facultyArea}>Digital Signal Processing, Wireless Communications, OFDM</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>buhari.umar@futminna.edu.ng</span>
            </div>
          </div>
         
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>RI</div>
            <h3>Dr. I. Rabiu</h3>
            <div className={styles.facultyTitle}>Lecturer II</div>
            <div className={styles.facultyArea}>Cybersecurity, Network Architecture, Cyber Law & Policy</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>isah.rabiu@futminna.edu.ng</span>
            </div>
          </div>
         
           <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>DM</div>
            <h3>Engr.Dr. D. Maliki</h3>
            <div className={styles.facultyTitle}>Senior Lecturer</div>
            <div className={styles.facultyArea}>Database Systems, Software Engineering, Cloud Computing</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>d.maliki@futminna.edu.ng</span>
            </div>
          </div>
           <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>ID</div>
            <h3>Engr. I.A Dauda</h3>
            <div className={styles.facultyTitle}>Lecturer II</div>
            <div className={styles.facultyArea}>Digital Logic Design, FPGA Programming, VLSI Design</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>ibrahim.dauda@futminna.edu.ng</span>
            </div>
          </div>
           <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>BN</div>
            <h3>Dr. B.K. Nuhu</h3>
            <div className={styles.facultyTitle}>Lecturer II</div>
            <div className={styles.facultyArea}>Database Systems, Software Engineering, Cloud Computing</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>b.nuhu@futminna.edu.ng</span>
            </div>
          </div>
          <div className={styles.facultyCard}>
            <div className={styles.facultyAvatar}>MA</div>
            <h3>Engr. M.A. Akogbe</h3>
            <div className={styles.facultyTitle}>Lecturer II</div>
            <div className={styles.facultyArea}>Database Systems, Software Engineering, Cloud Computing</div>
            <div className={styles.facultyContact}>
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>mike.akogbe@futminna.edu.ng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
