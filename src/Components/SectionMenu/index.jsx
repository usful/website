import React from 'react';
import styles from './styles.scss';

import SectionMenuItem from './SectionMenuItem';

export default function SectionMenu({
  items = [],
  onSectionOver = () => {},
  onSectionLeave = () => {},
  onMouseLeave = () => {}
}) {
  return (
    <menu className={styles.sectionMenu} onMouseLeave={onMouseLeave}>
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
  );
}
