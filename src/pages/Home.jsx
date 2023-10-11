import Navbar from '../components/navbar/Navbar';
import styles from './home.module.css';
export default function Home() {
  return (
    <section>
      <Navbar />
      <section className={styles.homeHeader}>
        <p>Hola! I am Angga</p>
        <h1>Full-Stack Designer</h1>
      </section>
      <section className={styles.homeSkillsSection}></section>
    </section>
  );
}
