import React from 'react';
import styles from './style.scss';

export default function VideoBlock({ url }) {
  return (
    <div className={styles.videoBlock}>
      <video muted autoPlay loop>
        <source src={url} />
      </video>
    </div>
  );
}
