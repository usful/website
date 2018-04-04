import React from 'react';
import cx from 'classnames';

import styles from './TagLine.scss';

export default function TagLine({ className }) {
  return (
    <h2 className={cx(styles.tagLine, className)}>
      Shift
      <br />
      <span>consciousness.</span>
    </h2>
  );
}
