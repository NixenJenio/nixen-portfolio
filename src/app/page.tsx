"use client";

import Link from "next/link";
import { EXPERIENCES, PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import PortfolioV3Shell, { Icon, Reveal, SocialLinks } from "@/components/PortfolioV3Shell";
import { useLocale } from "@/components/LocaleProvider";
import PortfolioContactForm from "@/components/PortfolioContactForm";
import { PortfolioV3PageFrame } from "@/components/PortfolioV3PageFrame";
import styles from "@/components/PortfolioV3Content.module.css";

export default function HomePage() {
  const { t } = useLocale();
  return <PortfolioV3Shell>
    <PortfolioV3PageFrame>
      <section id="home" className={styles.homeSection}>
        <Reveal className={styles.profile}>
          <h1 className={styles.name}><span className={styles.nameWord} style={{ "--word-index": 0 } as React.CSSProperties}>Nixen</span>{" "}<span className={styles.nameWord} style={{ "--word-index": 1 } as React.CSSProperties}>Jenio</span></h1>
          <p className={styles.role}>{t("Software Engineer / Data & AI Enthusiast")}</p>
          <p className={styles.status}>{t("Based in")} {t(PERSONAL_INFO.location)}</p>
          <div className={styles.skills}><span className={styles.skillsLabel}>{t("Skilled in")}</span>{["React", "Next.js", "TypeScript", "Python", "PyTorch", "Scikit-learn", "SQL", "NetworkX", "Pandas & NumPy", "Tailwind CSS"].map((skill) => <span className={styles.skill} key={skill}>{skill}</span>)}</div>
          <div className={styles.bioCopy}>
            <p>{t("I’m a software engineer and BINUS University computer science graduate with experience across enterprise product development, data analysis, and applied AI research. I enjoy turning complex workflows and datasets into clear, dependable tools.")}</p>
            <p>{t("At PT Global Innovation Technology, I contributed to ERP products across 20+ modules. As a researcher at BINUS University, I worked on geospatial computer vision and co-authored a graph neural network study published through IEEE ICIMCIS 2025.")}</p>
            <p>{t("My credentials include Python 101 for Data Science and Data Analysis with Python from Cognitive Class.")}</p>
          </div>
          <div className={styles.findMe}>
            <p className={styles.findMeLabel}>{t("Find me on")}</p>
            <SocialLinks labels includeEmail={false} />
            <p className={styles.findMeMail}>{t("Or mail me at")} <a className={styles.emailLink} href={`mailto:${PERSONAL_INFO.email}`}><Icon name="mail" className={styles.mailIcon} />{PERSONAL_INFO.email}</a></p>
          </div>
        </Reveal>
      </section>

      <section id="projects" className={styles.section}>
        <Reveal><h2 className={styles.sectionTitle}>{t("Projects")}</h2></Reveal>
        <div className={styles.projectList}>
          {PROJECTS.map((project, index) => <Reveal key={project.id} delay={index * 65}>
            <article className={styles.projectRow}>
              <div className={styles.projectTitleLine}>
                <Link className={styles.projectTitle} href={`/projects/${project.id}`}>{t(project.title)}</Link>
                {project.externalUrl && <a className={styles.outbound} href={project.externalUrl} target="_blank" rel="noreferrer" aria-label={t((project.externalUrlLabel ?? "External project link") + " (opens in a new tab)")}>↗</a>}
              </div>
              <p className={styles.projectDescription}>{t(project.description)}</p>
              <div className={styles.tags}>{project.tags.slice(0, 6).map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}</div>
            </article>
          </Reveal>)}
        </div>
      </section>

      <section id="experience" className={styles.section}>
        <Reveal><h2 className={styles.sectionTitle}>{t("Experience")}</h2></Reveal>
        <div className={styles.experienceList}>
          {EXPERIENCES.map((experience, index) => <Reveal key={experience.id} delay={index * 80}>
            <article className={styles.experience}>
              <div className={styles.experienceTop}><h3 className={styles.experienceRole}>{t(experience.role)}</h3><span className={styles.experiencePeriod}>{t(experience.period)}</span></div>
              <p className={styles.experienceCompany}>{experience.company} · {experience.location}</p>
              <ul className={styles.achievementList}>{experience.achievements.slice(0, 2).map((achievement) => <li key={achievement}>{t(achievement)}</li>)}</ul>
            </article>
          </Reveal>)}
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <Reveal><h2 className={styles.sectionTitle}>{t("Contact")}</h2><p className={styles.contactLead}>{t("Have a project or research question? Send me a note.")}</p></Reveal>
        <Reveal>
          <div className={styles.contactLinks}><SocialLinks /><a className={styles.emailLink} href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></div>
          <PortfolioContactForm />
        </Reveal>
      </section>
    </PortfolioV3PageFrame>
  </PortfolioV3Shell>;
}
