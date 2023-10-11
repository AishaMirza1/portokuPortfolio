import styles from './peopleCard.module.css';
export default function PeoplesCard() {
  return (
    <div className={styles.peoplesCard}>
      <img
        src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg"
        alt=""
      />
      <div>
        <p className={styles.peoplesCardName}>Sakhira</p>
        <p className={styles.peoplesCardDis}>Product Owner</p>
      </div>
    </div>
  );
}
