import PropTypes from 'prop-types';
import styles from './button.module.css';
import { motion } from 'framer-motion';
export default function Button({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 1 } }}
      whileTap={{ scale: 0.9 }}
      className={styles.btn}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
