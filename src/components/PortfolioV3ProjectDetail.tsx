"use client";

import Link from "next/link";
import type { Project } from "@/data/portfolioData";
import { useLocale } from "@/components/LocaleProvider";
import styles from "@/components/PortfolioV3Content.module.css";

export default function PortfolioV3ProjectDetail({ project }: { project: Project }) {
  const { t } = useLocale();
  return <article>
    <div className={styles.detailTop}>
      <Link className={styles.backLink} href="/#projects"><span aria-hidden="true">←</span> {t("back to projects")}</Link>
      <h1 className={styles.detailTitle}>{t(project.title)}</h1>
      {project.externalUrl && <div className={styles.detailActions}><a className={styles.detailAction} href={project.externalUrl} target="_blank" rel="noreferrer">{t(project.externalUrlLabel ?? "Open project")}<span aria-hidden="true">↗</span></a></div>}
      <p className={styles.detailDescription}>{t(project.longDescription)}</p>
    </div>
    <hr className={styles.detailRule} />
    <section className={styles.detailBlock}>
      <h2 className={styles.detailHeading}>{t("Stack")}</h2>
      <div className={styles.tags}>{project.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}</div>
    </section>
    <section className={styles.detailBlock}>
      <h2 className={styles.detailHeading}>{t("Features")}</h2>
      <ul className={styles.featureList}>{project.keyContributions.map((feature) => <li key={feature}>{t(feature)}</li>)}</ul>
    </section>
  </article>;
}
