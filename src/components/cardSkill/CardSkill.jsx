import styles from './cardSkill.module.css';
export default function CardSkill() {
  return (
    <div className={styles.cardSkill}>
      <div className={styles.skillLogo}></div>
      <p>Research & Testing</p>
      <p>
        Memulai sebuah projek dengan riset dan memvalidasi ideas dengan proses
        usability-testing.
      </p>
    </div>
  );
}
