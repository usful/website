import React from 'react';
import styles from './styles.scss';

import Logo from '../../Components/Logo';
import TagLine from '../../Components/TagLine';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.top}>
        <Logo/>
        <TagLine/>
      </section>
    </div>
  );
}
