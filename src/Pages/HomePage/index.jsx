import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';

import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import TagLine from '../../Components/TagLine';
import SectionMenu from '../../Components/SectionMenu';
import MainMenu from './MainMenu';
import ProjectSlider from './ProjectSlider';
import SectionHero from './SectionHero';

export default class HomePage extends PageBase {
  static numberOfStates = 2;
  
  static defaultProps = {
    ...PageBase.defaultProps,
    sections: [],
    menu: []
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hovering: null,
      selected: null
    };
  }
  
  sectionMouseOver(section) {
    this.setState({ hovering: section.id });
  }

  sectionMouseLeave(section) {
    if (this.state.hovering === section.id) {
      this.setState({ hovering: null });
    }
  }

  render() {
    const { menu, sections } = this.props;
    const { showing, show1, show2, hide1, hide2, hiding, hidden } = this.state;

    return (
      <div
        className={cx(styles.homePage, {
          [styles.showing]: showing,
          [styles.show1]: show1,
          [styles.show2]: show2,
          [styles.hiding]: hiding,
          [styles.hidden]: hidden
        })}
      >
        <div className={styles.container}>
          <section className={styles.top}>
            <Logo className={styles.logo} />
            <TagLine className={styles.tagLine} />
          </section>
          <section className={styles.slider}>
            <ProjectSlider showInfo={show2} sections={sections} />
            {sections.map(section =>
              <SectionHero
                key={section.id}
                section={section}
                hovering={this.state.hovering === section.id}
              />
            )}
          </section>
          <SectionMenu
            className={styles.sectionMenu}
            items={sections}
            visible={!hide2}
            onSectionOver={section => this.sectionMouseOver(section)}
            onSectionLeave={section => this.sectionMouseLeave(section)}
          />
          <MainMenu className={styles.mainMenu} items={menu} />
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
