import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import styles from './styles.scss';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import FooterTagLine from '../../Components/FooterTagLine';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import CarouselBlock from '../../Components/Block/CarouselBlock';

const PointlessWrapper = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -25, lng: 131 }}
    disableDefaultUI={true}
  />
);

export default class MarketStoryPage extends Showable {
  static enter = [300, 600];
  static exit = [600, 300];

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { section, menu } = this.props;
    const carousel = section.content[0];

    return (
      <div className={cx(styles.marketStoryPage, this.showableClasses(styles))}>
        <section className={styles.intro}>
          <CarouselBlock
            {...carousel}
            className={styles.carousel}
            pagerClass={styles.pager}
          />

          <section className={styles.top}>
            <Link className={styles.logoLink} to="/market">
              <Logo className={styles.logo} />
            </Link>
            <MainMenu color="white" items={menu} />
          </section>
        </section>
        <section className={styles.main}>
          <h1>Engage people with a unique food experience.</h1>
          <p>
            Something about the main proposition of Usful and with it would
            contribute to the success of businesses.
          </p>
        </section>
        <section
          className={styles.main}
          style={{ backgroundImage: 'url(/img/background-shapes.jpg' }}
        >
          <h1>Large network with an even larger impact.</h1>
          <p>
            How does this translate into material success. Something about
            investing and engagement.
          </p>

          <ul>
            <li>
              <h2>60+</h2>
              <label>Vendors</label>
            </li>
            <li>
              <h2>105k</h2>
              <label>People Reached</label>
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
              One of the most engaging and unique food experiences in the city.
            </h2>
            <label>
              Alex Smith<br /> CEO of Brookfield
            </label>
          </blockquote>
          <blockquote>
            <h2>
              One of the most engaging and unique food experiences in the city.
            </h2>
            <label>
              Alex Smith<br />CEO of Brookfield
            </label>
          </blockquote>
          <blockquote>
            <h2>
              One of the most engaging and unique food experiences in the city.
            </h2>
            <label>
              Alex Smith<br />CEO of Brookfield
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
                June 15 - August 17
              </p>
              <PointlessWrapper
                containerElement={<div className={styles.map} />}
                mapElement={<div className={styles.map} />}
                disableDefaultUI={true}
              />
            </div>
            <div className={styles.location}>
              <h2>Bay Adelaide Center</h2>
              <p>
                Arnell Plaza,<br />
                333 Bay St, Toronto
              </p>
              <p>
                Thursdays 11am-2pm<br />
                June 15 - August 17
              </p>
              <PointlessWrapper
                containerElement={<div className={styles.map} />}
                mapElement={<div className={styles.map} />}
                disableDefaultUI={true}
              />
            </div>
            <div className={styles.location}>
              <h2>Bay Adelaide Center</h2>
              <p>
                Arnell Plaza,<br />
                333 Bay St, Toronto
              </p>
              <p>
                Thursdays 11am-2pm<br />
                June 15 - August 17
              </p>
              <PointlessWrapper
                containerElement={<div className={styles.map} />}
                mapElement={<div className={styles.map} />}
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
