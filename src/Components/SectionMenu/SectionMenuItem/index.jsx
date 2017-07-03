import React from 'react';
import styles from './styles.scss';

export default function SectionMenuItem(props) {
  return (
    <a href={props.item.slug} className={styles.sectionMenuItem}>
      <span>{`0${props.position}`}</span>
      <label>{props.item.name}</label>
    </a>
  );
}
