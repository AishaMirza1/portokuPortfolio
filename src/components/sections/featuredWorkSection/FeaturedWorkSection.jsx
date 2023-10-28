import styles from './featuredWorkSection.module.css';
export default function FeaturedWorkSection() {
  return (
    <section className={styles.featuredWorkSection} id="portfolios">
      <div className={styles.featuredWorkSectionHeader}>
        <p>FEATURED WORK</p>
        <p>I&apos;ve Contributed Efforts to Achieve Bigger Results</p>
      </div>
      <div>
        <p>projects scrollbar</p>
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
