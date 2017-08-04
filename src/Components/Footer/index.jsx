import React from 'react';
import styles from './styles.scss';

export default function Footer({ className }) {
  return (
    <section className={cx(styles.contact, className)}>
      <ul>
        <li>
          <a href="mailto:hello@usful.co">hello@usful.co</a>
        </li>
        <li>
          &copy; {new Date().getFullYear()} Usful Co Inc.
        </li>
        <li>46 Stewart St, Toronto, Canada</li>
      </ul>
    </section>
  );
}
