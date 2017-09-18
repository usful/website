import React, { Component } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

import SectionMenuItem from './SectionMenuItem';

export default class SectionMenu extends Component {
  static defaultProps = {
    className: '',
    items: [],
    onSectionOver: () => {},
    onSectionLeave: () => {},
    onMouseLeave: () => {},
    visible: true
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      items,
      onSectionOver,
      onSectionLeave,
      onMouseLeave,
      visible
    } = this.props;

    return (
      <div
        className={cx(
          styles.sectionMenu,
          { [styles.visible]: visible },
          className
        )}
      >
        <menu className={styles.menu} onMouseLeave={onMouseLeave}>
          {items.map((item, i) =>
            <SectionMenuItem
              key={item.id}
              position={i + 1}
              item={item}
              onMouseOver={onSectionOver}
              onMouseLeave={onSectionLeave}
            />
          )}
        </menu>
      </div>
    );
  }
}
