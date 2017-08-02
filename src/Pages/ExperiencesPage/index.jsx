import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import NavigationHelper from '../../NavigationHelper';
import Showable from '../../Components/Showable';
import Logo from '../../Components/Logo';
import MainMenu from './MainMenu';
import ExperienceLink from './ExperienceLink/index';
import ExperienceHero from './ExperienceHero/index';
import ExperienceProject from './ExperienceProject/index';

//        //mouse scroll down by Nikita Tcherednikov from the Noun Project

const MODIFIER = 0.8;

export default class ExperiencesPage extends Showable {
  static showStates = 3;
  static timing = utils.timing * MODIFIER;

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
    const { hovering } = this.state;

    const { section, menu } = this.props;

    const selected = section.projects.find(experience => experience._active);
    const hideElement = hovering || selected ? styles.hoverHide : '';

    return (
      <div className={cx(styles.experiencesPage, this.showableClasses(styles))}>
        <div className={styles.container}>
          {section.projects.map(experience =>
            <ExperienceHero
              key={experience.id}
              hovering={
                (hovering === experience.id || selected === experience) &&
                this.state.show3
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
                onMouseOver={experience => this.experienceMouseOver(experience)}
                onMouseLeave={experience =>
                  this.experienceMouseLeave(experience)}
              />
            )}
          </section>
        </div>

        {section.projects.map((project, i) =>
          <ExperienceProject
            ref={el => (project._component = el || project._component)}
            key={project.id}
            experience={project}
            selected={project._active}
            position={i + 1}
            count={section.projects.length}
            next={section.projects[utils.arrayClamp(i + 1, section.projects)]}
          />
        )}

        <section className={styles.contact}>
          <menu />
        </section>
      </div>
    );
  }
}
