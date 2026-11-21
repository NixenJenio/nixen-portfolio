"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className={styles.contactCard}>
          {/* Ambient Glow */}
          <div className={styles.innerGlow} />

          {/* Header */}
          <div className={styles.headerBlock}>
            <span className="section-label">
              <span className="badge-dot" /> Get in Touch
            </span>
            <h2 className={styles.headline}>
              Have an idea? <br />
              <span className={styles.boldBlue}>Let&apos;s make it meaningful.</span>
            </h2>
            <p className={styles.subheadline}>
              Whether you are looking to hire a dedicated Software Engineer, collaborate on data-driven projects, or discuss research opportunities — my inbox is open.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className={styles.actionsRow}>
            {/* Direct Mailto Button */}
            <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-primary">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>Send Me an Email</span>
            </a>

            {/* Copy Email Button */}
            <button
              type="button"
              className={styles.copyEmailBtn}
              onClick={handleCopyEmail}
              title="Copy Email Address"
            >
              <span>{copied ? "✓ Copied to Clipboard!" : PERSONAL_INFO.email}</span>
              {!copied && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </button>
          </div>

          {/* Channels & Profile Grid */}
          <div className={styles.channelsGrid}>
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
            >
              <div className={styles.channelIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.72a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelName}>LinkedIn</span>
                <span className={styles.channelLinkText}>linkedin.com/in/nixenjenio ↗</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
            >
              <div className={styles.channelIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelName}>GitHub</span>
                <span className={styles.channelLinkText}>github.com/nixenjenio ↗</span>
              </div>
            </a>

            {/* Resume Download */}
            <a
              href={PERSONAL_INFO.cvPath}
              download="Nixen_Jenio_CV.pdf"
              className={styles.channelCard}
            >
              <div className={styles.channelIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className={styles.channelInfo}>
                <span className={styles.channelName}>Download CV (PDF)</span>
                <span className={styles.channelLinkText}>Latest verified resume ↓</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
