import React, { PureComponent } from 'react';

import styles from './App.scss';
import Router from '../Router';
import AppState from '../data';

import ExperiencesPage from '../Pages/ExperiencesPage';
import { About, Contact } from '../Modals';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      child: () => (
        <div>
          <h1>Loading</h1>
        </div>
      ),
      app: AppState.toJSON()
    };
  }

  componentWillMount() {
    this.listener = AppState.addListener('change', () =>
      this.setState({ app: AppState.toJSON() })
    );

    Router.listen(child => this.setState({ child }));
    Router.renderCurrentRoute();
  }

  componentWillUnmount() {
    this.listener.remove();
  }

  componentDidCatch(err) {
    window.lastError = err;
    Router.push('/error');
  }

  render() {
    const { app } = this.state;

    const selected = app.project
      ? app.projects.find(p => p.id === app.project)
      : null;

    const isAboutVisible = app.route && app.route.hash === '#about';
    const isContactVisible = app.route && app.route.hash === '#contact';

    return (
      <div
        className={styles.siteContainer}
        onClick={e => Router.interceptAnchors(e)}
      >
        <ExperiencesPage
          active
          visible
          projects={app.projects}
          project={selected}
          menu={app.menu}
        />
        <About visible={isAboutVisible} />
        <Contact visible={isContactVisible} />
      </div>
    );
  }
}
