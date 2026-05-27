import React from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact({ isActive }: { isActive?: boolean }) {
  return (
    <section id="contact" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>Contact</span></div>
          <h1>Contact Us</h1>
          <p>Reach the department office, faculty, or send an enquiry</p>
        </div>
      </div>
      <div className="page-content">
        <div className={styles.contactGrid}>
          <div className={styles.contactInfoBlock}>
            <div className="section-eyebrow">Department Office</div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}><FaMapMarkerAlt aria-hidden="true" /></div>
              <div>
                <h4>Address</h4>
                <p>Department of Computer Engineering<br />Faculty of Engineering<br />Federal University of Technology, Minna<br />Niger State, Nigeria</p>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}><FaPhone aria-hidden="true" /></div>
              <div>
                <h4>Phone</h4>
                <p>+234 (0) 803 XXX XXXX</p>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}><FaEnvelope aria-hidden="true" /></div>
              <div>
                <h4>Email</h4>
                <p>cpe@futminna.edu.ng</p>
              </div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}><FaClock aria-hidden="true" /></div>
              <div>
                <h4>Office Hours</h4>
                <p>Monday – Friday<br />8:00 AM – 4:00 PM WAT</p>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Send an Enquiry</h3>
            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Adamu Sule" />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className={styles.formGroup}>
              <label>Subject</label>
              <input type="text" placeholder="e.g. Admission enquiry, Faculty contact..." />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea placeholder="Write your message here..." />
            </div>
            <button className={styles.formSubmit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
