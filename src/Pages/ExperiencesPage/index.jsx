import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import NavigationHelper from '../../NavigationHelper';
import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import MainMenu from './MainMenu';
import ExperienceLink from './ExperienceLink/index';
import ExperienceHero from './ExperienceHero/index';
import ExperienceProject from './ExperienceProject/index';

const MODIFIER = 0.8;

export default class ExperiencesPage extends PageBase {
  static numberOfStates = 3;
  static timing = utils.timing * MODIFIER;

  static defaultProps = {
    ...PageBase.defaultProps,
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
    const {
      showing,
      show1,
      show2,
      show3,
      hide1,
      hiding,
      hidden,
      hovering
    } = this.state;

    const { section, menu } = this.props;

    const selected = section.projects.find(experience => experience._active);
    const hideElement = hovering || selected ? styles.hoverHide : '';

    return (
      <div
        className={cx(styles.experiencesPage, {
          [styles.showing]: showing,
          [styles.show1]: show1,
          [styles.show2]: show2,
          [styles.show3]: show3,
          [styles.hide1]: hide1,
          [styles.hiding]: hiding,
          [styles.hidden]: hidden
        })}
      >
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
            <h1>Millennials like Experiences</h1>
            <hr />
            <p>
              Next level echo park stumptown roof party, art party tbh live-edge
              fingerstache celiac heirloom hella. Sartorial pabst elit, heirloom
              minim ethical copper mug cold-pressed four loko. Cornhole
              readymade yuccie paleo wayfarers labore exercitation occaecat et.
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
      </div>
    );
  }
}
