import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Showable from '../../Components/Showable';

import util from '../../utils';
import CloseIcon from '../Icons/Close/index';
import styles from './styles.scss';

const isMobile = util.isMobile || util.isTablet;

export default class MainMenu extends Showable {
  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      shown: !isMobile,
      hidden: isMobile
    };
  }

  render() {
    const { className, color, items } = this.props;

    return (
      <menu
        className={cx(
          styles.mainMenu,
          className,
          styles[color]
        )}
      >
        {this.state.shown ? (
          <div className={cx(styles.menuItems)}>
            {util.isMobile ? (
              <a className={styles.closeMenu} onClick={() => this.hide()}>
                <CloseIcon color="white" />
              </a>
            ) : null}
            {items.map(item => (
              <Link to={item.href} key={item.href} onClick={() => this.hide()}>
                {item.name}
              </Link>
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
