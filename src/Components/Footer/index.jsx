import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

export default function Footer({ className }) {
  return (
    <section className={cx(styles.footer, className)}>
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
