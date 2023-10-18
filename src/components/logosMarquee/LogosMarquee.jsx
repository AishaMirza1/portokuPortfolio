import styles from './logosMarquee.module.css';
import logo1 from '../../assets/logos/fedex.png';
import logo2 from '../../assets/logos/Traveloka_Primary_Logo.webp';
import logo3 from '../../assets/logos/mandiri.png';
import logo4 from '../../assets/logos/Google-Logo.wine.png';
import logo5 from '../../assets/logos/paypal.png';
import { motion } from 'framer-motion';
export default function LogosMarquee({ isHomeMarquee }) {
  const marqueeVariants = {
    animate: {
      x: [0, -792],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 5,
          ease: 'linear',
        },
      },
    },
  };
  return (
    <div>
      {isHomeMarquee ? (
        <div className={styles.marquee}>
          {/* {/* //    3. Using framer motion */}
          <motion.div
            className={styles.track}
            variants={marqueeVariants}
            animate="animate"
          >
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo1" />
            <img src={logo3} alt="logo1" />
            <img src={logo4} alt="logo1" />
            <img src={logo5} alt="logo1" />
          </motion.div>
          <motion.div
            className={styles.track}
            variants={marqueeVariants}
            animate="animate"
          >
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo1" />
            <img src={logo3} alt="logo1" />
            <img src={logo4} alt="logo1" />
            <img src={logo5} alt="logo1" />
          </motion.div>
        </div>
      ) : (
        <div className={`${styles.marquee} ${styles.footerMarquee}`}>
          {/* 3. Using framer motion */}
          <motion.div
            className={styles.track}
            variants={marqueeVariants}
            animate="animate"
          >
            <span>Design System</span>
            <span>Typography</span>
            <span>Responsive Design</span>
            <span>UI/UX Design</span>
            <span>Copy Writing</span>
            <span>Website Design</span>
          </motion.div>
          <motion.div
            className={styles.track}
            variants={marqueeVariants}
            animate="animate"
          >
            <span>Design System</span>
            <span>Typography</span>
            <span>Responsive Design</span>
            <span>UI/UX Design</span>
            <span>Copy Writing</span>
            <span>Website Design</span>
          </motion.div>
        </div>
      )}
    </div>
  );
}
