import PropTypes from 'prop-types';
import styles from './button.module.css';
import { motion } from 'framer-motion';
export default function ButtonPrimary({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 1 } }}
      whileTap={{ scale: 0.9 }}
      className={`${styles.btn} ${styles.btnPrimary}`}
    >
      {children}
    </motion.button>
  );
}

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
};
