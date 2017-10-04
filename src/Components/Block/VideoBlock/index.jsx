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
  align,
  useLoadable,
  padding = 0
}) {
  const Vid = useLoadable ? LoadableVideo : Video;

  if (align === 'left') {
    return (
      <div
        className={cx(styles.videoBlock, styles.alignLeft, className)}
      >
        <div
          className={cx(styles.videoDiv)}
          style={{ padding: `0 ${padding}%` }}
        >
          <Vid muted loop play={active} src={url} />
        </div>
        <p>
          {text}
        </p>
      </div>
    );
  } else if (align === 'right') {
    return (
      <div
        className={cx(styles.videoBlock, styles.alignRight, className)}
      >
        <div
          className={cx(styles.videoDiv)}
          style={{ padding: `0 ${padding}%` }}
        >
          <Vid muted loop play={active} src={url} />
        </div>
        <p>
          {text}
        </p>
      </div>
    );
  }
  return (
    <div
      className={cx(styles.videoBlock, className)}
      style={{ padding: `2rem ${padding}%` }}
    >
      <Vid muted loop play={active} src={url} />
      <h1>
        {text}
      </h1>
    </div>
  );
}
