import React, { Component } from 'react';

import styles from './styles.scss';
import NavigationHelper from '../NavigationHelper';
import LoadHelper from '../LoadHelper';
import {
  HomePage,
  ExperiencesPage,
  TechnologiesPage,
  LoadingPage,
  MarketPage,
  MarketPartnersPage,
  MarketClientsPage,
  ChangeForADollarPage,
} from '../Pages';

import { About, Contact } from '../Modals';
import connect from '../models/connect';
import data from '../data';

const home = NavigationHelper.getSection('Home');
const experiences = NavigationHelper.getSection('Experiences');
const technology = NavigationHelper.getSection('Technology');
const market = NavigationHelper.getSection('Market');
const marketPartners = NavigationHelper.getSection('Market Partners');
const marketClients = NavigationHelper.getSection('Market Clients');
const cfd = NavigationHelper.getSection('Change For A Dollar');

const about = NavigationHelper.getMenu('About');
const contact = NavigationHelper.getMenu('Contact');
const setComponent = section => el =>
  (section.component = el || section.component);

export default connect({ data }, class App extends Component {
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
    LoadHelper.addProgressListener(progress => this.setState({ progress }));
    LoadHelper.addLoadedListener(() => this.refs.loading.hide());
  }

  render() {
    return (
      <div className={styles.siteContainer}>
        <HomePage ref={setComponent(home)} route={home.route} />
        <ExperiencesPage
          ref={setComponent(experiences)}
          route={experiences.route}
        />
        <TechnologiesPage
          ref={setComponent(technology)}
          route={technology.route}
        />
        <MarketPage ref={setComponent(market)} route={market.route} />
        <MarketPartnersPage
          ref={setComponent(marketPartners)}
          route={marketPartners.route}
        />
        <MarketClientsPage
          ref={setComponent(marketClients)}
          route={marketClients.route}
        />
        <ChangeForADollarPage
          ref={setComponent(cfd)}
          route={cfd.route}
        />
        <About ref={setComponent(about)} />
        <Contact ref={setComponent(contact)} />
        <LoadingPage
          ref="loading"
          progress={this.state.progress}
          onHidden={() => this.onLoadHide()}
        />
      </div>
    );
  }
});
