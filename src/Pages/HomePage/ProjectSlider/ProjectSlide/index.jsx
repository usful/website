import React from 'react';
import styles from './styles.scss';

export default function ProjectSlide({ project }) {
  const style = {
    backgroundImage: `url(${project.hero})`
  };

  return (
    <div className={styles.projectSlide} style={style}>
      <section className={styles.info}>
        <h1>{project.name}</h1>
      </section>
    </div>
  );
}
