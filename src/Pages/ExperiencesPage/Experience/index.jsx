import React from 'react';

import styles from './styles.scss';

export default function Experience({ experience }) {
  return (
    <div className={styles.experience}>
      <h1>{experience.name}</h1>
      {experience.tags.map(tag => <h2 key={tag}>{tag}</h2>)}
    </div>
  )
}