"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  activeTab?: string;
}

export default function Navbar({ activeTab = "home" }: NavbarProps) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy
      const sections = ["home", "works", "bio", "certs", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setCurrentTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "works", label: "Works", href: "#works" },
    { id: "bio", label: "Bio", href: "#bio" },
    { id: "certs", label: "Certs", href: "#certs" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerInner}>
        {/* Brand Logo */}
        <a href="#home" className={styles.logo}>
          NIXEN.
        </a>

        {/* Center Pill Nav */}
        <nav className={styles.centerNav} aria-label="Main Navigation">
          <div className={styles.navPillWrapper}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`${styles.navItem} ${currentTab === item.id ? styles.activeNavItem : ""}`}
                onClick={() => setCurrentTab(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right CTA */}
        <div className={styles.rightActions}>
          <a href="#contact" className={styles.contactBtn}>
            Contact me
          </a>
        </div>
      </div>
    </header>
  );
}
