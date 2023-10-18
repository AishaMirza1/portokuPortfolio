import { Link } from 'react-router-dom';
import ButtonPrimary from '../../button/ButtonPrimary';
import styles from './footer.module.css';
import LogosMarquee from '../../logosMarquee/LogosMarquee';
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
          <ButtonPrimary>Hire Me</ButtonPrimary>
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
              <Link>
                <span>Portfilio</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>Testimonials</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>My Skills</span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>Contack Me</li>
            <li>
              <Link>
                <span>@burhan</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>team@bwa.com</span>
              </Link>
            </li>
            <li>
              <Link>
                <span>+123 456000</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
