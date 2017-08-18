import React from 'react';
import cx from 'classnames';
import styles from './style.scss';
import LoadableVideo from '../../LoadableVideo';
import Video from '../../Video';

export default function VideoBlock({ url, text, className, active, useLoadable }) {
  const Vid = useLoadable ? LoadableVideo : Video;

  return (
    <div className={cx(styles.videoBlock, className)}>
      <Vid muted loop play={active} src={url} />
      <h1>
        {text}
      </h1>
    </div>
  );
}
