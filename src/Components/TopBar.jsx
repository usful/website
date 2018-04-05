import React from 'react';
import cx from 'classnames';

import styles from './TopBar.scss';

import util from '../utils';
import Logo from './Logo';
import MainMenu from './MainMenu';
import MainMenuMobile from './MainMenuMobile';

const isMobile = util.isMobile || util.isTablet;

export default function TopBar({
  className,
  menu = [],
  path = '/',
  color = 'white'
}) {
  return (
    <section className={cx(styles.topBar, className)}>
      <div className={styles.spacer}>
        <a className={styles.logoLink} href={path} style={{ color: color }}>
          <Logo className={styles.logo} style={{ color: color }} />
        </a>
      </div>

      {isMobile ? (
        <MainMenuMobile color={color} items={menu} active={false} visible={false} />
      ) : (
        <MainMenu color={color} items={menu} active visible />
      )}
    </section>
  );
}
