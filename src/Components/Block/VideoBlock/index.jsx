import React from 'react';
import styles from './style.scss';

export default function VideoBlock({ url, text, align }) {
  return (
    <div className={styles.videoBlock}>
      <video src={url}/>
      <p>{text}</p>
      <h2>{align}</h2>
    </div>
  )
}