import React from 'react';
import cx from 'classnames';
import styles from './QuoteBlock.scss';

export default function QuoteBlock({ text, by, className }) {
  return (
    <div className={cx(styles.quoteBlock, className)}>
      <hr />
      <blockquote>&#8220;{text}&#8221;</blockquote>
      <h2>{by}</h2>
      <hr />
    </div>
  );
}
