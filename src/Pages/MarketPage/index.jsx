import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import utils from '../../utils';
import styles from './styles.scss';
import data from '../../data';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import TopBar from '../../Components/TopBar';
import LoadableVideo from '../../Components/LoadableVideo';

const CLIENTS = 'clients';
const PARTNERS = 'partners';

const LINEAR_GRADIENT =
  'linear-gradient(to bottom,rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%)';

const storyStyle = utils.isMobile
  ? {
      backgroundImage: `${LINEAR_GRADIENT}, url(/img/market1.jpg)`
    }
  : null;

const partnerStyle = utils.isMobile
  ? {
      backgroundImage: `${LINEAR_GRADIENT}, url(/img/market2.jpg)`
    }
  : null;

const menu = data.menu.map(item => ({ href: item.hash, name: item.name }));

const section = data.sections.find(section => section.name === 'Technology');

export default class MarketPage extends Showable {
  static enter = [utils.isMobile ? 300 : 1500, 600, 600];
  static exit = [600, 300, 600];

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hovering: null
    };
  }

  onMouseOver(name) {
    if (this.state.shown) {
      this.setState({ hovering: name });
    }
  }

  onMouseLeave() {
    this.setState({ hovering: null });
  }

  render() {
    if (!this.shouldRender) {
      return null;
    }

    const { hovering } = this.state;

    return (
      <div
        className={cx(styles.marketPage, this.showableClasses(styles), {
          [styles.hovering]: hovering
        })}
      >
        {utils.isMobile
          ? null
          : <LoadableVideo
              className={styles.video}
              play={true}
              muted
              loop
              src="http://usful-portfolio.s3-website-us-east-1.amazonaws.com/vids/market-hero.mp4"
            />}
        <div className={styles.coverTop} />
        <div className={styles.coverRight} />
        <div className={styles.coverLeft} />
        <div className={styles.coverBottom} />

        <div className={styles.container}>
          <div className={styles.main}>
            <TopBar className={styles.top} path="/" menu={menu} color={hovering ? 'black' : 'white'} />

            <section className={styles.box}>
              <div className={cx(styles.col, styles.intro)}>
                <label />
                <h1 className={styles.right}>
                  Fresh. <br/>Local. <br/>Curated.
                </h1>
                <div
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === 'partners' && !utils.isMobile
                  })}
                  style={{ backgroundImage: 'url(/img/market1.jpg)' }}
                />
                <div
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === CLIENTS && !utils.isMobile
                  })}
                  style={{ backgroundImage: 'url(/img/market2.jpg)' }}
                />
              </div>
              <div className={styles.col}>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver(CLIENTS)}
                  onMouseLeave={e => this.onMouseLeave(CLIENTS)}
                  style={storyStyle}
                >
                  <label>01</label>
                  <h1 className={styles.link}>Clients</h1>
                  <Link
                    to={`/market/${CLIENTS}`}
                    className={cx(styles.marketHero, {
                      [styles.visible]: hovering === PARTNERS
                    })}
                  />
                </div>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver(PARTNERS)}
                  onMouseLeave={e => this.onMouseLeave(PARTNERS)}
                  style={partnerStyle}
                >
                  <label>02</label>
                  <h1 className={styles.link}>Partners</h1>
                  <Link
                    to={`/market/${PARTNERS}`}
                    className={cx(styles.marketHero, {
                      [styles.visible]: hovering === CLIENTS
                    })}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer className={styles.footer} />
      </div>
    );
  }
}
