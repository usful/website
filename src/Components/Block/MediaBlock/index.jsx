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
  width
}) {
  const mediaStyle = { width: `${width}%` };
  let Media;

  if (mediaType === 'Image' && useLoadable) {
    Media = <LoadableImage style={mediaStyle} src={url} />;
  } else if (mediaType === 'Image') {
    Media = <img style={mediaStyle} src={url} />;
  } else if (mediaType === 'Video' && useLoadable) {
    Media = <LoadableVideo style={mediaStyle} muted loop play={active} src={url} />;
  } else if (mediaType === 'Video') {
    Media = <Video style={mediaStyle} muted loop play={active} src={url} />;
  }

  return (
    <div
      className={cx(
        styles.MediaBlock,
        {
          [styles.alignCenter]: align === 'center',
          [styles.alignLeft]: align === 'left',
          [styles.alignRight]: align === 'right'
        },
        className
      )}
    >
      {align === 'left' ? <p>{text}</p> : null}
      <div className={styles.wrapper}>{Media}</div>
      {align !== 'left' ? <p>{text}</p> : null}
    </div>
  );
}
