import React from 'react';
import cx from 'classnames';
import styles from './style.scss';

export default function VideoBlock({ url, text, className }) {
  return (
    <div className={cx(styles.videoBlock, className)}>
      <video muted autoPlay loop>
        <source src={url} />
      </video>
      <h1>{text}</h1>
    </div>
  );
}
