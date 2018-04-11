import React from 'react';
import cx from 'classnames';

import Showable from './Showable';

import CloseIcon from './Icons/Close';
import styles from './MainMenuMobile.scss';

export default class MainMenuMobile extends Showable {
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
        {this.state.shown ? (
          <div className={cx(styles.menuItems)}>
            <a className={styles.closeMenu} onClick={() => this.hide()}>
              <CloseIcon color="white" />
            </a>
            {items.map(item => (
              <a
                href={item.hash || item.href}
                key={item.hash || item.href}
                onClick={() => this.hide()}
              >
                {item.name}
              </a>
            ))}
          </div>
        ) : (
          <a className={cx(styles.icon)} onClick={() => this.show()}>
            &#9776;
          </a>
        )}
      </menu>
    );
  }
}
