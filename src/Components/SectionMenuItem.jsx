import React from 'react';
import styles from './SectionMenuItem.scss';

export default function SectionMenuItem({
  item,
  position,
  onMouseOver = () => {},
  onMouseLeave = () => {}
}) {
  return (
    <a
      href={item.route.path}
      className={styles.sectionMenuItem}
      onMouseOver={() => onMouseOver(item)}
      onMouseLeave={() => onMouseLeave(item)}
    >
      <span>{`${position}`.padStart(2,'0')}</span>
      <label>
        {item.name}
      </label>
    </a>
  );
}
