import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import Showable from '../../Components/Showable';
import Logo from '../../Components/Logo';
import MainMenu from '../../Components/MainMenu';
import Project from '../../Components/Project';
import Footer from '../../Components/Footer';

import ExperienceLink from './ExperienceLink';
import ExperienceHero from './ExperienceHero';

//        //mouse scroll down by Nikita Tcherednikov from the Noun Project

export default class ExperiencesPage extends Showable {
  static enter = [
    125, //show1 -> 2
    2000, //show2 -> 3
    125 //show3 -> 4
  ];

  static exit = [
    600, //show4 -> show3
    125, //show3 -> show2
    300 // show2 -> show1
  ];

  static defaultProps = {
    ...Showable.defaultProps,
    menu: [],
    section: {
      projects: []
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hovering: null,
      selected: null
    };
  }

  experienceMouseOver(experience) {
    this.setState({ hovering: experience.id });
  }

  experienceMouseLeave(experience) {
    if (this.state.hovering === experience.id) {
      this.setState({ hovering: null });
    }
  }

  render() {
    const { hovering, show3, hideVideo } = this.state;
    const { section, menu } = this.props;

    const selected = section.projects.find(
      experience => experience._active || experience._showing
    );
    const hideElement = hovering || selected ? styles.hoverHide : '';

    return (
      <div className={cx(styles.experiencesPage, this.showableClasses(styles))}>
        <div className={styles.container}>
          <video muted autoPlay loop className={styles.introVideo}>
            <source src="https://www.anonymous.paris/assets/videos/intro/video-intro.mp4" />
          </video>
          {section.projects.map(experience =>
            <ExperienceHero
              key={experience.id}
              hovering={
                (hovering === experience.id || selected === experience) && show3
              }
              experience={experience}
            />
          )}

          <section className={cx(styles.top, hideElement)}>
            <Link className={styles.logoLink} to="/">
              <Logo className={styles.logo} />
            </Link>
            <MainMenu items={menu} />
          </section>

          <section className={cx(styles.intro, hideElement)}>
            <h1>
              Experiences with purpose. <br /> From conceivers, creators, and
              builders.
            </h1>
            <hr />
            <p>
              We shake up the stale concept of traditional outreach with unique,
              interactive installations designed to inspire both conversations
              and shifts in thinking. Today, it’s all about the experience – the
              more unique the better. Our installations transform ordinary and
              unused spaces to offer a deep, meaningful experience associated
              with a brand or product – and one people won’t forget.
            </p>
          </section>

          <section className={styles.experiences}>
            {section.projects.map((experience, i) =>
              <ExperienceLink
                key={experience.id}
                experience={experience}
                hovering={!!hovering || selected}
                active={hovering === experience.id}
                onClick={experience => (this.selected = experience)}
                onMouseOver={experience => this.experienceMouseOver(experience)}
                onMouseLeave={experience =>
                  this.experienceMouseLeave(experience)}
              />
            )}
          </section>
        </div>

        {section.projects.map((project, i) =>
          <Project
            ref={el => (project._component = el || project._component)}
            key={project.id}
            project={project}
            selected={project._active}
            position={i + 1}
            count={section.projects.length}
            next={section.projects[utils.arrayClamp(i + 1, section.projects)]}
          />
        )}

        <Footer />
      </div>
    );
  }
}
