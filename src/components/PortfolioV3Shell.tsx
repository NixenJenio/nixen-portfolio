"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLocale, type Locale } from "@/components/LocaleProvider";
import styles from "./PortfolioV3Shell.module.css";

type MenuName = "work" | "explore" | null;
type IconName = "language" | "chevron" | "search" | "resume" | "github" | "linkedin" | "sun" | "moon" | "home" | "book" | "guestbook" | "projects" | "contact" | "mail" | "experience" | "rocket" | "sideProjects" | "uses";
type MenuLink = { label: string; description: string; href: string; icon: IconName };

const destinations = [
  { label: "Home", href: "/#home", description: "Go to homepage" },
  { label: "Guestbook", href: "/guestbook", description: "Sign the guestbook" },
  { label: "Side Projects", href: "/side-projects", description: "Apps and experiments" },
  { label: "Uses", href: "/uses", description: "Editor, stack, services" },
  { label: "Projects", href: "/#projects", description: "Jump to projects" },
  { label: "Experience", href: "/#experience", description: "Jump to experience" },
  { label: "Resume", href: PERSONAL_INFO.cvPath, description: "Open resume PDF" },
  { label: "GitHub", href: PERSONAL_INFO.github, description: "github.com/nixenjenio" },
  { label: "LinkedIn", href: PERSONAL_INFO.linkedin, description: "linkedin.com/in/nixenjenio" },
  { label: "Email", href: "mailto:" + PERSONAL_INFO.email, description: PERSONAL_INFO.email },
];
const localeLabelKeys: Record<Locale, string> = { en: "English", id: "Bahasa Indonesia", zh: "Mandarin" };

const workLinks: MenuLink[] = [
  { label: "Projects", description: "Client work and products I've built", href: "/#projects", icon: "projects" },
  { label: "Experience", description: "Roles and background", href: "/#experience", icon: "experience" },
  { label: "Contact", description: "Get in touch", href: "/#contact", icon: "contact" },
];

const exploreLinks: MenuLink[] = [
  { label: "Guestbook", description: "Leave a message and say hi", href: "/guestbook", icon: "guestbook" },
  { label: "Side Projects", description: "Apps and experiments for fun", href: "/side-projects", icon: "sideProjects" },
  { label: "Uses", description: "The editor, stack and services I use", href: "/uses", icon: "uses" },
];

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    language: <><circle pathLength="1" cx="12" cy="12" r="9.5" /><path pathLength="1" d="M2.5 12h19" /><path pathLength="1" d="M12 2.5c2.5 2.6 3.7 5.8 3.7 9.5s-1.2 6.9-3.7 9.5c-2.5-2.6-3.7-5.8-3.7-9.5s1.2-6.9 3.7-9.5Z" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    search: <><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></>,
    resume: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path pathLength="1" d="M10 9H8" /><path pathLength="1" d="M16 13H8" /><path pathLength="1" d="M16 17H8" /></>,
    github: <><path pathLength="1" strokeDasharray="1 1" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path pathLength="1" strokeDasharray="1 1" d="M9 18c-4.51 2-5-2-7-2" /></>,
    linkedin: <><path pathLength="1" strokeDasharray="1 1" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect pathLength="1" strokeDasharray="1 1" width="4" height="12" x="2" y="9" /><circle pathLength="1" strokeDasharray="1 1" cx="4" cy="4" r="2" /></>,
    mail: <><path d="M3 5h18v14H3z" /><path pathLength="1" strokeDasharray="1 1" d="m3 6 9 7 9-7" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><g className={styles.sunRays}><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.93 19.07 1.41-1.41" /><path d="m17.66 6.34 1.41-1.41" /></g></>,
    moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
    home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z" />,
    book: <><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></>,
    guestbook: <><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="M7 9h10M7 13h7" /></>,
    projects: <><path d="M18 19a5 5 0 0 1-5-5v8" /><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><circle cx="20" cy="19" r="2" /></>,
    contact: <><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></>,
    experience: <><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></>,
    rocket: <><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" /><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" /></>,
    sideProjects: <><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" /><path d="M6.453 15h11.094" /><path d="M8.5 2h7" /></>,
    uses: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" className={[styles.icon, className].filter(Boolean).join(" ")} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div className={[styles.reveal, className].filter(Boolean).join(" ")} data-reveal style={{ "--reveal-delay": String(delay) + "ms" } as React.CSSProperties}>{children}</div>;
}

