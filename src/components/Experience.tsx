"use client";

import styles from "./Experience.module.css";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className="section-label">
            <span className="badge-dot" /> Professional Journey
          </span>
          <h2 className="section-title">Experience across industry &amp; research.</h2>
          <p className="section-subtitle">
            Demonstrated engineering contributions within high-throughput enterprise Agile teams and academic research labs.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className={styles.timelineList}>
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              {/* Timeline Connector */}
              <div className={styles.timelineGutter}>
                <div className={styles.timelineNode}>
                  <span className={styles.nodeIndex}>0{index + 1}</span>
                </div>
                {index < EXPERIENCES.length - 1 && <div className={styles.timelineLine} />}
              </div>

              {/* Timeline Card */}
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleGroup}>
                    <span className={styles.typeBadge}>{exp.type}</span>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    <div className={styles.companyRow}>
                      <span className={styles.companyName}>{exp.company}</span>
                      <span className={styles.bulletSeparator}>·</span>
                      <span className={styles.locationText}>{exp.location}</span>
                    </div>
                  </div>

                  <div className={styles.periodBadge}>{exp.period}</div>
                </div>

                <p className={styles.summaryText}>{exp.summary}</p>

                {/* Achievements List */}
                <div className={styles.achievementsBlock}>
                  <h4 className={styles.achievementsTitle}>Key Responsibilities &amp; Outcomes</h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((item, i) => (
                      <li key={i} className={styles.achievementItem}>
                        <span className={styles.arrowBullet}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Chips */}
                <div className={styles.techChips}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
