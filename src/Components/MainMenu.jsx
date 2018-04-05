import React from 'react';
import cx from 'classnames';

import Showable from './Showable';
import styles from './MainMenu.scss';

export default class MainMenu extends Showable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      shown: false,
      hidden: true
    };
  }

  render() {
    const { className, color, items } = this.props;

    return (
      <menu className={cx(styles.mainMenu, className, styles[color])}>
        <div className={cx(styles.menuItems)}>
          {items.map(item => (
            <a href={item.hash || item.href} key={item.hash || item.href}>
              {item.name}
            </a>
          ))}
        </div>
      </menu>
    );
  }
}
