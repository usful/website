import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export default function SectionHero({ section, hovering, selected }) {
  const style = {
    backgroundImage: `url(${section.hero})`
  };

  return (
    <div
      className={cx(styles.sectionHero, {
        [styles.hovering]: hovering,
        [styles.selected]: selected
      })}
      style={style}
    />
  );
}
