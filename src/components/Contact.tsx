import React from "react";
import "./Contact.css";
import "./Home.css";
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
        <div className="contact-grid">
          <div className="contact-info-block">
            <div className="section-eyebrow">Department Office</div>
            <div className="contact-row">
              <div className="contact-icon"><FaMapMarkerAlt aria-hidden="true" /></div>
              <div>
                <h4>Address</h4>
                <p>Department of Computer Engineering<br />Faculty of Engineering<br />Federal University of Technology, Minna<br />Niger State, Nigeria</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><FaPhone aria-hidden="true" /></div>
              <div>
                <h4>Phone</h4>
                <p>+234 (0) 803 XXX XXXX</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><FaEnvelope aria-hidden="true" /></div>
              <div>
                <h4>Email</h4>
                <p>cpe@futminna.edu.ng</p>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-icon"><FaClock aria-hidden="true" /></div>
              <div>
                <h4>Office Hours</h4>
                <p>Monday – Friday<br />8:00 AM – 4:00 PM WAT</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send an Enquiry</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Adamu Sule" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="e.g. Admission enquiry, Faculty contact..." />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message here..." />
            </div>
            <button className="form-submit">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
