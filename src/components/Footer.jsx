import styles from "./Footer.module.css";

export default function Footer({ bak, dak }) {
  return (
    <div className={styles.footer}>
      <span className={styles.stat}>
        <h2 className={styles.comp}>Completed : {bak}</h2>
        <h2 className={styles.tds}>Todos:{dak}</h2>
      </span>
    </div>
  );
}
