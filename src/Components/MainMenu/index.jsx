import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

export default function MainMenu({ items = [], color = 'white', className }) {
  const itemToggle = () => {
    const itemDiv = document.querySelector(`.${styles.menuItems}`);
    if (itemDiv.className.includes(`${styles.show}`)) {
      itemDiv.className = cx(styles.menuItems);
    } else {
      itemDiv.className = cx(styles.menuItems, styles.show);
    }
  };

  return (
    <menu className={cx(styles.mainMenu, className, styles[color])}>
      <div className={cx(styles.menuItems)}>
        {items.map(item =>
          (<Link to={item.href} key={item.href}>
            {item.name}
          </Link>),
        )}
      </div>
      <a className={cx(styles.icon)} onClick={itemToggle}>&#9776;</a>
    </menu>
  );
}
