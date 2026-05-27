import React from "react";
import styles from "./Programs.module.css";
import { FaClock, FaBook, FaAward } from 'react-icons/fa';

export default function Programs({ isActive }: { isActive?: boolean }) {
  return (
    <section id="programs" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>Programs</span></div>
          <h1>Academic Programs</h1>
          <p>Undergraduate and postgraduate offerings in Computer Engineering</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-eyebrow">Degree Offerings</div>
        <div className="section-title">Programmes designed for depth and breadth</div>
        <p className="section-lead">Our academic programmes span five years of undergraduate study and offer postgraduate options for those who wish to deepen their expertise in specialized areas.</p>

        <div className={styles.programsGrid}>
          <div className={styles.programCard}>
            <div className={styles.programBadge}>Undergraduate</div>
            <h3>B.Tech. Computer Engineering</h3>
            <p>A five-year programme covering digital logic, embedded systems, software engineering, AI, networking, signal processing, and entrepreneurship. Includes mandatory SIWES industrial training in Year 3.</p>
            <div className={styles.programMeta}>
              <span><FaClock style={{fontSize: '13px'}} aria-hidden="true" /> 5 years</span>
              <span><FaBook style={{fontSize: '13px'}} aria-hidden="true" /> 210 units</span>
              <span><FaAward style={{fontSize: '13px'}} aria-hidden="true" /> COREN accredited</span>
            </div>
          </div>
          <div className={styles.programCard}>
            <div className={styles.programBadge}>Postgraduate</div>
            <h3>M.Tech. Computer Engineering</h3>
            <p>An 18–24 month research-based master's programme. Students undertake a thesis in areas such as AI systems, embedded design, wireless communications, or cyber-physical systems.</p>
            <div className={styles.programMeta}>
              <span><FaClock style={{fontSize: '13px'}} aria-hidden="true" /> 18–24 months</span>
              <span><FaBook style={{fontSize: '13px'}} aria-hidden="true" /> Research-based</span>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div className="section-eyebrow">Admission Requirements</div>
        <p style={{fontSize: '14px', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.7}}>Admission into the B.Tech. programme is through UTME. Required subjects include Mathematics, Physics, and Chemistry. Candidates must attain the minimum UTME cut-off score and pass the Post-UTME screening exercise conducted by the university. For direct entry, a National Diploma or A-Level qualification in relevant subjects is required.</p>

        <div className="highlight-strip" style={{marginTop: '1.5rem'}}>
          Admissions for all programmes are processed centrally through the university's Academic Affairs Division. For department-specific enquiries, please contact us via the Contact page.
        </div>
      </div>
    </section>
  );
}
