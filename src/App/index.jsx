import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import styles from './styles.scss';
import data from '../data';
import HomePage from '../Pages/HomePage/index';
import ExperiencesPage from '../Pages/ExperiencesPage/index';
import LoadingPage from '../Pages/LoadingPage/index';

const FAKE_PROGRESS = 10;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingProgress: 0,
      loaded: false
    };
  }

  updateLoadingProgress() {
    if (this.state.loadingProgress >= 100) {
      this.setState({
        loaded: true
      });
      return;
    }

    //TODO: this is fake loading progress, we will make it real later.
    this.setState(
      { loadingProgress: this.state.loadingProgress + FAKE_PROGRESS },
      () => setTimeout(() => this.updateLoadingProgress(), 100)
    );
  }

  componentDidMount() {
    this.updateLoadingProgress();
  }

  render() {
    return (
      <div className={styles.siteContainer}>
        <Route
          exact
          path="/"
          children={({ match }) =>
            <HomePage
              visible={match && this.state.loaded}
              sections={data.sections}
              menu={data.menu}
            />}
        />
        <Route
          path="/experiences"
          children={({ match }) =>
            <ExperiencesPage visible={match && this.state.loaded} />}
        />
        <LoadingPage
          visible={!this.state.loaded}
          progress={this.state.loadingProgress}
        />
      </div>
    );
  }
}
