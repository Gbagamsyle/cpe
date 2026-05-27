import React from "react";
import homeStyles from "./Home.module.css";
import { GiMicroscope, GiScales } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';

export default function About({ isActive }: { isActive?: boolean }) {
  return (
    <section id="about" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>About</span></div>
          <h1>About the Department</h1>
          <p>History, mission, vision, and accreditations</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-eyebrow">Our Story</div>
        <div className="section-title">Two decades of engineering excellence</div>
        <p className="section-lead">Established as one of the pioneer departments of the Federal University of Technology, Minna, the Department of Computer Engineering has grown from a small faculty to a nationally recognized centre of technical education.</p>

        <div className="highlight-strip">
          &quot;Our graduates are solving Nigeria&apos;s most pressing challenges — from building healthcare technology to powering fintech infrastructure that serves millions of Nigerians every day.&quot;
        </div>

        <div className="divider" />

        <div className={homeStyles.missionVisionGrid}>
          <div>
            <div className="section-eyebrow">Mission</div>
            <p style={{fontSize: '14px', color: 'var(--text-dark)', lineHeight: 1.7}}>To provide a rigorous, research-informed education in computer engineering that produces graduates who are technically excellent, ethically grounded, and entrepreneurially empowered to contribute to Nigeria&apos;s technological advancement.</p>
          </div>
          <div>
            <div className="section-eyebrow">Vision</div>
            <p style={{fontSize: '14px', color: 'var(--text-dark)', lineHeight: 1.7}}>To be the leading department of computer engineering in West Africa, recognized for research impact, graduate quality, and the transformative role our alumni play in building a knowledge-driven Nigerian economy.</p>
          </div>
        </div>

        <div className="divider" />
        <div className="section-eyebrow">Accreditations & Affiliations</div>
        <p style={{fontSize: '13px', color: 'var(--text-muted)'}}>Our programmes are recognized and accredited by the following bodies:</p>
        <div className="accred-row">
          <div className="accred-chip">COREN — Council for Regulation of Engineering in Nigeria</div>
          <div className="accred-chip">NUC — National Universities Commission</div>
          <div className="accred-chip">IEEE Student Chapter</div>
          <div className="accred-chip">Computer Professional Registration Council of Nigeria (CPN)</div>
        </div>

        <div className="divider" />
        <div className="section-eyebrow">Core Values</div>
        <div className={homeStyles.pillarsGrid} style={{marginTop: '1rem'}}>
          <div className={homeStyles.pillarCard}>
            <div className={homeStyles.pillarIcon}><GiMicroscope aria-hidden="true" /></div>
            <h3>Innovation</h3>
            <p>Encouraging creative thinking and novel solutions to engineering challenges.</p>
          </div>
          <div className="pillar-card">
            <div className={homeStyles.pillarIcon}><GiScales aria-hidden="true" /></div>
            <h3>Integrity</h3>
            <p>Upholding the highest standards of academic and professional ethics.</p>
          </div>
          <div className="pillar-card">
            <div className={homeStyles.pillarIcon}><FaGlobe aria-hidden="true" /></div>
            <h3>Impact</h3>
            <p>Directing research and practice toward solving real societal problems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
