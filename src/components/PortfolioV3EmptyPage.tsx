"use client";

import Link from "next/link";
import styles from "./PortfolioV3Content.module.css";
import PortfolioV3Shell from "./PortfolioV3Shell";
import { PortfolioV3PageFrame } from "./PortfolioV3PageFrame";
import { useLocale } from "./LocaleProvider";

export default function PortfolioV3EmptyPage({ title, description }: { title: string; description: string }) {
  const { t } = useLocale();
  return <PortfolioV3Shell>
    <PortfolioV3PageFrame>
      <section>
        <Link className={styles.backLink} href="/#home"><span aria-hidden="true">←</span>{t("back to home")}</Link>
        <h1 className={styles.detailTitle}>{t(title)}</h1>
        <p className={styles.pageIntro}>{t(description)}</p>
      </section>
    </PortfolioV3PageFrame>
  </PortfolioV3Shell>;
}
