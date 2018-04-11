import React from 'react';
import { Link } from 'react-router-dom';

import styles from './FooterTagLine.scss';

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
        <a href="#contact" className={styles.button}>
          Contact Us
        </a>
      </div>
    </section>
  );
}
