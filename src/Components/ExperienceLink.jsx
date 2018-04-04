import React from 'react';
import cx from 'classnames';

import styles from './ExperienceLink.scss';
import Tag from './Tag';

export default function ExperienceLink({
  experience = { name: '', tags: [] },
  onMouseOver = experience => {},
  onMouseLeave = experience => {},
  onClick = experience => {},
  hovering = false,
  active = false
}) {
  return (
    <div
      className={cx(styles.experience, {
        [styles.hovering]: hovering,
        [styles.active]: active
      })}
    >
      <section className={styles.link}>
        <a
          href={experience.route.path}
          onClick={() => onClick(experience)}
          onMouseOver={() => onMouseOver(experience)}
          onMouseLeave={() => onMouseLeave(experience)}
        >
          {experience.name}
        </a>
      </section>
      <section className={styles.tags}>
        {experience.tags.map(tag =>
          <Tag tag={tag} key={tag} color={hovering ? 'white' : 'green'} />
        )}
      </section>
    </div>
  );
}
