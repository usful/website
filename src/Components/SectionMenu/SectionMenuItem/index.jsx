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
      to={item.route.path}
      className={styles.sectionMenuItem}
      onMouseOver={() => onMouseOver(item)}
      onMouseLeave={() => onMouseLeave(item)}
    >
      <span>{`${position}`.padStart(2,'0')}</span>
      <label>
        {item.name}
      </label>
    </Link>
  );
}
