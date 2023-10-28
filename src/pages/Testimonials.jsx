import Navbar from '../components/navbar/Navbar';
import styles from './testimonial.module.css';
import TestimonialCard from '../components/testimonialCard/TestimonialCard';
import FaqSection from '../components/sections/faqSection/Faq';
import Footer from '../components/sections/footer/Footer';
export default function Testimonials() {
  return (
    <div>
      <Navbar />
      <div className={styles.testimonialHeader}>
        <p>Real Testimonials</p>
        <p>I&apos;m Always Working Hard and Better</p>
      </div>
      <div className={styles.testimonialContainer}>
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
        <TestimonialCard src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg" />
      </div>

      <FaqSection />
      <Footer />
    </div>
  );
}
