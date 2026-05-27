import React from "react";
import "./Faculty.css";
import "./Home.css";
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

        <div className="faculty-grid">
          <div className="faculty-card">
            <div className="faculty-avatar">ED</div>
            <h3>Prof. Eustace M. Dogo</h3>
            <div className="faculty-title">Head of Department · Professor</div>
            <div className="faculty-area">Artificial Intelligence, Machine Learning, Computer Vision</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>eustace.dogo@futminna.edu.ng</span>
            </div>
          </div>
          <div className="faculty-card">
            <div className="faculty-avatar">JA</div>
            <h3>Dr. J. Agajo</h3>
            <div className="faculty-title">Professor</div>
            <div className="faculty-area">Digital Signal Processing, Image Processing, Pattern Recognition</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>james.agajo@futminna.edu.ng</span>
            </div>
          </div>
           <div className="faculty-card">
            <div className="faculty-avatar">IA</div>
            <h3>Engr.Dr. I.M Abdullahi</h3>
            <div className="faculty-title">Senior Lecturer</div>
            <div className="faculty-area">Database Systems, Software Engineering, Cloud Computing</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>ibrahim.abdullahi@futminna.edu.ng</span>
            </div>
          </div>
          <div className="faculty-card">
            <div className="faculty-avatar">BU</div>
            <h3>Engr. B.U. Umar</h3>
            <div className="faculty-title">Senior Lecturer</div>
            <div className="faculty-area">Digital Signal Processing, Wireless Communications, OFDM</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>buhari.umar@futminna.edu.ng</span>
            </div>
          </div>
         
          <div className="faculty-card">
            <div className="faculty-avatar">RI</div>
            <h3>Dr. I. Rabiu</h3>
            <div className="faculty-title">Lecturer II</div>
            <div className="faculty-area">Cybersecurity, Network Architecture, Cyber Law & Policy</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>isah.rabiu@futminna.edu.ng</span>
            </div>
          </div>
         
           <div className="faculty-card">
            <div className="faculty-avatar">DM</div>
            <h3>Engr.Dr. D. Maliki</h3>
            <div className="faculty-title">Senior Lecturer</div>
            <div className="faculty-area">Database Systems, Software Engineering, Cloud Computing</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>d.maliki@futminna.edu.ng</span>
            </div>
          </div>
           <div className="faculty-card">
            <div className="faculty-avatar">ID</div>
            <h3>Engr. I.A Dauda</h3>
            <div className="faculty-title">Lecturer II</div>
            <div className="faculty-area">Digital Logic Design, FPGA Programming, VLSI Design</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>ibrahim.dauda@futminna.edu.ng</span>
            </div>
          </div>
           <div className="faculty-card">
            <div className="faculty-avatar">BN</div>
            <h3>Dr. B.K. Nuhu</h3>
            <div className="faculty-title">Lecturer II</div>
            <div className="faculty-area">Database Systems, Software Engineering, Cloud Computing</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>b.nuhu@futminna.edu.ng</span>
            </div>
          </div>
          <div className="faculty-card">
            <div className="faculty-avatar">MA</div>
            <h3>Engr. M.A. Akogbe</h3>
            <div className="faculty-title">Lecturer II</div>
            <div className="faculty-area">Database Systems, Software Engineering, Cloud Computing</div>
            <div className="faculty-contact">
              <FaEnvelope style={{fontSize: '14px'}} aria-hidden="true" />
              <span>mike.akogbe@futminna.edu.ng</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
