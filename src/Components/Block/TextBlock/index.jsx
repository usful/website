import React from 'react';
import cx from 'classnames';
import Markdown from 'react-markdown';

import styles from './style.scss';

export default function TextBlock({ text, className }) {
  return (
    <div className={cx(styles.textBlock, className)}>
      <Markdown source={text} />
    </div>
  )
}