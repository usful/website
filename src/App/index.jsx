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

const FAKE_PROGRESS = 50;

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
      loaded: false,
      section: 'home'
    };
  }

  async updateLoadingProgress() {
    console.log('updateLoadingProgress');
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
    console.log('onLoadHide');

    if (!this.unlisten) {
      console.log('onLoadHide hooking up listener');
      //Hook up a listener to the router history.
      //Since we have custom page transitions, we will show/hide
      //using some custom code.
      this.unlisten = window.router.history.listen(location => {
        data.sections.forEach(
          section =>
            (section.active = window.router.history.location.pathname.includes(
              section.slug
            ))
        );

        //trigger a render
        this.setState({
          _ts: Date.now()
        }, () => this.transitionPages());
      });
    }

    //On the first load, show the next page picked up by the router.
    await this.transitionPages();
    this.showNextPage();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.updateLoadingProgress();
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  showNextPage() {
    if (this.currentPage) {
      console.log('showNextPage showing', this.currentPage);
      this.currentPage.show();
    }
  }

  async transitionPages() {
    console.log('transitionPages');
    //Wait for changes to propagate thru react state.
    await utils.pause();

    if (this.currentPage) {
      console.log('transitionPages hiding', this.currentPage);
      this.currentPage.hide();
    }

    for (let name in this.page) {
      const page = this.page[name];

      //Check to see which page is now active.
      if (page.props.active) {
        // TODO: apparently we don't use lastPage. Remove it?
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
              activeSection={this.state.section}
              onHidden={() => this.showNextPage()}
            />}
        />
        <Route
          path="/experiences"
          children={({ match }) =>
            <ExperiencesPage
              menu={data.menu}
              section={data.sections.find(section => section.slug === 'experiences')}
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
              section={data.sections.find(section => section.slug === 'technology')}
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
