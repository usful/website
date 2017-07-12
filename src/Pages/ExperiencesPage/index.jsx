import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import MainMenu from './MainMenu';
import Experience from "./Experience/index";

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
  }

  render() {
    const projects = this.props.section.projects;

    return (
      <div
        className={cx(styles.experiencesPage, {
          [styles.hiding]: this.state.hiding,
          [styles.hidden]: this.state.hidden
        })}
        style={this.transitionStyle}
      >
        <section className={styles.top}>
          <Logo className={styles.logo} />
          <MainMenu items={this.props.menu} />
        </section>

        <section className={styles.experiences}>
          <h1>Experiences</h1>
          <hr />
          <p>
            Next level echo park stumptown roof party, art party tbh live-edge
            fingerstache celiac heirloom hella. Sartorial pabst elit, heirloom
            minim ethical copper mug cold-pressed four loko. Cornhole readymade
            yuccie paleo wayfarers labore exercitation occaecat et.{' '}
          </p>

          {projects.map(experience => <Experience key={experience.id} experience={experience} />)}
        </section>
      </div>
    );
  }
}
