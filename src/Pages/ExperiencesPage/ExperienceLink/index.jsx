import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import Tag from '../Tag';

export default function ExperienceLink({
  experience = { name: '', tags: [] },
  onMouseOver = () => {},
  onMouseLeave = () => {},
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
      <Link to={`/experiences/${experience.slug}`}>
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
