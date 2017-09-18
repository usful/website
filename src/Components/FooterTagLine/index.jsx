import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

export default function FooterTagLine({
  text = 'Want to collaborate on a project?'
}) {
  return (
    <section className={styles.footerTagLine}>
      <div className={styles.tagLine}>
        <hr />
        <h1>
          {text}
        </h1>
        <hr />
      </div>
      <div>
        <Link to="#contact" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
