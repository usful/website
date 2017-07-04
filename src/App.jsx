import React, { Component } from 'react';

import data from './data';
import HomePage from './Pages/HomePage';
import LoadingPage from './Pages/LoadingPage';

const FAKE_PROGRESS = 10;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingProgress: 0
    };
  }

  updateLoadingProgress() {
    if (this.state.loadingProgress >= 100) {
      return;
    }

    //TODO: this is fake loading progress, we will make it real later.
    this.setState(
      { loadingProgress: this.state.loadingProgress + FAKE_PROGRESS },
      () => setTimeout(() => this.updateLoadingProgress(), 100)
    );
  }

  loadingReady() {
    this.refs.homePage.show();
  }

  componentDidMount() {
    this.updateLoadingProgress();
  }

  render() {
    return (
      <div>
        <HomePage ref="homePage" sections={data.sections} menu={data.menu} />
        <LoadingPage
          progress={this.state.loadingProgress}
          onHide={() => this.loadingReady()}
        />
      </div>
    );
  }
}
