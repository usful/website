import React from 'react';
import styles from './style.scss';

export default function TextBlock({ text }) {
  return (
    <div className={styles.textBlock}>
      <p>{text}</p>
    </div>
  )
}