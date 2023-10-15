import Navbar from '../components/navbar/Navbar';
import FeaturedWorkSection from '../components/sections/FeaturedWorkSection';
import SkillSection from '../components/sections/SkillSection';
import Testimonial from '../components/testimonials/Testimonial';
import styles from './home.module.css';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.homeHeader}>
        <p>Hola! I am Angga</p>
        <h1>Full-Stack Designer</h1>
      </section>
      <SkillSection />
      <FeaturedWorkSection />
      <Testimonial />
    </>
  );
}
