import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

export default function TechnologyCard({ project = {} }) {
  const style = { backgroundImage: `url(${project.hero})` };

  return (
    <div className={styles.technologyCard} style={style}>
      <Link to={`/technology/${project.slug}`}>
        <h1>
          {project.name}
        </h1>
        <p>
          {project.tagLine}
        </p>
      </Link>
    </div>
  );
}
