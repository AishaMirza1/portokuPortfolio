import Navbar from '../components/navbar/Navbar';
import styles from './contact.module.css';
import Footer from '../components/sections/footer/Footer';
import FaqSection from '../components/sections/faqSection/Faq';
import Button from '../components/button/Button';
import img1 from '../assets/imgs/img1.avif';
import img2 from '../assets/imgs/img1.avif';
import img3 from '../assets/imgs/img1.avif';
import GoToTop from '../components/GoToTop';
export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <Navbar />
      <div>
        <div className={styles.contactHeader}>
          <p>BUILD AWESOME PROJECT</p>
          <p>Let&apos;s Discuss Your Next Great Project</p>
          <div className={styles.formContainer}>
            <form>
              <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea
                rows="4"
                cols="50"
                placeholder="Brief your project goals, budget, and deadline"
              ></textarea>
              <Button type="submit">Send Message</Button>
            </form>
            <div className={styles.imgGridContainer}>
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </div>
          </div>
        </div>
      </div>
      <FaqSection />
      <Footer />
      <GoToTop />
    </div>
  );
}
