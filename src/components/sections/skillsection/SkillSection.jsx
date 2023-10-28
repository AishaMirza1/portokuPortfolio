import CardSkill from '../../cardSkill/CardSkill';
import styles from '../../../pages/home.module.css';
export default function SkillSection() {
  return (
    <section className={styles.homeSkillsSection} id="skill">
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
  );
}
