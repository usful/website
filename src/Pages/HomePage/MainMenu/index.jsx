import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function MainMenu({ items = [], className }) {
  return (
    <menu className={cx(styles.mainMenu, className)}>
      {items.map(item =>
        <a href={item.hash} key={item.id}>
          {item.name}
        </a>
      )}
    </menu>
  );
}
