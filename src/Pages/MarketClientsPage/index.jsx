import React from 'react';
import cx from 'classnames';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import styles from './styles.scss';
import data from '../../data';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import FooterTagLine from '../../Components/FooterTagLine';
import TopBar from '../../Components/TopBar';
import CarouselBlock from '../../Components/Block/CarouselBlock';

const PointlessWrapper = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    disableDefaultUi={true}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
);

const menu = [
  {
    href: '/market/partners',
    name: 'Partners'
  }
].concat(data.menu.map(item => ({ href: item.hash, name: item.name })));

const section = data.sections.find(
  section => section.name === 'Market Clients'
);

export default class MarketClientsPageF extends Showable {
  static enter = [300, 600];
  static exit = [600, 300];

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.shouldRender) {
      return null;
    }

    const carousel = section.content[0];

    return (
      <div className={cx(styles.marketStoryPage, this.showableClasses(styles))}>
        <section className={styles.intro}>
          <CarouselBlock
            {...carousel}
            useLoadable={true}
            className={styles.carousel}
            pagerClass={styles.pager}
          />

          <TopBar className={styles.top} path="/market" menu={menu} />
        </section>
        <section className={styles.main}>
          <h1>Engage your audience with a truly unique market experience.</h1>
          <p>
            Coming in all shapes and sizes, the Market is highly customizable to
            accommodate experiences at any location. Our conversation-starting
            markets offer a full turnkey experience, complete with stalls,
            decoration, staff, food, and fun activations.
          </p>
        </section>
        <section
          className={styles.main}
          style={{ backgroundImage: 'url(https://s3.amazonaws.com/usful-portfolio/img/background-shapes.jpg)' }}
        >
          <h1>The Markets are high impact with large turn-out and proven success.</h1>
          <p>
            A turnkey experience, we supply the team, branding, packaging, food,
            artisanal goods, and entertainment. From small and intimate to loud
            and entertainment-filled, we can curate and produce a wide range of
            unique, immersive, food-filled experiences.
          </p>

          <ul>
            <li>
              <h2>60+</h2>
              <label>Vendors</label>
            </li>
            <li>
              <h2>120,000+</h2>
              <label>Visitors</label>
            </li>
            <li>
              <h2>9</h2>
              <label>Locations</label>
            </li>
          </ul>
        </section>

        <section className={cx(styles.main, styles.quotes)}>
          <blockquote>
            <h2>
              The event went quite well… we sold out of our cakes by 1:30pm… and landed a catering gig, so great!
            </h2>
            <label>
              Cora James
            </label>
          </blockquote>
          <blockquote>
            <h2>
              We had so much fun with you… such a unique event, we loved being included!
            </h2>
            <label>
              Rodneys Oysters
            </label>
          </blockquote>
          <blockquote>
            <h2>
              One of the most engaging and unique food experiences in the city.
            </h2>
            <label>
              Brookfield Office Properties
            </label>
          </blockquote>
        </section>

        <section className={cx(styles.main, styles.dubsCheckum)}>
          <h1>Check out our markets.</h1>
          <ul>
            <div className={styles.location}>
              <h2>Bay Adelaide Center</h2>
              <p>
                Arnell Plaza,<br />
                333 Bay St, Toronto
              </p>
              <p>
                Thursdays 11am-2pm<br />
                June 15 - September 12
              </p>
              <PointlessWrapper
                containerElement={<div className={styles.map} />}
                mapElement={<div className={styles.map} />}
                name="Bay Adelaide Center"
                lat={43.6503406}
                lng={-79.3827094}
                disableDefaultUI={true}
              />
            </div>
            <div className={styles.location}>
              <h2>Usful Popup</h2>
              <p>
                890 Dundas St W,<br />
                Toronto
              </p>
              <p>
                Friday-Sunday noon-dusk<br />
                Coming Soon
              </p>
              <PointlessWrapper
                lat={43.6512425}
                lng={-79.4118604}
                name="Usful Popup"
                containerElement={<div className={styles.map} />}
                mapElement={<div className={styles.map} />}
              />
            </div>
            <div className={styles.location}>
              <h2>Brookfield Place</h2>
              <p>
                181 Bay St<br />
                Toronto
              </p>
              <p>
                Wednesdays 11am-2pm<br />
                June 15 - August 17
              </p>
              <PointlessWrapper
                containerElement={<div className={styles.map} />}
                lat={43.64672616}
                lng={-79.3785027}
                name="Brookfield Place"
                mapElement={<div className={styles.map} />}
                disableDefaultUI={true}
              />
            </div>
          </ul>
        </section>

        <FooterTagLine text="Interested in a market in your space?" />
        <Footer className={styles.footer} />
      </div>
    );
  }
}
