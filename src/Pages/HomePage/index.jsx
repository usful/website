import React, { Component } from 'react';
import styles from './styles.scss';

import Logo from '../../Components/Logo';
import TagLine from '../../Components/TagLine';
import SectionMenu from '../../Components/SectionMenu';
import MainMenu from '../../Components/MainMenu';
import ProjectSlider from './ProjectSlider';

export default class HomePage extends Component {
  static defaultProps = {
    sections: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.homePage}>
        <div className={styles.container}>
          <section className={styles.top}>
            <Logo />
            <TagLine />
          </section>
          <ProjectSlider sections={this.props.sections} />
          <MainMenu items={this.props.menu}/>
          <SectionMenu items={this.props.sections}/>
        </div>
      </div>
    );
  }
}
