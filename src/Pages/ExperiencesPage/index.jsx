import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import utils from '../../utils';

import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import MainMenu from './MainMenu';
import Experience from './Experience/index';
import ExperienceHero from '../ExperienceHero/index';
import ExperienceProject from './ExperienceProject/index';

export default class ExperiencesPage extends PageBase {
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
      show1: false,
      show2: false,
      show3: false,
      hide1: false,
      hovering: null,
      selected: null
    };
  }

  async show1() {
    await utils.pause(1);

    this.setState({
      show1: true,
      hide1: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show2: true
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show3: true,
      showing: false
    });

    this.props.onShown();
  }

  async hide1() {
    await utils.pause(1);

    //Are we navigating to an experience page?
    if (window.router.history.location.pathname.includes('/experiences/')) {
      this.props.onHidden();
      return;
    }

    this.setState({
      hide1: true,
      show3: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show2: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show1: false
    });

    await utils.pause(utils.timing * 0.75);

    this.props.onHidden();

    this.setState({
      hidden: true,
      hiding: false
    });
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
      hovering,
      selected
    } = this.state;

    const { section, menu } = this.props;

    const hideElement = hovering ? styles.hoverHide : '';

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
              hovering={hovering === experience.id}
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
            <h1>Experiences</h1>
            <hr />
            <p>
              Next level echo park stumptown roof party, art party tbh live-edge
              fingerstache celiac heirloom hella. Sartorial pabst elit, heirloom
              minim ethical copper mug cold-pressed four loko. Cornhole
              readymade yuccie paleo wayfarers labore exercitation occaecat et.{' '}
            </p>
          </section>

          <section className={styles.experiences}>
            {section.projects.map((experience, i) =>
              <Experience
                key={experience.id}
                experience={experience}
                hovering={!!hovering}
                active={hovering === experience.id}
                count={section.projects.length}
                onMouseOver={experience => this.experienceMouseOver(experience)}
                onMouseLeave={experience =>
                  this.experienceMouseLeave(experience)}
                position={i}
              />
            )}
          </section>
        </div>

        {section.projects.map((experience, i) =>
          <ExperienceProject
            key={experience.id}
            experience={experience}
            position={i+1}
            count={section.projects.length}
          />
        )}
      </div>
    );
  }
}
