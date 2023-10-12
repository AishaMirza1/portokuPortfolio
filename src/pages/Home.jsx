import Navbar from '../components/navbar/Navbar';
import CardSkill from '../components/cardSkill/CardSkill';
import styles from './home.module.css';
export default function Home() {
  return (
    <section>
      <Navbar />
      <section className={styles.homeHeader}>
        <p>Hola! I am Angga</p>
        <h1>Full-Stack Designer</h1>
      </section>
      <section className={styles.homeSkillsSection}>
        <div className={styles.homeSkillsSectionHeader}>
          <p>AM I UNICORN?</p>
          <p>UI/UX Design & Frontend Are My Skills</p>
        </div>
        <div>
          <div className={styles.skillGridContainer}>
            <CardSkill
              skillName="Research & Testing"
              skillDes="Memulai sebuah projek dengan riset dan memvalidasi ideas dengan proses usability-testing."
            />
            <CardSkill
              skillName="Visual Design"
              skillDes="Memulai sebuah projek dengan riset dan memvalidasi ideas dengan proses usability-testing."
            />
          </div>
          <div className={styles.skillGridContainer2}>
            <CardSkill
              skillName="Product Roadmap"
              skillDes="Memulai sebuah projek dengan riset dan memvalidasi ideas dengan proses usability-testing."
            />
            <CardSkill
              skillName="Lifetime Learner"
              skillDes="Memulai sebuah projek dengan riset dan memvalidasi ideas dengan proses usability-testing."
            />
          </div>
        </div>
      </section>
    </section>
  );
}
