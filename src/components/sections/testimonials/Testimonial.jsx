import Button from '../../button/Button';
import styles from './testimonial.module.css';
import TestimonialCard from '../../testimonialCard/TestimonialCard';
export default function Testimonial() {
  return (
    <section className={styles.testimonialSection} id="testimonial">
      <div>
        <span>
          <p>TESTIMONIALS</p>
          <p>Reasons People Love to Work With Me</p>
        </span>
        <Button>View All</Button>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </section>
  );
}
