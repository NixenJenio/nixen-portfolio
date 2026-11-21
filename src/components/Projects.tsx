"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

type FilterType = "All" | "Enterprise Web" | "AI & Data Science" | "Research";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: FilterType[] = ["All", "Enterprise Web", "AI & Data Science", "Research"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-wrapper bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.titleArea}>
            <span className="section-label">
              <span className="badge-dot" /> Selected Projects
            </span>
            <h2 className="section-title">Engineered for real-world impact.</h2>
            <p className="section-subtitle">
              A curated selection of software platforms, machine learning models, and peer-reviewed research projects demonstrating end-to-end technical execution.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={styles.filterBar} role="tablist" aria-label="Project Categories">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activeFilter === f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.activeFilter : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Top Row */}
              <div className={styles.cardHeader}>
                <div className={styles.badgeGroup}>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  <span className={styles.verifiedBadge}>{project.badge}</span>
                </div>
                <button
                  type="button"
                  className={styles.expandIconBtn}
                  title="Expand Case Study"
                  aria-label={`Open details for ${project.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
              </div>

              {/* Title & Description */}
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              {/* Metrics Highlights if present */}
              {project.metrics && (
                <div className={styles.cardMetrics}>
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className={styles.miniMetric}>
                      <span className={styles.miniValue}>{m.value}</span>
                      <span className={styles.miniLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className={styles.tagsRow}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Card Actions */}
              <div className={styles.cardActions} onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={styles.caseStudyLink}
                  onClick={() => setSelectedProject(project)}
                >
                  <span>Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                    title="External resource link"
                  >
                    <span>{project.externalUrlLabel || "View"}</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
