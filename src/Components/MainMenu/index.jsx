import React, {Component} from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import util from '../../utils';
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
        {this.state.showItems ? items.map(item =>
          (<Link to={item.href} key={item.href}>
            {item.name}
          </Link>),
        ) : null}
        <a className={cx(styles.icon)} onClick={() => this.setState({ showItems: !this.state.showItems })}>&#9776;</a>
      </menu>
    );
  }
}

/**export default function MainMenu({ items = [], color = 'white', className }) {
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
}**/
