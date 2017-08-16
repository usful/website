import React from 'react';
import cx from 'classnames';

import styles from './style.scss';

export default function ImageBlock({ url, text, align, className }) {
  if (align === 'center') {
    return (
      <div className={cx(styles.imageBlock, styles.alignCenter, className)}>
        <img src={url} />
        <p>
          {text}
        </p>
      </div>
    );
  } else if (align === 'left') {
    return (
      <div className={cx(styles.imageBlock, styles.alignLeft, className)}>
        <p>
          {text}
        </p>
        <img src={url} />
      </div>
    );
  } else if (align === 'right') {
    return (
      <div className={cx(styles.imageBlock, styles.alignRight, className)}>
        <img src={url} />
        <p>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className={cx(styles.imageBlock, styles.alignFull, className)}>
      <img src={url} />
    </div>
  );
}
