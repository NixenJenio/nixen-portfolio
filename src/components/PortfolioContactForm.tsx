"use client";

import type { FormEvent } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./PortfolioV3Content.module.css";

export default function PortfolioContactForm() {
  const { t } = useLocale();
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`${t("Portfolio message from")} ${name}`);
    const body = encodeURIComponent(`${t("From")}: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  }

  return <form className={styles.form} onSubmit={submit}>
    <input name="name" autoComplete="name" aria-label={t("Name")} placeholder={t("Your name")} required />
    <input name="email" type="email" autoComplete="email" aria-label={t("Email")} placeholder={t("you@example.com")} required />
    <textarea className={styles.messageField} name="message" rows={4} aria-label={t("Message")} placeholder={t("What would you like to talk about?")} required />
    <button className={styles.formSubmit} type="submit">{t("Send message")}</button>
  </form>;
}
