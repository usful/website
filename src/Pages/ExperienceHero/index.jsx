import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function ExperienceHero({ experience, hovering }) {
  const style = { backgroundImage: `url(${experience.hero})` };
  const onCanPlayThrough = e => {
    console.log('onCanPlayThrough', e);
  };

  return (
    <div
      className={cx(styles.experienceHero, {
        [styles.hovering]: hovering
      })}
      style={style}
    >
      {experience.heroVideo
        ? <video muted autoPlay loop onCanPlayThrough={onCanPlayThrough}>
            <source src={experience.heroVideo} />
          </video>
        : null}
    </div>
  );
}
