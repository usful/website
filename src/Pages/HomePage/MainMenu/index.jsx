import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function MainMenu({ items = [], className }) {
  return (
    <menu className={cx(styles.mainMenu, className)}>
      {items.map(item =>
        <a href={item.href} key={item.href}>
          {item.name}
        </a>
      )}
    </menu>
  );
}
