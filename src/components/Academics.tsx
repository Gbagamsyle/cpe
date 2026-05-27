import React from "react";
import "./Programs.css";
import "./Home.css";
import { FaFileAlt, FaDownload } from 'react-icons/fa';

// Replace the placeholder links below with your Google Drive share links for each level.
const levelPacks: { level: string; title: string; link: string }[] = [
  { level: '100', title: '100 Level Course Pack', link: '/CPE_100L_Course_Registration_1.pdf' },
  { level: '200', title: '200 Level Course Pack', link: '/CPE_200L_Course_Registration.pdf' },
  { level: '300', title: '300 Level Course Pack', link: '/CPE_300L_Course_Registration.pdf' },
  { level: '400', title: '400 Level Course Pack', link: '/CPE_400L_Course_Registration.pdf' },
  { level: '500', title: '500 Level Course Pack', link: '/CPE_500L_Course_Registration.pdf' },
];

export default function Academics({ isActive }: { isActive?: boolean }) {
  return (
    <section id="academics" className={isActive ? "active" : ""}>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="breadcrumb">Home → <span>Academics</span></div>
          <h1>Academics</h1>
          <p>Curriculum, course listings, and downloadable resources</p>
        </div>
      </div>
      <div className="page-content">
        <div className="section-eyebrow">Curriculum Overview</div>
        <div className="section-title">How to use the course packs</div>
        <p className="section-lead">Each level pack contains the syllabus, reading list, and sample assessments for that level. Open the pack for the level you are interested in or download the PDFs for offline use. If you&apos;d like course-by-course breakdowns here, I can expand this section.</p>

        <div className="divider" />
        <div className="section-eyebrow">Course Packs (100–500)</div>
        <div className="download-list">
          {levelPacks.map(pack => (
            <div key={pack.level} className="download-item">
              <div className="doc-info">
                <div className="doc-icon"><FaFileAlt aria-hidden="true" /></div>
                <div>
                  <div className="doc-name">{pack.title}</div>
                  <div className="doc-size">PDF</div>
                </div>
              </div>
              <a className="download-btn" href={pack.link} target="_blank" rel="noopener noreferrer">
                <FaDownload aria-hidden="true" /> Download
              </a>
            </div>
          ))}
        </div>

        <div className="divider" />
        <div className="section-eyebrow">Downloadable Resources</div>
        <div className="download-list">
          <div className="download-item">
            <div className="doc-info">
              <div className="doc-icon"><FaFileAlt aria-hidden="true" /></div>
              <div>
                <div className="doc-name">B.Tech. Programme Curriculum (2024/2025)</div>
                <div className="doc-size">PDF · 1.2 MB</div>
              </div>
            </div>
            <a className="download-btn" href="/BTech_Programme_Curriculum_2024_2025.pdf" target="_blank" rel="noopener noreferrer"><FaDownload aria-hidden="true" /> Download</a>
          </div>
          <div className="download-item">
            <div className="doc-info">
              <div className="doc-icon"><FaFileAlt aria-hidden="true" /></div>
              <div>
                <div className="doc-name">400-Level Course Syllabi Pack</div>
                <div className="doc-size">PDF · 3.4 MB</div>
              </div>
            </div>
            <a className="download-btn" href="/400_Level_Course_Syllabi_Pack.pdf" target="_blank" rel="noopener noreferrer"><FaDownload aria-hidden="true" /> Download</a>
          </div>
          <div className="download-item">
            <div className="doc-info">
              <div className="doc-icon"><FaFileAlt aria-hidden="true" /></div>
              <div>
                <div className="doc-name">Student Handbook & Academic Regulations</div>
                <div className="doc-size">PDF · 890 KB</div>
              </div>
            </div>
            <a className="download-btn" href="/Student_Handbook_Academic_Regulations.pdf" target="_blank" rel="noopener noreferrer"><FaDownload aria-hidden="true" /> Download</a>
          </div>
          <div className="download-item">
            <div className="doc-info">
              <div className="doc-icon"><FaFileAlt aria-hidden="true" /></div>
              <div>
                <div className="doc-name">SIWES Guidelines & Log Book Template</div>
                <div className="doc-size">PDF · 450 KB</div>
              </div>
            </div>
            <a className="download-btn" href="/SIWES_Guidelines_Logbook_Template.pdf" target="_blank" rel="noopener noreferrer"><FaDownload aria-hidden="true" /> Download</a>
          </div>
        </div>
      </div>
    </section>
  );
}
