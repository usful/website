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
    
    this.state = {
      hidden: true,
      hiding: false
    };
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
    if (this.state.hidden) {
      return null;
    }

    return (
      <div
        className={cx(styles.homePage, { [styles.hiding]: this.state.hiding })}
        style={this.transitionStyle}
      >
        <div className={styles.container}>
          <section className={styles.top}>
            <Logo />
            <TagLine />
          </section>
          <ProjectSlider sections={this.props.sections} />
          <MainMenu items={this.props.menu} />
          <SectionMenu
            items={this.props.sections}
            onSectionOver={section => this.sectionMouseOver(section)}
            onSectionLeave={section => this.sectionMouseLeave(section)}
            onMouseLeave={() => this.sectionMenuMouseLeave()}
          />
        </div>
      </div>
    );
  }
}
