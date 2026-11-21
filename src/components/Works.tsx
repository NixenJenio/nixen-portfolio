"use client";

import styles from "./Works.module.css";
import { PROJECTS } from "@/data/portfolioData";

export default function Works() {
  return (
    <section id="works" className="section-wrapper">
      <div className="container">
        <h2 className="section-heading">Works</h2>

        <div className={styles.worksList}>
          {PROJECTS.map((proj, idx) => (
            <article key={proj.id} className={styles.workCard}>
              {/* Left Column: Details & Actions */}
              <div className={styles.cardInfo}>
                {/* Tech Tags */}
                <div className={styles.tagsRow}>
                  {proj.tags.map((t) => (
                    <span key={t} className={styles.tagPill}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className={styles.projectTitle}>{proj.title}</h3>

                {/* Project Description */}
                <p className={styles.projectDesc}>{proj.description}</p>

                {/* Action Buttons */}
                <div className={styles.actionsRow}>
                  {proj.externalUrl ? (
                    <a
                      href={proj.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryActionBtn}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>{proj.externalUrlLabel || "Live Paper"}</span>
                    </a>
                  ) : (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryActionBtn}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span>Live Site</span>
                    </a>
                  )}

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryActionBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                    </svg>
                    <span>Github</span>
                  </a>
                </div>

                {/* Year Indicator */}
                <div className={styles.yearText}>
                  Year | {idx === 0 ? "2025" : idx === 1 ? "2024" : "2025 – 2026"}
                </div>
              </div>

              {/* Right Column: Realistic Laptop Mockup Screen */}
              <div className={styles.cardPreview}>
                <div className={styles.laptopMockup}>
                  {/* Laptop Top Screen Bezel */}
                  <div className={styles.laptopScreen}>
                    <div className={styles.laptopCamera} />
                    <div className={styles.screenInner}>
                      {/* Browser Mockup Top Bar */}
                      <div className={styles.browserBar}>
                        <div className={styles.browserDots}>
                          <span className={`${styles.dot} ${styles.dotRed}`} />
                          <span className={`${styles.dot} ${styles.dotYellow}`} />
                          <span className={`${styles.dot} ${styles.dotGreen}`} />
                        </div>
                        <div className={styles.browserUrl}>
                          {proj.id === "loluna-cms" && "https://loluna.co.id"}
                          {proj.id === "enterprise-erp" && "https://erp.enterprise.internal"}
                          {proj.id === "diabetes-ml" && "https://analytics.ml.engine"}
                          {proj.id === "building-footprint-cv" && "https://geospatial.cv.model"}
                          {proj.id === "gnn-policy-research" && "https://ieeexplore.ieee.org"}
                        </div>
                      </div>

                      {/* Screen Content UI */}
                      <div className={styles.screenContent}>
                        {proj.id === "loluna-cms" && (
                          <div className={styles.screenLoluna}>
                            <div className={styles.mockHeader}>
                              <span className={styles.mockLogo}>LOLUNA</span>
                              <div className={styles.mockNav}>
                                <span>About</span>
                                <span>Products</span>
                                <span>Press</span>
                              </div>
                            </div>
                            <div className={styles.mockHero}>
                              <span className={styles.mockHeroTitle}>Multilingual Corporate Platform</span>
                              <span className={styles.mockHeroSub}>Headless CMS Architecture</span>
                            </div>
                          </div>
                        )}

                        {proj.id === "enterprise-erp" && (
                          <div className={styles.screenErp}>
                            <div className={styles.mockErpTop}>
                              <span>Operations Suite</span>
                              <span className={styles.erpBadge}>28 API Layers</span>
                            </div>
                            <div className={styles.mockErpGrid}>
                              <div className={styles.erpTile}>Inventory</div>
                              <div className={styles.erpTile}>Sales Orders</div>
                              <div className={styles.erpTile}>Finance</div>
                              <div className={styles.erpTile}>RBAC Auth</div>
                            </div>
                          </div>
                        )}

                        {proj.id === "diabetes-ml" && (
                          <div className={styles.screenMl}>
                            <div className={styles.mockMlHeader}>
                              <span>XGBoost &amp; Random Forest</span>
                              <span className={styles.mlAccuracy}>93.0% Accuracy</span>
                            </div>
                            <div className={styles.mockBars}>
                              <div className={styles.mockBar} style={{ width: "93%" }}>Accuracy</div>
                              <div className={styles.mockBar} style={{ width: "89%" }}>Precision</div>
                              <div className={styles.mockBar} style={{ width: "91%" }}>Recall</div>
                            </div>
                          </div>
                        )}

                        {proj.id === "building-footprint-cv" && (
                          <div className={styles.screenCv}>
                            <div className={styles.mockCvHeader}>
                              <span>U-Net + Mask R-CNN</span>
                              <span className={styles.cvTag}>Geospatial Mask</span>
                            </div>
                            <div className={styles.cvMaskVisual}>
                              <div className={styles.cvGridOverlay}>
                                <div className={styles.cvBoundingBox} />
                              </div>
                            </div>
                          </div>
                        )}

                        {proj.id === "gnn-policy-research" && (
                          <div className={styles.screenGnn}>
                            <div className={styles.mockGnnHeader}>
                              <span>IEEE ICIMCIS 2025</span>
                              <span className={styles.gnnAccuracy}>83.3% Accuracy</span>
                            </div>
                            <div className={styles.gnnGraphVisual}>
                              <div className={styles.gnnNode} style={{ top: "15%", left: "25%" }} />
                              <div className={styles.gnnNode} style={{ top: "35%", left: "60%" }} />
                              <div className={styles.gnnNode} style={{ top: "70%", left: "40%" }} />
                              <div className={styles.gnnNode} style={{ top: "60%", left: "75%" }} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Laptop Bottom Base & Hinge */}
                  <div className={styles.laptopBase}>
                    <div className={styles.laptopNotch} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
