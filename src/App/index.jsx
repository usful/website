import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import styles from './styles.scss';
import data from '../data';
import utils from '../utils';

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

    this.page = {
      home: null,
      technologies: null,
      experiences: null
    };

    this.lastPage = null;
    this.currentPage = null;
    this.nextPage = null;

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
    await this.transitionPages();
    this.showNextPage();
  }

  componentDidMount() {
    this.updateLoadingProgress();
  }

  componentWillUpdate() {
    if (!this.unlisten) {
      this.unlisten = window.router.history.listen(location =>
        this.transitionPages()
      );
    }
  }

  componentWillUnmount() {
    this.unlisten();
  }

  showNextPage() {
    if (this.currentPage) {
      console.log('showNextPage', this.currentPage);
      this.currentPage.show();
    }
  }

  async transitionPages() {
    await utils.pause();

    if (this.currentPage) {
      console.log('transitionPages hiding', this.currentPage);
      this.currentPage.hide();
    }

    for (let name in this.page) {
      const page = this.page[name];

      if (page.props.active) {
        console.log('transitionPages setting next', page);
        this.lastPage = this.currentPage;
        this.currentPage = page;
      }
    }
  }

  render() {
    return (
      <div className={styles.siteContainer}>
        <Route
          exact
          path="/"
          children={({ match }) =>
            <HomePage
              active={!!match}
              ref={el => (this.page.home = el || this.page.home)}
              sections={data.sections}
              menu={data.menu}
              onHidden={() => this.showNextPage()}
            />}
        />
        <Route
          path="/experiences"
          children={({ match }) =>
            <ExperiencesPage
              active={!!match}
              ref={el => (this.page.experiences = el || this.page.experiences)}
              onHidden={() => this.showNextPage()}
            />}
        />
        <Route
          path="/technology"
          children={({ match }) =>
            <TechnologiesPage
              active={!!match}
              ref={el =>
                (this.page.technologies = el || this.page.technologies)}
              onHidden={() => this.showNextPage()}
            />}
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
