import React, { Component } from 'react';

import styles from './styles.scss';
import data from '../data';
import utils from '../utils';
import NavigationHelper from '../NavigationHelper';

import {
  HomePage,
  ExperiencesPage,
  TechnologiesPage,
  LoadingPage
} from '../Pages';

const FAKE_PROGRESS = 10;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingProgress: 0,
      loaded: false
    };
  }

  async updateLoadingProgress() {
    if (this.state.loadingProgress >= 100) {
      this.setState({
        loaded: true
      });

      return;
    }

    //TODO: this is fake loading progress, we will make it real later.
    this.setState({
      loadingProgress: this.state.loadingProgress + FAKE_PROGRESS
    });

    await utils.pause();

    this.updateLoadingProgress();
  }

  async onLoadHide() {
    if (!this.unlisten) {
      //Hook up a listener to the router history.
      this.unlisten = window.router.history.listen(location =>
        NavigationHelper.matchRoute(location.pathname) && this.setState({_ts: Date.now()})
      );
    }

    NavigationHelper.showNextPage();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.updateLoadingProgress();

    //On the first load, show the page matched up by the router.
    NavigationHelper.matchRoute(window.location.pathname);
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const home = NavigationHelper.pages.find(page => page.name === 'home');
    const experiences = NavigationHelper.pages.find(
      page => page.name === 'experiences'
    );
    const technology = NavigationHelper.pages.find(
      page => page.name === 'technology'
    );

    return (
      <div className={styles.siteContainer}>
        <HomePage
          ref={el => (home.component = el || home.component)}
          sections={data.sections}
          menu={data.menu}
          onHidden={() => NavigationHelper.showNextPage()}
        />
        <ExperiencesPage
          menu={data.menu}
          section={experiences.section}
          ref={el => (experiences.component = el || experiences.component)}
          onHidden={() => NavigationHelper.showNextPage()}
        />
        <TechnologiesPage
          section={technology.section}
          ref={el => (technology.component = el || technology.component)}
          onHidden={() => NavigationHelper.showNextPage()}
        />
        <LoadingPage
          visible={!this.state.loaded}
          progress={this.state.loadingProgress}
          onHide={() => this.onLoadHide()}
        />
      </div>
    );
  }
}
