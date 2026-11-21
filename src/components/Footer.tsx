"use client";

import styles from "./Footer.module.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.brandingBlock}>
            <div className={styles.monogram}>NJ</div>
            <div>
              <span className={styles.brandName}>{PERSONAL_INFO.name}</span>
              <p className={styles.brandRole}>{PERSONAL_INFO.tagline}</p>
            </div>
          </div>

          <nav className={styles.footerNav} aria-label="Footer Navigation">
            <a href="#about" className={styles.footerLink}>About</a>
            <a href="#projects" className={styles.footerLink}>Projects</a>
            <a href="#experience" className={styles.footerLink}>Experience</a>
            <a href="#skills" className={styles.footerLink}>Skills</a>
            <a href="#publications" className={styles.footerLink}>Publications</a>
            <a href="#contact" className={styles.footerLink}>Contact</a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Back to top"
          >
            <span>Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>

        <div className={styles.copyrightRow}>
          <span>© {new Date().getFullYear()} Nixen Jenio. All rights reserved.</span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </footer>
  );
}
