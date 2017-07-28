import React, { Component } from 'react';

import styles from './styles.scss';
import NavigationHelper from '../NavigationHelper';
import LoadHelper from '../LoadHelper';

import {
  HomePage,
  ExperiencesPage,
  TechnologiesPage,
  LoadingPage
} from '../Pages';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  async onLoadHide() {
    NavigationHelper.setup();
    NavigationHelper.routeChanged(window.router.history.location);
  }

  componentDidMount() {
    NavigationHelper.addListener(() => this.setState({_ts: Date.now()}));
    LoadHelper.addProgressListener(progress => this.setState({ progress }));
    LoadHelper.addLoadedListener(() => this.refs.loading.hide());
  }

  componentWillUnmount() {
    console.log('!!!!!!!!!! App Unmounted');
  }

  render() {
    const home = NavigationHelper.getSection('Home');
    const experiences = NavigationHelper.getSection('Experiences');
    const technology = NavigationHelper.getSection('Technology');

    return (
      <div className={styles.siteContainer}>
        <HomePage
          ref={el => (home._component = el || home._component)}
          sections={NavigationHelper.data.sections.filter(
            section => section.name !== 'Home'
          )}
          menu={NavigationHelper.data.menu}
        />
        <ExperiencesPage
          menu={NavigationHelper.data.menu}
          section={experiences}
          ref={el => (experiences._component = el || experiences._component)}
        />
        <TechnologiesPage
          section={technology}
          ref={el => (technology._component = el || technology._component)}
        />
        <LoadingPage
          ref="loading"
          progress={this.state.progress}
          onHidden={() => this.onLoadHide()}
        />
      </div>
    );
  }
}
