import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import LoadableVideo from '../../Components/LoadableVideo';

export default function ExperienceHero({ experience, hovering }) {
  const style = { backgroundImage: `url(${experience.hero})` };

  return (
    <div
      className={cx(styles.experienceHero, {
        [styles.hovering]: hovering
      })}
      style={style}
    >
      {experience.heroVideo
        ? <LoadableVideo muted autoPlay loop src={experience.heroVideo} />
        : null}
    </div>
  );
}
