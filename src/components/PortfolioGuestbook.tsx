"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { PortfolioV3PageFrame } from "@/components/PortfolioV3PageFrame";
import PortfolioV3Shell from "@/components/PortfolioV3Shell";
import { createClient } from "@/utils/supabase/client";
import contentStyles from "@/components/PortfolioV3Content.module.css";
import styles from "./PortfolioGuestbook.module.css";

type GuestbookEntry = { id: string; name: string; message: string; createdAt: number };

export default function PortfolioGuestbook() {
  const { t, locale } = useLocale();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("");
  const [loadError, setLoadError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadEntries() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("guestbook_entries")
          .select("id, name, message, created_at")
          .order("created_at", { ascending: false })
          .limit(100);

        if (error) throw error;
        if (active) {
          setEntries((data ?? []).map((entry) => ({
            id: entry.id,
            name: entry.name,
            message: entry.message,
            createdAt: Date.parse(entry.created_at),
          })));
          setLoadError("");
        }
      } catch {
        if (active) setLoadError(t("Guestbook is unavailable. Apply the Supabase setup and try again."));
      } finally {
        if (active) setReady(true);
      }
    }

    void loadEntries();
    return () => { active = false; };
  }, [t]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    if (!name || !message) return;

    setSubmitting(true);
    setStatus("");
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("guestbook_entries")
        .insert({ name, message })
        .select("id, name, message, created_at")
        .single();

      if (error || !data) throw error;
      const newEntry = { id: data.id, name: data.name, message: data.message, createdAt: Date.parse(data.created_at) };
      setEntries((current) => [newEntry, ...current].slice(0, 100));
      form.reset();
      setStatus(t("Your message was added to the guestbook."));
    } catch {
      setStatus(t("Your message could not be saved. Please try again."));
    } finally {
      setSubmitting(false);
    }
  }

  const dateLocale = locale === "id" ? "id-ID" : locale === "zh" ? "zh-CN" : "en-US";

  return <PortfolioV3Shell>
    <PortfolioV3PageFrame>
      <section className={styles.guestbookPage}>
        <Link className={contentStyles.backLink} href="/#home"><span aria-hidden="true">←</span>{t("back to home")}</Link>
        <h1 className={contentStyles.detailTitle}>{t("Guestbook")}</h1>
        <p className={contentStyles.pageIntro}>{t("Leave a message and say hi")}</p>

        <form className={styles.form} onSubmit={submit}>
          <label className={styles.field}>
            <span>{t("Name")}</span>
            <input autoComplete="name" name="name" maxLength={60} placeholder={t("Your name")} required />
          </label>
          <label className={styles.field}>
            <span>{t("Message")}</span>
            <textarea name="message" maxLength={500} rows={4} placeholder={t("Leave a short note")} required />
          </label>
          <button className={styles.submit} type="submit" disabled={!ready || submitting || Boolean(loadError)}>{t(submitting ? "Saving message" : "Sign guestbook")}</button>
          <p className={styles.status} role="status" aria-live="polite">{status}</p>
        </form>

        <section className={styles.messages} aria-labelledby="guestbook-messages-title">
          <h2 id="guestbook-messages-title" className={contentStyles.sectionTitle}>{t("Messages")} <span>({entries.length})</span></h2>
          {!ready ? <p className={styles.empty}>{t("Loading messages")}</p> : loadError ? <p className={styles.empty}>{loadError}</p> : entries.length === 0 ? <p className={styles.empty}>{t("No messages yet.")} {t("Be the first to leave a note.")}</p> : <ol className={styles.entryList}>
            {entries.map((entry) => <li className={styles.entry} key={entry.id}>
              <div className={styles.entryMeta}><strong>{entry.name}</strong><time dateTime={new Date(entry.createdAt).toISOString()}>{new Intl.DateTimeFormat(dateLocale, { year: "numeric", month: "short", day: "numeric" }).format(new Date(entry.createdAt))}</time></div>
              <p>{entry.message}</p>
            </li>)}
          </ol>}
        </section>
      </section>
    </PortfolioV3PageFrame>
  </PortfolioV3Shell>;
}
