import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import util from '../../utils';
import CloseIcon from '../Icons/Close/index';
import styles from './styles.scss';

export default class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showItems: !util.isMobile,
    };
  }
  render() {
    const {
      className,
      color,
      items,
    } = this.props;
    return (
      <menu className={cx(styles.mainMenu, className, styles[color])}>
        {
          this.state.showItems ?
            <div className={cx(styles.menuItems)} >
              <a className={styles.closeMenu} onClick={() => this.setState({ showItems: !this.state.showItems })}>
                <CloseIcon color="white" />
              </a>
              {items.map(item =>
                (<Link to={item.href} key={item.href}>
                  {item.name}
                </Link>),
              )}
            </div>
            : <a className={cx(styles.icon)} onClick={() => this.setState({ showItems: !this.state.showItems })}>
              &#9776;
            </a>
        }
      </menu>
    );
  }
}
