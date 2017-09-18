import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import data from '../../data';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import FooterTagLine from '../../Components/FooterTagLine';
import TopBar from '../../Components/TopBar';
import CarouselBlock from '../../Components/Block/CarouselBlock';
import Video from '../../Components/Video';

import {
  House as HouseIcon,
  Gift as GiftIcon,
  People as PeopleIcon
} from '../../Components/Icons';

const menu = [
  {
    href: '/market/clients',
    name: 'Clients'
  }
].concat(data.menu.map(item => ({ href: item.hash, name: item.name })));

const section = data.sections.find(
  section => section.name === 'Market Partners'
);

export default class MarketPartnersPage extends Showable {
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
      <div
        className={cx(styles.marketPartnersPage, this.showableClasses(styles))}
      >
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
          <h1>
            Bring your best products,<br /> we take care of the rest.
          </h1>
          <p>
            We support our vendors by supplying the packaging to help you
            connect your product to key consumers, the infrastructure to help
            you get setup quickly, and the people to move your products.
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
              <h2>
                Our ambassadors make the experience.
              </h2>
            </div>
            <div
              className={styles.box2}
              style={{ backgroundImage: 'url(https://s3.amazonaws.com/usful-portfolio/img/market1.jpg)' }}
            >
              <Video muted loop play={true} src="http://usful-portfolio.s3-website-us-east-1.amazonaws.com/vids/market-stall2.mp4" />
            </div>
            <div className={styles.box3}>
              <p>
                Our team of friendly and knowledgeable ambassadors makes the
                market experience a pleasant one for all guests and is on-site
                to assist our vendors in the market like a pro.
              </p>
              <p>
                Passionate and well-versed in key brand messages, the market
                ambassadors happily inform, educate, and assist in helping
                connect your products to consumers.
              </p>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div
              className={styles.imageHolder}
              style={{
                backgroundImage: 'url(https://s3.amazonaws.com/usful-portfolio/img/market-partners-packaging.jpg)'
              }}
            >
              <Video muted loop play={true} src="http://usful-portfolio.s3-website-us-east-1.amazonaws.com/vids/market-sammiches.mp4" />
            </div>
            <div className={styles.col}>
              <label>Packaging</label>
              <h2>Beautiful packaging for your products.</h2>
              <p>
                When it comes to a quality experience that draws repeat
                customers, the value is in the details. We provide beautiful and
                well-designed packaging to all partners that looks as good as
                your products are. Whether you’re selling salads, meats, or
                liquids, we have packaging that meets every need and ensures
                your product will be taken away in style.
              </p>
            </div>
          </div>

          <div
            className={styles.bottomHero}
            style={{ backgroundImage: 'url(https://s3.amazonaws.com/usful-portfolio/img/market-partners-tents.jpg)' }}
          >
            <div className={styles.contents}>
              <label>Infrastucture</label>
              <h2>Well crafted tents and accessories to house your goods.</h2>
              <p>
                With a design that takes the simplicity of a traditional farm
                and combines it with the aesthetic of a European market, all of
                our market stalls are created by in-house architects and
                designers. Designed to withstand Canada’s unpredictable weather,
                the stalls are constructed simply for easy movement and
                convenience during the setup and takedown.
              </p>
            </div>
          </div>
        </section>

        <FooterTagLine text="Want to vend at our markets?" />
        <Footer className={styles.footer} />
      </div>
    );
  }
}
