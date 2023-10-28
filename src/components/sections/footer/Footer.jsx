import { NavLink } from 'react-router-dom';
import ButtonPrimary from '../../button/ButtonPrimary';
import styles from './footer.module.css';
import LogosMarquee from '../../logosMarquee/LogosMarquee';
import { HashLink } from 'react-router-hash-link';
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContactContainer}>
        <div>
          <p>
            Ready to <span style={{ color: '#85DEFF' }}>Build Awesome</span>{' '}
            Project?
          </p>
          <p>
            Memulai sebuah projek dengan riset dan memvalidasi ideas dengan
            usability-testing agar maksimal.
          </p>
          <NavLink to="/contact">
            <ButtonPrimary>Hire Me Now</ButtonPrimary>
          </NavLink>
        </div>
        <LogosMarquee />
      </div>
      <div className={styles.footerLinks}>
        <div>
          <p>PORTOKU</p>
          <p>Minimalist Framer template for any freelancer in the world.</p>
        </div>
        <div>
          <ul>
            <li>useful Links</li>
            <li>
              <HashLink to="/#portfolios">
                <span>Portfilio</span>
              </HashLink>
            </li>
            <li>
              <NavLink to="/testimonials">
                <span>Testimonials</span>
              </NavLink>
            </li>
            <li>
              <HashLink to="/#skill">
                <span>My Skills</span>
              </HashLink>
            </li>
          </ul>
          <ul>
            <li>Contack Me</li>
            <li>
              <HashLink to="/">
                <span>@burhan</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="/">
                <span>team@bwa.com</span>
              </HashLink>
            </li>
            <li>
              <HashLink to="">
                <span>+123 456000</span>
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
