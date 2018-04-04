import React from 'react';
import cx from 'classnames';

import styles from './TopBar.scss';

import Logo from './Logo';
import MainMenu from './MainMenu';

export default function TopBar({ className, menu = [], path = '/', color = 'white' }) {
  return (
    <section className={cx(styles.topBar, className)}>
      <div className={styles.spacer}>
        <a className={styles.logoLink} href={path} style={{ color: color }}>
          <Logo className={styles.logo} style={{ color: color }} />
        </a>
      </div>
      <MainMenu color={color} items={menu} active visible />
    </section>
  );
}
