import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';
import data from '../../data';

import Showable from '../../Components/Showable';
import LoadableImage from '../../Components/LoadableImage';
import FooterTagLine from '../../Components/FooterTagLine';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import Project from '../../Components/Project';
import ProjectHero from '../../Components/ProjectHero';
import Dots from './Dots';

import TechnologyCard from './TechnologyCard';
const menu = [
  {
    href: '/experiences',
    name: 'XM'
  },
  {
    href: '/market',
    name: 'Market'
  }
].concat(data.menu.map(item => ({ href: item.hash, name: item.name })));

const section = data.sections.find(section => section.name === 'Technology');

export default class TechnologiesPage extends Showable {
  static enter = [125, 600, 600, 200];
  static exit = [600, 300, 125, 300];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx(styles.technologyPage, this.showableClasses(styles))}>
        {this.shouldRender
          ? <div>
              <section className={styles.intro}>
                {utils.isMobile
                  ? null
                  : <Dots className={styles.dots} animate={false} />}
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
                  <LoadableImage
                    className={styles.leftHand}
                    src="/img/left-hand.png"
                  />
                  <LoadableImage
                    className={styles.rightHand}
                    src="/img/right-hand.png"
                  />
                </div>
              </section>

              <section className={styles.blurb}>
                <hr />
                <h1>End-to-end - product design & development.</h1>
                <p>
                  We are an end-to-end design & development product team that
                  creates captivating technology products and introduces them to
                  the world. From conceptualization and strategy, to research
                  and development, to build and execution, Usful technologies
                  are created by our team with purpose and designed to disrupt.
                </p>
                <hr />
              </section>

              <section className={styles.projects}>
                {section.projects.map((project, i) =>
                  <TechnologyCard key={project.id} project={project} />
                )}
              </section>

              <FooterTagLine text="Want to collaborate on a project?" />
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
                  route={project.route}
                  selected={project._active}
                  position={i + 1}
                  count={section.projects.length}
                  next={
                    section.projects[utils.arrayClamp(i + 1, section.projects)]
                  }
                />
              ])}
            </div>
          : null}
      </div>
    );
  }
}
