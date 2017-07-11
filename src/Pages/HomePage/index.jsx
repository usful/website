import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';

import PageBase from '../PageBase';
import Logo from '../../Components/Logo';
import TagLine from '../../Components/TagLine';
import SectionMenu from '../../Components/SectionMenu';
import MainMenu from '../../Components/MainMenu';
import ProjectSlider from './ProjectSlider';
import SectionHero from './SectionHero';

export default class HomePage extends PageBase {
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

  async show1() {
    await utils.pause(1);

    this.setState({
      show1: true
    });

    await utils.pause(utils.timing);

    this.setState({ show2: true, showing: false });

    await utils.pause(utils.timing);

    this.props.onShown();
  }

  async hide1() {
    await utils.pause(1);

    this.setState({
      show2: false
    });

    await utils.pause(utils.timing);

    this.setState({
      show1: false
    });

    this.props.onHidden();

    await utils.pause(utils.timing);

    this.setState({
      hidden: true,
      hiding: false
    });
  }

  sectionMouseOver(section) {
    this.setState({ hovering: section.id });
  }

  sectionMouseLeave(section) {
    if (this.state.hovering === section.id) {
      this.setState({ hovering: null });
    }
  }

  sectionMenuMouseLeave() {
    //console.log('menu-out');
  }

  render() {
    const { menu, sections } = this.props;
    const { showing, show1, show2, hiding, hidden } = this.state;

    return (
      <div
        className={cx(styles.homePage, {
          [styles.showing]: showing,
          [styles.show1]: show1,
          [styles.show2]: show2,
          [styles.hiding]: hiding,
          [styles.hidden]: hidden
        })}
        style={this.transitionStyle}
      >
        <div className={styles.container}>
          <section className={styles.top}>
            <Logo className={styles.logo} />
            <TagLine className={styles.tagLine} />
          </section>
          <section className={styles.slider}>
            <ProjectSlider sections={sections} />
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
            onSectionOver={section => this.sectionMouseOver(section)}
            onSectionLeave={section => this.sectionMouseLeave(section)}
            onMouseLeave={() => this.sectionMenuMouseLeave()}
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
