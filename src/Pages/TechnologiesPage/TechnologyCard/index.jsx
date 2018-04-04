import React from 'react';

import styles from './styles.scss';
import Video from '../../../Components/Video';

export default function TechnologyCard({ project = {} }) {
  const style = { backgroundImage: `url(${project.hero})` };

  return (
    <div className={styles.technologyCard} style={style}>
      {project.heroVideo
        ? <Video loop muted play={true} src={project.heroVideo} />
        : null}
      <a href={project.route.path}>
        <h1>
          {project.name}
        </h1>
        <p>
          {project.tagLine}
        </p>
      </a>
    </div>
  );
}
