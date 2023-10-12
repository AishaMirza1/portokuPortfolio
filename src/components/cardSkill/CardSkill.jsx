import styles from './cardSkill.module.css';
export default function CardSkill({ skillName, skillDes }) {
  return (
    <div className={styles.cardSkill}>
      <div className={styles.skillLogo}></div>
      <p>{skillName}</p>
      <p>{skillDes}</p>
    </div>
  );
}
