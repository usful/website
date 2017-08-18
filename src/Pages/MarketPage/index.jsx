import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import utils from '../../utils';
import styles from './styles.scss';
import data from '../../data';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import LoadableVideo from '../../Components/LoadableVideo';

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

const menu = [
  {
    href: '/experiences',
    name: 'XM'
  },
  {
    href: '/technology',
    name: 'Tech'
  }
].concat(data.menu.map(item => ({ href: item.hash, name: item.name })));

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
              src="/vids/tomatose.mp4"
            />}
        <div className={styles.coverTop} />
        <div className={styles.coverRight} />
        <div className={styles.coverLeft} />
        <div className={styles.coverBottom} />

        <div className={styles.container}>
          <div className={styles.main}>
            <section className={styles.top}>
              <Link className={styles.logoLink} to="/">
                <Logo className={styles.logo} />
              </Link>
              <MainMenu color={hovering ? 'black' : 'white'} items={menu} />
            </section>

            <section className={styles.box}>
              <div className={cx(styles.col, styles.intro)}>
                <label />
                <h1 className={styles.right}>
                  Shifting conciousness is the beginning of change.
                </h1>
                <Link
                  to="/market/partners"
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === 'partners' && !utils.isMobile
                  })}
                  style={{ backgroundImage: 'url(/img/market1.jpg)' }}
                />
                <Link
                  to="/market/story"
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === 'story' && !utils.isMobile
                  })}
                  style={{ backgroundImage: 'url(/img/market2.jpg)' }}
                />
              </div>
              <div className={styles.col}>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver('story')}
                  onMouseLeave={e => this.onMouseLeave('story')}
                  style={storyStyle}
                >
                  <label>01</label>
                  <h1>Our Story</h1>
                  <Link
                    to="/market/story"
                    className={cx(styles.marketHero, {
                      [styles.visible]: hovering === 'partners'
                    })}
                  />
                </div>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver('partners')}
                  onMouseLeave={e => this.onMouseLeave('partners')}
                  style={partnerStyle}
                >
                  <label>02</label>
                  <h1>Partners</h1>
                  <Link
                    to="/market/partners"
                    className={cx(styles.marketHero, {
                      [styles.visible]: hovering === 'story'
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
