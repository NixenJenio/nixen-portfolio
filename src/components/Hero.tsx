"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "Greetings, fellow humans! 👽";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Headline, Terminal, Socials */}
          <div className={styles.leftCol}>
            <h1 className={styles.roleHeadline}>
              Software Engineer /
              <br />
              Applied AI Researcher
            </h1>

            {/* Terminal Pill Box with Typing Effect */}
            <div className={styles.terminalBox}>
              <span className={styles.termPrompt}>computer:~$</span>
              <span className={styles.termText}>{terminalText}</span>
              <span className={styles.termCursor}>|</span>
            </div>

            {/* Social Icons Row */}
            <div className={styles.socialRow}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                title="GitHub"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.72a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                </svg>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={styles.socialIconBtn}
                title="Email"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="Nixen_Jenio_CV.pdf"
                className={styles.socialIconBtn}
                title="Download CV"
                aria-label="Resume CV"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="12" y2="18" />
                  <line x1="15" y1="15" x2="12" y2="18" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Line-Art Developer Illustration with Lightbulb */}
          <div className={styles.rightCol}>
            <div className={styles.illustrationWrap}>
              {/* Lightbulb Idea Glow */}
              <div className={styles.ideaLightbulb}>
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.8">
                  <path d="M9 18h6" strokeLinecap="round" />
                  <path d="M10 22h4" strokeLinecap="round" />
                  <path
                    d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"
                    fill="#fef08a"
                  />
                  <line x1="12" y1="2" x2="12" y2="4" strokeLinecap="round" />
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" strokeLinecap="round" />
                  <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" strokeLinecap="round" />
                </svg>
              </div>

              {/* Developer at Laptop Minimalist Illustration */}
              <svg
                className={styles.developerSvg}
                viewBox="0 0 340 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Desk Base */}
                <line x1="10" y1="270" x2="330" y2="270" stroke="#111111" strokeWidth="3" strokeLinecap="round" />

                {/* Laptop Body & Screen */}
                <polygon points="50,230 180,230 170,265 40,265" fill="#f3f4f6" stroke="#111111" strokeWidth="2.5" />
                <path d="M60 140 L165 140 L165 230 L60 230 Z" fill="#ffffff" stroke="#111111" strokeWidth="2.5" rx="3" />
                <rect x="70" y="150" width="85" height="70" fill="#111111" rx="2" />
                <circle cx="112" cy="185" r="8" fill="#ffffff" opacity="0.8" />

                {/* Developer Character */}
                {/* Body & Arms */}
                <path
                  d="M160 270 C160 215 180 185 240 185 C300 185 320 215 320 270 Z"
                  fill="#ffffff"
                  stroke="#111111"
                  strokeWidth="2.8"
                />
                {/* Arm typing on laptop */}
                <path
                  d="M200 215 Q145 225 125 245"
                  stroke="#111111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="125" cy="245" r="5" fill="#111111" />

                {/* Raised Arm pointing / gesturing */}
                <path
                  d="M245 210 Q215 185 205 130"
                  stroke="#111111"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Hand pointing to bulb */}
                <path
                  d="M205 130 C202 120 210 110 215 112 C218 114 216 122 216 130"
                  stroke="#111111"
                  strokeWidth="2.5"
                  fill="#ffffff"
                />

                {/* Head */}
                <circle cx="250" cy="120" r="42" fill="#ffffff" stroke="#111111" strokeWidth="3" />
                {/* Hair */}
                <path
                  d="M212 120 C212 80 288 80 288 120 C280 100 250 95 212 120 Z"
                  fill="#111111"
                />
                {/* Facial Features */}
                <circle cx="236" cy="122" r="3.5" fill="#111111" />
                <path d="M232 135 Q242 142 250 135" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
