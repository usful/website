import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import Dots from './Dots';

import TechnologyCard from './TechnologyCard';

export default class TechnologiesPage extends Showable {
  static enter = [
    125,
    1000,
    200
  ];

  static exit = [
    600,
    125,
    300
  ];

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { hovering, show3, shown } = this.state;
    const { section, menu } = this.props;

    return (
      <div className={cx(styles.technologyPage, this.showableClasses(styles))}>
        <section className={styles.intro}>
          <Dots className={styles.dots} animate={shown} />
          <div className={styles.inner}>
            <section className={styles.top}>
              <Link className={styles.logoLink} to="/">
                <Logo className={styles.logo} />
              </Link>
              <MainMenu color="black" items={menu} />
            </section>
            <div className={styles.copy}>
              <h1>Building curated, digital products for the future.</h1>
            </div>
          </div>
        </section>

        <section className={styles.blurb}>
          <hr />
          <h1>Building the Future</h1>
          <p>
            This will be a rough blurb about Usful Technology and how we build
            powerful products that improve peoples lives.
          </p>
          <hr/>
        </section>

        <section className={styles.projects}>
          {section.projects.map((project, i) =>
            <TechnologyCard key={project.id} project={project} />
          )}
        </section>

        <section className={styles.contact}>
          <div className={styles.tagLine}>
            <hr/>
            <h1>Want to collaborate?</h1>
            <hr/>
          </div>
          <div>
            <Link to="#contact" className={styles.button}>
              Contact Us
            </Link>
          </div>
        </section>

        <Footer className={styles.footer} />
      </div>
    );
  }
}
