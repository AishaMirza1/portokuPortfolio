import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import Button from '../button/Button';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>PORTOKU</h1>
      <ul>
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
      </ul>
    </nav>
  );
}
