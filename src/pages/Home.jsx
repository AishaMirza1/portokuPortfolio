import Navbar from '../components/navbar/Navbar';
import FeaturedWorkSection from '../components/sections/featuredWorkSection/FeaturedWorkSection';
import SkillSection from '../components/sections/skillsection/SkillSection';
import Footer from '../components/sections/footer/Footer';
import Testimonial from '../components/sections/testimonials/Testimonial';
import styles from './home.module.css';
import LogosMarquee from '../components/logosMarquee/LogosMarquee';
export default function Home() {
  return (
    <>
      <Navbar />
      <section className={styles.homeHeader} id="home">
        <p>Hola! I am Angga</p>
        <h1>Full-Stack Designer</h1>
        <LogosMarquee isHomeMarquee={true} />
      </section>
      <SkillSection />
      <FeaturedWorkSection />
      <Testimonial />
      <Footer />
    </>
  );
}
