import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import Logo from '../Logo';
import MainMenu from '../MainMenu';

export default function TopBar({ className, menu = [], path = '/', color = 'white' }) {
  return (
    <section className={cx(styles.topBar, className)}>
      <div className={styles.spacer}>
        <Link className={styles.logoLink} to={path} style={{ color: color }}>
          <Logo className={styles.logo} style={{ color: color }} />
        </Link>
      </div>
      <MainMenu color={color} items={menu} />
    </section>
  );
}
