import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles.scss';

export default function MainMenu({ items = [], className }) {
  return (
    <menu className={cx(styles.mainMenu, className)}>
      {items.map(item =>
        <Link to={item.href} key={item.href}>
          {item.name}
        </Link>
      )}
    </menu>
  );
}
