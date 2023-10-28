import styles from './faqCard.module.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
export default function FaqCard({ question, answer }) {
  const [showAns, setShowAns] = useCycle(false, true);
  return (
    <div className={styles.faqCard}>
      <div onClick={() => setShowAns(!showAns)}>
        <p className={styles.question}>{question}</p>
        {showAns ? <BiChevronUp /> : <BiChevronDown />}
      </div>
      <AnimatePresence>
        {showAns && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className={styles.answer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