export function SocialLinks({ compact = false, labels = false, includeEmail = true }: { compact?: boolean; labels?: boolean; includeEmail?: boolean }) {
  const { t } = useLocale();
  return <div className={[styles.socialLinks, compact ? styles.socialCompact : "", labels ? styles.socialLabeled : ""].filter(Boolean).join(" ")}>
    <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label={t("Open GitHub")}><Icon name="github" />{labels && <span>GitHub</span>}</a>
    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label={t("Open LinkedIn")}><Icon name="linkedin" />{labels && <span>LinkedIn</span>}</a>
    {includeEmail && <a href={"mailto:" + PERSONAL_INFO.email} aria-label={t("Open email")}><Icon name="mail" />{labels && <span>{t("Email")}</span>}</a>}
  </div>;
}

function MenuGroup({ label, open, onClick, onHoverStart, onHoverEnd, onNavigate, title, description, featureIcon, links }: {
  label: string;
  open: boolean;
  onClick: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onNavigate: () => void;
  title: string;
  description: string;
  featureIcon: IconName;
  links: MenuLink[];
}) {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const touchPointer = useRef(false);
  const id = "header-" + label.toLowerCase() + "-menu";

  function focusItem(index: number) {
    const items = Array.from(root.current?.querySelectorAll<HTMLAnchorElement>("[data-menu-link]") ?? []);
    if (items.length) items[(index + items.length) % items.length]?.focus();
  }

  return <div ref={root} className={[styles.menuGroup, open ? styles.menuGroupOpen : ""].filter(Boolean).join(" ")} onPointerEnter={(event) => { if (event.pointerType !== "touch") onHoverStart(); }} onPointerLeave={(event) => { if (event.pointerType !== "touch") onHoverEnd(); }}>
    <button ref={trigger} type="button" className={open ? styles.menuTriggerOpen : styles.menuTrigger} aria-expanded={open} aria-haspopup="menu" aria-controls={id} onPointerDown={(event) => { touchPointer.current = event.pointerType === "touch"; }} onClick={(event) => {
      if (touchPointer.current || event.detail === 0 || !open) onClick();
      touchPointer.current = false;
    }} onKeyDown={(event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!open) onClick();
        window.requestAnimationFrame(() => focusItem(event.key === "ArrowUp" ? -1 : 0));
      }
    }}>
      {t(label)}<Icon name="chevron" className={open ? styles.chevronOpen : styles.chevron} />
    </button>
    <div id={id} className={[styles.dropdown, open ? styles.dropdownOpen : ""].filter(Boolean).join(" ")} role="menu" aria-label={t(label) + " " + t("menu")} aria-hidden={!open} inert={!open} onKeyDown={(event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onNavigate();
        trigger.current?.focus();
      } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const items = Array.from(root.current?.querySelectorAll<HTMLAnchorElement>("[data-menu-link]") ?? []);
        const index = items.indexOf(document.activeElement as HTMLAnchorElement);
        focusItem(index + (event.key === "ArrowDown" ? 1 : -1));
      }
    }}>
      <div className={styles.menuGrid}>
        <div className={styles.menuFeature}>
          <span className={styles.menuEyebrow}>{t(title)}</span>
          <Icon name={featureIcon} className={styles.featureIcon} />
          <h2>{t(description.split("|")[0])}</h2>
          <p>{t(description.split("|")[1])}</p>
        </div>
        <div className={styles.menuLinks}>
          {links.map((link) => <Link key={link.label} href={link.href} role="menuitem" data-menu-link onClick={onNavigate}>
            <span className={styles.menuLinkIcon}><Icon name={link.icon} /></span>
            <span className={styles.menuLinkCopy}><strong>{t(link.label)}</strong><small>{t(link.description)}</small></span>
          </Link>)}
        </div>
      </div>
    </div>
  </div>;
}

