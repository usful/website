import React from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

export default function SectionMenuItem({
  item,
  position,
  onMouseOver = () => {},
  onMouseLeave = () => {}
}) {
  return (
    <Link
      to={item.slug}
      className={styles.sectionMenuItem}
      onMouseOver={() => onMouseOver(item)}
      onMouseLeave={() => onMouseLeave(item)}
    >
      <span>{`0${position}`}</span>
      <label>
        {item.name}
      </label>
    </Link>
  );
}
