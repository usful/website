import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

export default function ExperienceProject({
  selected,
  experience,
  count,
  position
}) {
  return (
    <div
      className={cx(styles.experienceProject, { [styles.selected]: selected })}
    >
      <section className={styles.content}>
        <h1>Content</h1>
      </section>
      <section className={styles.description}>
        <h1>
          {experience.name}
        </h1>
        <p>
          {experience.description}
        </p>
      </section>
      <section className={styles.nav}>
        <h1>Navbar</h1>
        <h2>
          {position} / {count}
        </h2>
      </section>
    </div>
  );
}
