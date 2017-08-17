import React from 'react';
import cx from 'classnames';
import styles from './style.scss';
import LoadableVideo from '../../LoadableVideo';

export default function VideoBlock({ url, text, className, useLoadable }) {
  return (
    <div className={cx(styles.videoBlock, className)}>
      {useLoadable
        ? <LoadableVideo muted autoPlay loop src={url} />
        : <video muted autoPlay loop>
            <source src={url} />
          </video>}
      <h1>
        {text}
      </h1>
    </div>
  );
}
