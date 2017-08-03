import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

export default function MainMenu({ items = [], className }) {
  return (
    <menu className={cx(styles.mainMenu, className)}>
      {items.map(item =>
        <Link to={item.slug} key={item.id}>
          {item.name}
        </Link>
      )}
    </menu>
  );
}
