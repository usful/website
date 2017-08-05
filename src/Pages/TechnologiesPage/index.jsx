import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import DotsIcon from '../../Components/Icons/Dots';

import TechnologyCard from './TechnologyCard';

export default class TechnologiesPage extends Showable {
  static showStates = 3;

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { hovering, show3 } = this.state;
    const { section, menu } = this.props;

    return (
      <div className={cx(styles.technologyPage, this.showableClasses(styles))}>
        <section className={styles.intro}>
          <DotsIcon className={styles.dots} />
          <section className={cx(styles.top)}>
            <Link className={styles.logoLink} to="/">
              <Logo className={styles.logo} />
            </Link>
            <MainMenu color="black" items={menu} />
          </section>
          <div className={styles.copy}>
            <h1>Building curated, digital products for the future.</h1>
          </div>
        </section>

        <section className={styles.projects}>
          {section.projects.map((project, i) =>
            <TechnologyCard key={project.id} project={project} />
          )}
        </section>
        <Footer className={styles.footer} />
      </div>
    );
  }
}
