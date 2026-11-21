"use client";

import styles from "./Publications.module.css";
import { PUBLICATION } from "@/data/portfolioData";

export default function Publications() {
  return (
    <section id="publications" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className="section-label">
            <span className="badge-dot" /> Academic Research
          </span>
          <h2 className="section-title">Peer-reviewed research &amp; publications.</h2>
          <p className="section-subtitle">
            Advancing graph neural network methodologies for macro-level policy and industrial network analytics.
          </p>
        </div>

        {/* Featured Paper Spotlight Card */}
        <div className={styles.paperCard}>
          {/* Top Metadata Badges */}
          <div className={styles.badgeRow}>
            <div className={styles.primaryBadges}>
              <span className={styles.ieeePill}>IEEE Conference</span>
              <span className={styles.scopusPill}>Scopus Indexed</span>
              <span className={styles.rolePill}>{PUBLICATION.role}</span>
            </div>
            <span className={styles.yearText}>ICIMCIS {PUBLICATION.year}</span>
          </div>

          {/* Paper Title */}
          <h3 className={styles.paperTitle}>{PUBLICATION.title}</h3>

          {/* Venue */}
          <p className={styles.venueText}>
            Published in the <strong>{PUBLICATION.venue}</strong>. Formally archived in IEEE Xplore.
          </p>

          <div className={styles.divider} />

          {/* Abstract */}
          <div className={styles.abstractBlock}>
            <h4 className={styles.subHeading}>Abstract &amp; Summary</h4>
            <p className={styles.abstractText}>{PUBLICATION.abstract}</p>
          </div>

          {/* Key Contributions & Highlights */}
          <div className={styles.highlightsBlock}>
            <h4 className={styles.subHeading}>Research Contributions &amp; Methodologies</h4>
            <ul className={styles.highlightsList}>
              {PUBLICATION.highlights.map((h, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div className={styles.techRow}>
            {PUBLICATION.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className={styles.actionRow}>
            <a
              href={PUBLICATION.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>View on IEEE Xplore</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <span className={styles.officialNotice}>
              Official IEEE Record: Document ID #11327282
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
