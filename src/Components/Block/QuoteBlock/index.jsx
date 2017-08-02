import React from 'react';
import styles from './style.scss';

export default function QuoteBlock({ text, by }) {
  return (
    <div className={styles.quoteBlock}>
      <hr/>
      <blockquote>&#8220;{text}&#8221;</blockquote>
      <h2>{by}</h2>
      <hr/>
    </div>
  )
}