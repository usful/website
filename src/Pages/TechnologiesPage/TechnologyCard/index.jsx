import React from 'react';

export default function TechnologyCard({ project = {} }) {
  return (
    <h1>
      {project.name}
    </h1>
  );
}
