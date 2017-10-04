import React from 'react';
import cx from 'classnames';
import styles from './style.scss';
import LoadableVideo from '../../LoadableVideo';
import Video from '../../Video';

export default function VideoBlock({
  url,
  text,
  className,
  active,
  useLoadable,
  padding = 0,
}) {
  const Vid = useLoadable ? LoadableVideo : Video;

  return (
    <div
      className={cx(styles.videoBlock, className)}
      style={{ padding: `2rem ${padding}%` }}
    >
      <Vid muted loop play={active} src={url} />
      <p>
        {text}
      </p>
    </div>
  );
}
