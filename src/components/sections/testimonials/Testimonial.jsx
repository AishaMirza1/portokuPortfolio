import Button from '../../button/Button';
import styles from './testimonial.module.css';
import TestimonialCard from '../../testimonialCard/TestimonialCard';
import { NavLink } from 'react-router-dom';

export default function Testimonial() {
  return (
    <section className={styles.testimonialSection} id="testimonial">
      <div>
        <span>
          <p>TESTIMONIALS</p>
          <p>Reasons People Love to Work With Me</p>
        </span>
        <NavLink to="/testimonials">
          <Button>View All</Button>
        </NavLink>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </section>
  );
}
