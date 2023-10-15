import styles from './testimonialCard.module.css';

export default function TestimonialCard() {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialDis}>
        Angga was truly amazing because he did a lot of A/B testing just to make
        sure the project went successful.
      </p>
      <div className={styles.testimonialCardDetails}>
        <img
          src="https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg"
          alt=""
        />
        <div>
          <p className={styles.testimonialCardName}>Sakhira</p>
          <p className={styles.testimonialCardDis}>Product Owner</p>
        </div>
      </div>
    </div>
  );
}
