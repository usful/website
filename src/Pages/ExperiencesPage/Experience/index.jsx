import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import Tag from '../Tag';

export default function Experience({
  experience = { name: '', tags: [] },
  count = 0,
  position = 0,
  onMouseOver = () => {},
  onMouseLeave = () => {},
  hovering = false,
  active = false
}) {
  let padding = `${60 - 40 / count * position}%`;

  const style = {
    paddingLeft: position % 2 ? 0 : padding,
    paddingRight: position % 2 ? padding : 0
  };

  return (
    <div
      className={cx(styles.experience, {
        [styles.hovering]: hovering,
        [styles.active]: active
      })}
      style={style}
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
