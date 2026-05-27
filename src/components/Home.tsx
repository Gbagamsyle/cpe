import React from "react";
import Image from "next/image";
import styles from "./Home.module.css";
import { FaMicrochip, FaShieldAlt, FaIndustry, FaRocket, FaUsers } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

export default function HomeSection({ onNavigate, isActive }: { onNavigate: (id: string) => void; isActive?: boolean; }) {
  return (
    <section id="home" className={isActive ? "active" : ""}>
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroAccent} />
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <FaMicrochip aria-hidden="true" />
            Est. 1983 · COREN Accredited
          </div>
          <h1>Engineering the <em>Digital Future</em> of Nigeria</h1>
          <p>The Department of Computer Engineering at FUT Minna trains world-class engineers in embedded systems, AI, networking, and software — equipped to lead Africa&apos;s technology transformation.</p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => onNavigate('programs')}>Explore Programs</button>
            <button className={styles.btnOutline} onClick={() => onNavigate('about')}>About the Department</button>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden>
          <Image src="/globe.svg" alt="decorative globe" width={420} height={420} loading="eager" />
        </div>
      </div>
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>400+</span>
          <span className={styles.statLabel}>Active Students</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>14</span>
          <span className={styles.statLabel}>Faculty Members</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>85%</span>
          <span className={styles.statLabel}>Graduate Employment</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>20+</span>
          <span className={styles.statLabel}>Years of Excellence</span>
        </div>
      </div>

      <div className="page-content">
        <div className="section-eyebrow">Why choose us</div>
        <div className="section-title">Built for tomorrow&apos;s engineers</div>
        <p className="section-lead">Our curriculum is designed to balance theoretical foundations with hands-on industry experience, preparing graduates who are technically excellent and entrepreneurially minded.</p>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><FaMicrochip aria-hidden="true" /></div>
            <h3>Embedded Systems & IoT</h3>
            <p>Hands-on labs with microcontrollers, FPGAs, and real-time systems deployed in industry settings.</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><GiBrain aria-hidden="true" /></div>
            <h3>AI & Machine Learning</h3>
            <p>Applied AI coursework covering neural networks, TinyML, computer vision, and edge inference.</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><FaShieldAlt aria-hidden="true" /></div>
            <h3>Cybersecurity & Networks</h3>
            <p>Comprehensive coverage of network architecture, protocols, security fundamentals, and cyberlaw.</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><FaIndustry aria-hidden="true" /></div>
            <h3>Industry Partnerships</h3>
            <p>SIWES placements with leading tech firms and hospitals for real-world experience in Year 3.</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><FaRocket aria-hidden="true" /></div>
            <h3>Final Year Projects</h3>
            <p>Student-led capstone projects solving real-world problems — from smart wheelchairs to fintech systems.</p>
          </div>
          <div className={styles.pillarCard}>
            <div className={styles.pillarIcon}><FaUsers aria-hidden="true" /></div>
            <h3>Alumni Network</h3>
            <p>A strong community of graduates placed in MTN, Interswitch, NCC, research institutions and startups.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
