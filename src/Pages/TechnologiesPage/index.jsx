import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import Project from '../../Components/Project';
import ProjectHero from '../../Components/ProjectHero';
import Dots from './Dots';

import TechnologyCard from './TechnologyCard';

export default class TechnologiesPage extends Showable {
  static enter = [
    125,
    125,
    1000,
    200
  ];

  static exit = [
    600,
    125,
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
    const { show2, shown } = this.state;
    const { section, menu } = this.props;

    return (
      <div className={cx(styles.technologyPage, this.showableClasses(styles))}>
        <section className={styles.intro}>
          <Dots className={styles.dots} animate={shown || show2} />
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
            <img className={styles.leftHand} src="/img/left-hand.png"/>
            <img className={styles.rightHand} src="/img/right-hand.png"/>
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
            <h1>Want to collaborate on a project?</h1>
            <hr/>
          </div>
          <div>
            <Link to="#contact" className={styles.button}>
              Contact Us
            </Link>
          </div>
        </section>

        <Footer className={styles.footer} />

        
        {section.projects.map((project, i) => [
          <ProjectHero
            key={'hero' + project.id}
            visible={project._active || project._showing}
            project={project}
          />,
          <Project
            ref={el => (project._component = el || project._component)}
            baseUrl="/technology"
            key={'project' + project.id}
            project={project}
            selected={project._active}
            position={i + 1}
            count={section.projects.length}
            next={section.projects[utils.arrayClamp(i + 1, section.projects)]}
          />
          ]
        )}
      </div>
    );
  }
}
