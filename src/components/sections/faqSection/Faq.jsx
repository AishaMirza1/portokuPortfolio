import FaqCard from './FaqCard';
import styles from './faq.module.css';
import { data } from '../../../data';
export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <p>GETTING KNOW ABOUT ME</p>
        <p>Frequently Asked Questions</p>
      </div>
      <div className={styles.faqCardContainer}>
        {data.map((item, index) => {
          return (
            <FaqCard
              question={item.question}
              answer={item.answer}
              key={`faq-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
}
