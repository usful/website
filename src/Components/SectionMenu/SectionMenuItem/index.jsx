import React from 'react';
import styles from './styles.scss';

export default function SectionMenuItem({
  item,
  position,
  onMouseOver = () => {},
  onMouseLeave = () => {}
}) {
  return (
    <a
      href={item.slug}
      className={styles.sectionMenuItem}
      onMouseOver={() => onMouseOver(item)}
      onMouseLeave={() => onMouseLeave(item)}
    >
      <span>{`0${position}`}</span>
      <label>
        {item.name}
      </label>
    </a>
  );
}
