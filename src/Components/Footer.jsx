import React from 'react';
import cx from 'classnames';
import styles from './Footer.scss';

export default function Footer({ className }) {
  return (
    <section className={cx(styles.footer, className)}>
      <ul>
        <li>
          <a href="mailto:hello@usful.co">hello@usful.co</a>
        </li>
        <li>&copy; {new Date().getFullYear()} Usful</li>
        <li>❤ from Toronto</li>
        <li>
          <span>Mona Networks Inc.</span>
        </li>
        <li className={styles.social}>
          <a
            href="https://twitter.com/Usful_"
            target="_blank"
            className="ion-social-twitter"
          />
          <a
            href="https://www.instagram.com/usful.co/"
            target="_blank"
            className="ion-social-instagram-outline"
          />
          <a
            href="https://www.facebook.com/beusful/"
            target="_blank"
            className="ion-social-facebook"
          />
        </li>
      </ul>
    </section>
  );
}
