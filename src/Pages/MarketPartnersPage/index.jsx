import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import FooterTagLine from '../../Components/FooterTagLine';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import CarouselBlock from '../../Components/Block/CarouselBlock';
import {
  House as HouseIcon,
  Gift as GiftIcon,
  People as PeopleIcon
} from '../../Components/Icons';

export default class MarketPartnersPage extends Showable {
  static enter = [300, 600, 600];
  static exit = [600, 300, 300];

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
      <div
        className={cx(styles.marketPartnersPage, this.showableClasses(styles))}
      >
        <section className={styles.intro}>
          <CarouselBlock
            {...carousel}
            className={styles.carousel}
            pagerClass={styles.pager}
          />

          <section className={styles.top}>
            <Link className={styles.logoLink} to="/">
              <Logo className={styles.logo} />
            </Link>
            <MainMenu color="white" items={menu} />
          </section>
        </section>
        <section className={styles.main}>
          <h1>
            Just bring your product and we'll take care of everything else.
          </h1>
          <p>
            We'll support you by giving key resources to run your business at
            the market.
          </p>
          <ul className={styles.icons}>
            <li>
              <PeopleIcon color="yellow" />
              <label>People</label>
            </li>
            <li>
              <GiftIcon color="yellow" />
              <label>Packaging</label>
            </li>
            <li>
              <HouseIcon color="yellow" />
              <label>Infrastructure</label>
            </li>
          </ul>

          <div className={styles.boxes}>
            <div className={styles.box1}>
              <label>People</label>
              <h2>Knowledgeable people to handle your business.</h2>
            </div>
            <div className={styles.box2} />
            <div className={styles.box3}>
              <p>
                At Usful, we believe that people are the heart of successful
                businesses. That's why we provide you with knowledgeable and
                passionate people to help you run your business.
              </p>
              <p>
                Don't stress about having people are your booth. We'll take care
                of that for you.
              </p>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div
              className={styles.imageHolder}
              style={{
                backgroundImage: 'url(/img/market-partners-packaging.jpg)'
              }}
            />
            <div className={styles.col}>
              <label>Packaging</label>
              <h2>Beautiful packaging that makes your product stand out.</h2>
              <p>
                Our packaging was carefully designed and curated by world-class
                designers. Whether are you are selling meat, vegetables, or even
                liquids, we have beuatiful packaging to suite your needs.
              </p>
            </div>
          </div>

          <div className={styles.bottomHero} style={{backgroundImage: 'url(/img/market-partners-tents.jpg)'}}>
            <label>Infrastucture</label>
            <h2>Well crafted tents and accessories to house your goods.</h2>
            <p>
              Something about how nice the tents are and dependable for selling
              in market. Waterproof. Rainproof.
            </p>
          </div>
        </section>

        <FooterTagLine text="Want to join the collective?" />
        <Footer className={styles.footer} />
      </div>
    );
  }
}
