import React from 'react';
import cx from 'classnames';

import utils from '../../utils';
import styles from './styles.scss';
import LoadableVideo from '../LoadableVideo';

export default function ProjectHero({ project = {}, visible = false}) {
  
  const style = !project.heroVideo || utils.isMobile
    ? { backgroundImage: `url(${project.hero})` }
    : null;

  return (
    <div
      className={cx(styles.projectHero, {
        [styles.visible]: visible
      })}
      style={style}
    >
      {project.heroVideo && !utils.isMobile
        ? <LoadableVideo muted loop src={project.heroVideo} play={visible} />
        : null}
    </div>
  );
}
