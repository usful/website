import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

import SectionMenuItem from './SectionMenuItem';

export default function SectionMenu({
  className,
  items = [],
  onSectionOver = () => {},
  onSectionLeave = () => {},
  onMouseLeave = () => {}
}) {
  return (
    <div className={cx(styles.sectionMenu, className)}>
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
