import React from 'react';
import cx from 'classnames';
import styles from './style.scss';

export default function TextBlock({ text, className }) {
  return (
    <div className={cx(styles.textBlock, className)}>
      <p>{text}</p>
    </div>
  )
}