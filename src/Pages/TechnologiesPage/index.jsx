import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';
import data from '../../data';

import Showable from '../../Components/Showable';
import LoadableImage from '../../Components/LoadableImage';
import FooterTagLine from '../../Components/FooterTagLine';
import Footer from '../../Components/Footer';
import TopBar from '../../Components/TopBar';
import Project from '../../Components/Project';
import ProjectHero from '../../Components/ProjectHero';
import Dots from './Dots';

import TechnologyCard from './TechnologyCard';
const menu = [
  {
    href: '/experiences',
    name: 'Experiences'
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
                  <TopBar className={styles.top} menu={menu} color="black" />
                  <div className={styles.copy}>
                    <h1>Technology products with purpose.</h1>
                  </div>
                  <LoadableImage
                    className={styles.leftHand}
                    src="https://s3.amazonaws.com/usful-portfolio/img/left-hand.png"
                  />
                  <LoadableImage
                    className={styles.rightHand}
                    src="https://s3.amazonaws.com/usful-portfolio/img/right-hand.png"
                  />
                </div>
              </section>

              <section className={styles.blurb}>
                <hr />
                <h1>
                  End-to-end product <br /> Design &amp; Development.
                </h1>
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
                  visible={project.active || project.showing}
                  project={project}
                />,
                <Project
                  ref={el => (project.component = el || project.component)}
                  baseUrl="/technology"
                  key={'project' + project.id}
                  project={project}
                  route={project.route}
                  selected={project.active}
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
