import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import Tag from '../../../Components/Tag';

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
      onMouseOver={() => onMouseOver(experience)}
      onMouseLeave={() => onMouseLeave(experience)}
    >
      <Link
        to={experience.route.path}
        onClick={() => onClick(experience)}
      >
        <h1>
          {experience.name}
        </h1>
      </Link>
      <section className={styles.tags}>
        {experience.tags.map(tag =>
          <Tag tag={tag} key={tag} color={hovering ? 'white' : 'green'} />
        )}
      </section>
    </div>
  );
}
