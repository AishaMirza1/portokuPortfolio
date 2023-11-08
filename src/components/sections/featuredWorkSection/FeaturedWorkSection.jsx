import styles from './featuredWorkSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
export default function FeaturedWorkSection() {
  return (
    <section className={styles.featuredWorkSection} id="portfolios">
      <div className={styles.featuredWorkSectionHeader}>
        <p>FEATURED WORK</p>
        <p>I&apos;ve Contributed Efforts to Achieve Bigger Results</p>
      </div>
      <div>
        <div>
          <AnimatePresence>
            <motion.img
              whileHover={{
                scale: 1.1,
                translateX: 22,
                transition: { duration: 0.3 },
              }}
              exit={{ zIndex: 0 }}
              src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
            ></motion.img>

            <motion.img
              whileHover={{
                scale: 1.1,
                translateX: 22,
                transition: { duration: 0.3 },
              }}
              src="https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"
            ></motion.img>
            <motion.img
              whileHover={{
                scale: 1.01,
                translateX: 22,
                transition: { duration: 0.3 },
              }}
              src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
            ></motion.img>
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.featuredWorkSectionStats}>
        <ul>
          <li>
            <span>1,593</span>
            <p>Projects</p>
          </li>
          <li>
            <span>189</span>
            <p>Countries</p>
          </li>
          <li>
            <span>$25M+</span>
            <p>Valuation</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
