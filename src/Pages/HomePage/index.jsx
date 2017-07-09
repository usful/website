import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import TagLine from '../../Components/TagLine';
import SectionMenu from '../../Components/SectionMenu';
import MainMenu from '../../Components/MainMenu';
import ProjectSlider from './ProjectSlider';

export default class HomePage extends PageBase {
  static defaultProps = {
    ...PageBase.defaultProps,
    sections: []
  };

  constructor(props) {
    super(props);
  }

  sectionMouseOver(section) {
    console.log('over', section);
  }

  sectionMouseLeave(section) {
    console.log('out', section);
  }

  sectionMenuMouseLeave() {
    console.log('menu-out');
  }

  render() {
    return (
      <div
        className={cx(styles.homePage, {
          [styles.hiding]: this.state.hiding,
          [styles.hidden]: this.state.hidden
        })}
        style={this.transitionStyle}
      >
        <div className={styles.container}>
          <section className={styles.top}>
            <Logo className={styles.logo} />
            <TagLine className={styles.tagLine} />
          </section>
          <section className={styles.slider}>
            <ProjectSlider sections={this.props.sections} />
          </section>
          <SectionMenu
            className={styles.sectionMenu}
            items={this.props.sections}
            onSectionOver={section => this.sectionMouseOver(section)}
            onSectionLeave={section => this.sectionMouseLeave(section)}
            onMouseLeave={() => this.sectionMenuMouseLeave()}
          />
          <MainMenu className={styles.mainMenu} items={this.props.menu} />
          <section className={styles.social}>
            <a href="http://www.twitter.com" className="ion-social-twitter" />
            <a
              href="http://www.instagram.com"
              className="ion-social-instagram-outline"
            />
            <a href="http://www.facebook.com" className="ion-social-facebook" />
          </section>
        </div>
      </div>
    );
  }
}