export default function PortfolioV3Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [menu, setMenu] = useState<MenuName>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeResult, setActiveResult] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [progress, setProgress] = useState(0);
  const [scrollThumb, setScrollThumb] = useState(100);
  const [activeRailSection, setActiveRailSection] = useState("home");
  const paletteInput = useRef<HTMLInputElement>(null);
  const paletteTrigger = useRef<HTMLButtonElement>(null);
  const languageTrigger = useRef<HTMLButtonElement>(null);
  const languageRoot = useRef<HTMLDivElement>(null);
  const paletteWasOpen = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuCloseTimer = useRef<number | null>(null);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return destinations.filter((item) => !normalized || (t(item.label) + " " + t(item.description)).toLowerCase().includes(normalized));
  }, [query, t]);
  const currentLocaleLabel = t(localeLabelKeys[locale]);

  const clearMenuCloseTimer = useCallback(() => {
    if (menuCloseTimer.current !== null) window.clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = null;
  }, []);
  function openMenu(name: Exclude<MenuName, null>) {
    clearMenuCloseTimer();
    setLanguageOpen(false);
    setMenu(name);
  }
  function scheduleMenuClose() {
    clearMenuCloseTimer();
    menuCloseTimer.current = window.setTimeout(() => setMenu(null), 110);
  }
  const closeMenu = useCallback(() => {
    clearMenuCloseTimer();
    setMenu(null);
  }, [clearMenuCloseTimer]);
  function chooseLocale(next: Locale) {
    setLocale(next);
    setLanguageOpen(false);
    window.requestAnimationFrame(() => languageTrigger.current?.focus());
  }

  useEffect(() => {
    const stored = window.localStorage.getItem("nixen-theme");
    const selected = stored === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = selected;
    if (selected === "light") window.requestAnimationFrame(() => setTheme("light"));
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        closeMenu();
        setLanguageOpen(false);
        setPaletteOpen(true);
        setQuery("");
        setActiveResult(0);
      }
      if (event.key === "Escape") {
        closeMenu();
        if (languageOpen) window.requestAnimationFrame(() => languageTrigger.current?.focus());
        setLanguageOpen(false);
        setPaletteOpen(false);
      }
    }
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (menu && menuRef.current && !menuRef.current.contains(target)) closeMenu();
      if (languageOpen && languageRoot.current && !languageRoot.current.contains(target)) setLanguageOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      clearMenuCloseTimer();
    };
  }, [menu, languageOpen, closeMenu, clearMenuCloseTimer]);

  useEffect(() => {
    if (paletteOpen) {
      paletteWasOpen.current = true;
      window.requestAnimationFrame(() => paletteInput.current?.focus());
    } else if (paletteWasOpen.current) {
      paletteWasOpen.current = false;
      window.requestAnimationFrame(() => paletteTrigger.current?.focus());
    }
  }, [paletteOpen]);

  useEffect(() => {
    if (pathname !== "/") return;
    document.documentElement.classList.add("motion-ready");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main [data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealed);
          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    targets.forEach((target) => observer.observe(target));
    return () => { observer.disconnect(); document.documentElement.classList.remove("motion-ready"); };
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const max = documentHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      setScrollThumb(Math.min(100, Math.max(8, window.innerHeight / Math.max(documentHeight, 1) * 100)));

      const marker = window.scrollY + window.innerHeight * 0.42;
      const sections = ["home", "projects", "experience", "contact"]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section instanceof HTMLElement);
      const current = sections.filter((section) => section.offsetTop <= marker).at(-1)?.id ?? "home";
      setActiveRailSection(current === "experience" ? "projects" : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [pathname]);

  return <div className={styles.site}>
    <a className={styles.skipLink} href="#main-content">{t("Skip to content")}</a>
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerPrimary} ref={menuRef}>
          <nav className={styles.primaryNav} aria-label={t("Primary navigation")}>
            <MenuGroup label="Work" open={menu === "work"} onClick={() => menu === "work" ? closeMenu() : openMenu("work")} onHoverStart={() => openMenu("work")} onHoverEnd={scheduleMenuClose} onNavigate={closeMenu} title="Selected work" description="Things I've shipped|Production apps for real clients — job boards, chat platforms, tax tools and more." featureIcon="rocket" links={workLinks} />
          <MenuGroup label="Explore" open={menu === "explore"} onClick={() => menu === "explore" ? closeMenu() : openMenu("explore")} onHoverStart={() => openMenu("explore")} onHoverEnd={scheduleMenuClose} onNavigate={closeMenu} title="Off the clock" description="Places to explore|Side projects, the tools I use, and a guestbook for anyone who wants to say hi." featureIcon="book" links={exploreLinks} />
          </nav>
        </div>
        <div className={styles.headerActions}>
          <button ref={paletteTrigger} type="button" className={styles.searchButton} onClick={() => { closeMenu(); setLanguageOpen(false); setPaletteOpen(true); setQuery(""); setActiveResult(0); }} aria-label={t("Search")}><Icon name="search" /><span>{t("Search")}</span><kbd>⌘K</kbd></button>
          <span className={styles.actionDivider} aria-hidden="true" />
          <div className={styles.socialActions}>
            <a className={styles.resumeLink} href={PERSONAL_INFO.cvPath} target="_blank" rel="noreferrer" aria-label={t("Open résumé")}><Icon name="resume" /></a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" aria-label={t("Open GitHub")}><Icon name="github" /></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" aria-label={t("Open LinkedIn")}><Icon name="linkedin" /></a>
          </div>
          <span className={styles.actionDivider} aria-hidden="true" />
          <button className={styles.themeButton} type="button" data-theme-icon={theme === "dark" ? "sun" : "moon"} onClick={() => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); window.localStorage.setItem("nixen-theme", next); }} aria-label={t(theme === "dark" ? "Switch to light theme" : "Switch to dark theme")} aria-pressed={theme === "light"}><Icon key={theme === "dark" ? "sun" : "moon"} name={theme === "dark" ? "sun" : "moon"} /></button>
          <div className={styles.languageGroup} ref={languageRoot}>
            <button ref={languageTrigger} type="button" className={languageOpen ? styles.languageTriggerOpen : styles.languageTrigger} aria-label={t("Select language") + ", " + currentLocaleLabel} aria-expanded={languageOpen} aria-controls="header-language-menu" onClick={() => { closeMenu(); setLanguageOpen((open) => !open); }} onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                setLanguageOpen(true);
                window.requestAnimationFrame(() => languageRoot.current?.querySelector<HTMLButtonElement>("[data-language-option]")?.focus());
              }
            }}>
              <Icon name="language" className={styles.languageIcon} />
            </button>
            <div id="header-language-menu" className={[styles.languageMenu, languageOpen ? styles.languageMenuOpen : ""].filter(Boolean).join(" ")} role="group" aria-label={t("Select language")} aria-hidden={!languageOpen} inert={!languageOpen}>
              {(["en", "id", "zh"] as const).map((option) => <button key={option} type="button" data-language-option aria-pressed={locale === option} className={locale === option ? styles.languageOptionCurrent : styles.languageOption} onClick={() => chooseLocale(option)}>
                <span>{t(localeLabelKeys[option])}</span><small>{option.toUpperCase()}</small>
              </button>)}
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className={styles.pageScrollbar} aria-hidden="true"><span style={{ transform: "scaleY(" + Math.max(0.025, progress) + ")" }} /></div>

    <aside className={styles.rightRail} aria-label={t("Page progress and GitHub statistics")}>
      <div className={styles.railScrollTrack} aria-hidden="true">
        <span style={{ top: `${progress * (100 - scrollThumb)}%`, height: `${scrollThumb}%` }} />
      </div>
      <nav className={styles.railDots} aria-label={t("Section navigation")}>
        {([ ["home", "Home"], ["projects", "Projects"], ["contact", "Contact"] ] as const).map(([id, label]) =>
          <a key={id} href={`/#${id}`} className={activeRailSection === id ? styles.railDotActive : styles.railDot} aria-label={t(label)} aria-current={activeRailSection === id ? "location" : undefined}><span /></a>
        )}
      </nav>
      <div className={styles.railDivider} aria-hidden="true" />
      <div className={styles.railStats} aria-label={t("GitHub statistics placeholders")}>
        <span><strong>--</strong><small>{t("Followers")}</small></span>
        <span><strong>--</strong><small>{t("Repos")}</small></span>
        <span><strong>--</strong><small>{t("Stars")}</small></span>
      </div>
    </aside>

    {children}

    <nav className={styles.mobileNav} aria-label={t("Mobile navigation")}>
      <Link href="/guestbook" aria-label={t("Guestbook")}><Icon name="guestbook" /><span>{t("Guestbook")}</span></Link>
      <Link className={styles.mobileHome} href="/#home" aria-label={t("Home")}><Icon name="home" /></Link>
      <Link href="/#projects" aria-label={t("Projects")}><Icon name="projects" /><span>{t("Projects")}</span></Link>
      <Link href="/#contact" aria-label={t("Contact")}><Icon name="contact" /><span>{t("Contact")}</span></Link>
    </nav>

    {paletteOpen && <div className={styles.paletteBackdrop} style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }} onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false); }}>
      <section className={styles.palette} role="dialog" aria-modal="true" aria-labelledby="palette-title" onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); setPaletteOpen(false); }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          const results = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("[data-palette-result]"));
          if (results.length) {
            event.preventDefault();
            const currentIndex = results.indexOf(document.activeElement as HTMLAnchorElement);
            const nextIndex = currentIndex < 0
              ? (event.key === "ArrowDown" ? 0 : results.length - 1)
              : (currentIndex + (event.key === "ArrowDown" ? 1 : -1) + results.length) % results.length;
            setActiveResult(nextIndex);
            results[nextIndex]?.focus();
          }
        }
        if (event.key === "Tab") {
          const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("input, a[href], button:not([disabled])"));
          const first = focusable[0]; const last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
      }}>
        <h2 id="palette-title" className={styles.visuallyHidden}>{t("Command palette")}</h2>
        <div className={styles.paletteSearch}><Icon name="search" /><input ref={paletteInput} value={query} onChange={(event) => { setQuery(event.target.value); setActiveResult(0); }} onKeyDown={(event) => {
          if (event.key === "Enter") {
            const selectedResult = event.currentTarget.closest("[role=dialog]")?.querySelector<HTMLAnchorElement>('[data-palette-active="true"]');
            if (selectedResult) { event.preventDefault(); selectedResult.click(); }
          }
        }} placeholder={t("Search for a command...")} aria-label={t("Search commands")} /><kbd>esc</kbd></div>
        <div className={styles.paletteResults}>
          {filtered.length ? filtered.map((item, index) => <Link key={item.label} href={item.href} data-palette-result data-palette-active={activeResult === index} className={activeResult === index ? styles.paletteResultActive : undefined} onPointerEnter={() => setActiveResult(index)} onClick={() => setPaletteOpen(false)}><span>{t(item.label)}</span><small>{t(item.description)}</small></Link>) : <p>{t("No matching destinations.")}</p>}
        </div>
      </section>
    </div>}
  </div>;
}
