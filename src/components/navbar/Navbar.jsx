import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';
import Button from '../button/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
export default function Navbar() {
  function getCurrentWidth() {
    return window.innerWidth;
  }
  const [screenSize, setScreenSize] = useState(getCurrentWidth());
  const [mobileNav, setMobileNav] = useState(false, true);
  console.log(mobileNav);
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentWidth());
    };
    window.addEventListener('resize', updateDimension);
    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <nav className={styles.navbar}>
      <div>
        <div>
          <h1>PORTOKU</h1>
          <div className={styles.navContainer}>
            <div className={styles.btnContainer}>
              <motion.button
                onClick={() => setMobileNav((prev) => !prev)}
                animate={mobileNav ? 'open' : 'close'}
              >
                <motion.span
                  variants={{
                    close: { rotate: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  transition={{
                    ease: 'linear',
                    duration: 0.2,
                  }}
                ></motion.span>
                <motion.span
                  variants={{
                    open: { opacity: 0 },
                    close: { opacity: 1 },
                  }}
                ></motion.span>
                <motion.span
                  variants={{
                    close: { rotate: 0 },
                    open: { rotate: -45, y: -11 },
                  }}
                ></motion.span>
              </motion.button>
            </div>
          </div>
        </div>

        {mobileNav || screenSize >= 810 ? (
          <AnimatePresence>
            <motion.ul
              variants={{
                open: { x: 0 },
                close: { x: -100 },
              }}
              initial="close"
              animate="open"
              exit="close"
            >
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Skills</NavLink>
              </li>
              <li>
                <NavLink>Portfolios</NavLink>
              </li>
              <li>
                <NavLink>Testimonials</NavLink>
              </li>
              <Button>Hire Me</Button>
            </motion.ul>
          </AnimatePresence>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
