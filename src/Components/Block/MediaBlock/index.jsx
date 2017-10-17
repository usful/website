import React from 'react';

import cx from 'classnames';

import styles from './style.scss';
import LoadableImage from '../../LoadableImage';
import LoadableVideo from '../../LoadableVideo';
import Video from '../../Video';


export default function MediaBlock({
  url,
  text,
  align,
  className,
  mediaType,
  useLoadable,
  active,
  width,
}) {
  let Media;

  if (mediaType === 'Image') {
    Media = useLoadable ?
      <LoadableImage style={{ width: `${width}%` }} src={url} />
      : <img style={{ width: `${width}%` }} src={url} />;
  } else if (mediaType === 'Video') {
    const Vid = useLoadable ? LoadableVideo : Video;
    Media = <Vid style={{ width: `${width}%` }} muted loop play={active} src={url} />;
  }
  Media = <div className={cx(styles.MediaDiv)}>{Media}</div>;

  if (align === 'center') {
    return (
      <div className={cx(styles.MediaBlock, styles.alignCenter, className)}>
        {Media}
        <p>
          {text}
        </p>
      </div>
    );
  } else if (align === 'left') {
    return (
      <div className={cx(styles.MediaBlock, styles.alignLeft, className)}>
        <p>
          {text}
        </p>
        {Media}
      </div>
    );
  } else if (align === 'right') {
    return (
      <div className={cx(styles.MediaBlock, styles.alignRight, className)}>
        {Media}
        <p>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className={cx(styles.MediaBlock, styles.alignFull, className)}>
      {Media}
    </div>
  );
}
