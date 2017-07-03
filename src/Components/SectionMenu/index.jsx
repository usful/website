import React from 'react';
import styles from './styles.scss';

import SectionMenuItem from './SectionMenuItem';

export default function SectionMenu(props) {
  const items = props.items || [];

  return (
    <menu className={styles.sectionMenu}>
      {items.map((item, i) =>
        <SectionMenuItem key={item.id} position={i+1} item={item} />
      )}
    </menu>
  );
}
