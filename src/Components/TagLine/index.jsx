import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function TagLine({ className }) {
  return (
    <h2 className={cx(styles.tagLine, className)}>
      <strong>Shift </strong>
      <br />
      consciousness.
    </h2>
  );
}
