"use client";

import styles from "./Skills.module.css";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className="section-label">
            <span className="badge-dot" /> Technical Capabilities
          </span>
          <h2 className="section-title">Specialized tools &amp; engineering stack.</h2>
          <p className="section-subtitle">
            A purposeful technical toolkit built through shipping production enterprise features, training predictive machine learning models, and publishing deep learning research.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className={styles.categoriesGrid}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <div className={styles.categoryTag}>0{i + 1}</div>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
                <p className={styles.categoryDesc}>{cat.description}</p>
              </div>

              <div className={styles.skillsList}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.level && <span className={styles.skillLevel}>{skill.level}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
