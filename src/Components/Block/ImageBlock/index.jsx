import React from 'react';

import cx from 'classnames';

import styles from './style.scss';
import LoadableImage from '../../LoadableImage';

export default function ImageBlock({
  url,
  text,
  align,
  className,
  useLoadable,
}) {
  const Img = useLoadable ? <LoadableImage src={url} /> : <img src={url} />;

  if (align === 'center') {
    return (
      <div className={cx(styles.imageBlock, styles.alignCenter, className)}>
        {Img}
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
        {Img}
      </div>
    );
  } else if (align === 'right') {
    return (
      <div className={cx(styles.imageBlock, styles.alignRight, className)}>
        {Img}
        <p>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className={cx(styles.imageBlock, styles.alignFull, className)}>
      {Img}
    </div>
  );
}
