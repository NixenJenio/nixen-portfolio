"use client";

import { useEffect } from "react";
import styles from "./ProjectModal.module.css";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.categoryBadge}>{project.category}</span>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className={styles.modalBody}>
          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className={styles.metricsRow}>
              {project.metrics.map((m, idx) => (
                <div key={idx} className={styles.metricItem}>
                  <span className={styles.metricVal}>{m.value}</span>
                  <span className={styles.metricLbl}>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Project Overview</h3>
            <p className={styles.overviewText}>{project.longDescription}</p>
          </div>

          {/* My Role & Contributions */}
          <div className={styles.contentSection}>
            <div className={styles.roleHeader}>
              <h3 className={styles.sectionHeading}>Key Contributions</h3>
              <span className={styles.roleTag}>Role: {project.role}</span>
            </div>
            <ul className={styles.contributionsList}>
              {project.keyContributions.map((contrib, i) => (
                <li key={i} className={styles.contributionItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className={styles.contentSection}>
            <h3 className={styles.sectionHeading}>Technology Stack</h3>
            <div className={styles.techPills}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.techPill}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className={styles.modalFooter}>
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>{project.externalUrlLabel || "View Live Resource"}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>View GitHub Profile</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}

          <button type="button" onClick={onClose} className={styles.dismissBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
