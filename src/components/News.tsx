import React from "react";
import "./News.css";
import "./Home.css";

export default function News({ isActive }: { isActive?: boolean }) {
  return (
    <section id="news" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>News & Events</span></div>
          <h1>News & Events</h1>
          <p>Department updates, seminars, workshops, and conferences</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-eyebrow">Latest Updates</div>
        <div className="section-title">What&apos;s happening in the department</div>

        <div className="news-list">
          <div className="news-item">
            <div className="news-date-block">
              <span className="day">28</span>
              <span className="month">May</span>
            </div>
            <div className="news-content">
              <div className="news-type type-event">Seminar</div>
              <h3>Guest Lecture: Edge AI in Healthcare — Industry Perspectives</h3>
              <p>Mr. Tunde Bello, CTO of HealthTech Lagos, will deliver a public lecture on the deployment of lightweight AI models in clinical environments across Nigeria. Venue: CPE Seminar Room, 10am.</p>
            </div>
          </div>
          <div className="news-item">
            <div className="news-date-block">
              <span className="day">15</span>
              <span className="month">Jun</span>
            </div>
            <div className="news-content">
              <div className="news-type type-event">Event</div>
              <h3>2025 Final Year Project Defence — 400-Level Students</h3>
              <p>The annual FYP defence for graduating students will hold across three days. External examiners from COREN and industry partners will assess projects. Students are advised to submit final reports by June 1st.</p>
            </div>
          </div>
          <div className="news-item">
            <div className="news-date-block">
              <span className="day">02</span>
              <span className="month">May</span>
            </div>
            <div className="news-content">
              <div className="news-type type-news">News</div>
              <h3>Department Receives NUC Accreditation Visit — Full Accreditation Retained</h3>
              <p>Following the NUC&apos;s annual accreditation exercise, the Department of Computer Engineering has retained its full accreditation status with commendations for laboratory facilities and student research output.</p>
            </div>
          </div>
          <div className="news-item">
            <div className="news-date-block">
              <span className="day">18</span>
              <span className="month">Apr</span>
            </div>
            <div className="news-content">
              <div className="news-type type-seminar">Workshop</div>
              <h3>SIWES Pre-Departure Briefing — 300-Level Students</h3>
              <p>All 300-level students proceeding on industrial training are invited to the mandatory SIWES pre-departure briefing. Log book collection and placement confirmation will be handled at this session.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
