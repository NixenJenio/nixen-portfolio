import styles from "./PortfolioV3Content.module.css";

export function PortfolioV3PageFrame({ children, footer = true }: { children: React.ReactNode; footer?: boolean }) {
  return <>
    <main id="main-content" className={styles.main}>{children}</main>
    {footer && <footer className={styles.footer}>© {new Date().getFullYear()} Nixen Jenio</footer>}
  </>;
}
