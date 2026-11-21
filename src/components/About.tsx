"use client";

import styles from "./About.module.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Enterprise Web Engineering",
      description:
        "Architecting clean, modular frontend systems across 20+ ERP modules. Proven proficiency in Next.js, React, TypeScript, and state management via React Query and Axios service layers.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Data Science & Predictive Modeling",
      description:
        "Building end-to-end data pipelines from feature engineering and normalization to ensemble tree training (XGBoost, Random Forest), achieving verified 93% classification accuracy.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
      title: "AI Research & Deep Learning",
      description:
        "Author of an IEEE-published study in Graph Neural Networks (GAT, 83.3% test accuracy) and developer of geospatial computer vision segmentation pipelines utilizing U-Net and Mask R-CNN.",
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className="section-label">
            <span className="badge-dot" /> About Me
          </span>
          <h2 className="section-title">
            Blending engineering discipline with data intelligence.
          </h2>
          <p className="section-subtitle">
            I build software systems that solve real operational challenges — bridging the gap between scalable web engineering, predictive machine learning, and academic research rigor.
          </p>
        </div>

        {/* Narrative & Profile Grid */}
        <div className={styles.storyGrid}>
          <div className={styles.narrativeCol}>
            <p className={styles.paragraph}>
              My journey in computing is driven by a desire to build software that is both technically reliable and tangibly impactful. Graduating with a Bachelor of Computer Science from <strong>BINUS University (GPA: 3.80/4.00)</strong>, I have balanced rigorous theoretical inquiry with hands-on enterprise software development.
            </p>
            <p className={styles.paragraph}>
              At <strong>PT Global Innovation Technology</strong>, I worked within an Agile engineering team building enterprise ERP solutions spanning 20+ business modules — designing and standardizing 28 API service layers and over 45 reusable UI components with Next.js, TypeScript, and React Query.
            </p>
            <p className={styles.paragraph}>
              Complementing my web development background is a deep curiosity for machine learning and artificial intelligence. As a Junior Researcher at BINUS University, I engineered computer vision segmentation models with U-Net and Mask R-CNN, and co-authored a peer-reviewed research paper on Graph Attention Networks (GAT) published in <strong>IEEE Xplore</strong> and indexed by <strong>Scopus</strong>.
            </p>

            {/* Education Highlight Strip */}
            <div className={styles.educationCard}>
              <div className={styles.eduIconWrapper}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className={styles.eduDetails}>
                <span className={styles.eduDegree}>{PERSONAL_INFO.education.degree}</span>
                <span className={styles.eduInstitution}>
                  {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.location}
                </span>
                <div className={styles.eduBadges}>
                  <span className={styles.eduBadge}>GPA: {PERSONAL_INFO.education.gpa}</span>
                  <span className={styles.eduBadge}>{PERSONAL_INFO.education.period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Cards */}
          <div className={styles.pillarsCol}>
            {pillars.map((pillar, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
