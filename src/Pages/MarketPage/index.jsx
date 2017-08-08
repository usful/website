import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import LoadableVideo from '../../Components/LoadableVideo';

export default class MarketPage extends Showable {
  static enter = [1500, 600, 600];
  static exit = [600, 600, 600];

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
    const { hovering } = this.state;
    const { section, menu } = this.props;

    return (
      <div
        className={cx(styles.marketPage, this.showableClasses(styles), {
          [styles.hovering]: hovering
        })}
      >
        <LoadableVideo
          className={styles.video}
          autoPlay
          muted
          loop
          src="/vids/tomatose.mp4"
        />
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
              <div className={styles.col}>
                <label />
                <h1 className={styles.right}>
                  Shifting conciousness is the beginning of change.
                </h1>
                <div
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === 'partners'
                  })}
                  style={{backgroundImage: 'url(/img/market1.jpg)'}}
                />
                <div
                  className={cx(styles.marketHero, {
                    [styles.visible]: hovering === 'story'
                  })}
                  style={{backgroundImage: 'url(/img/market2.jpg)'}}
                />
              </div>
              <div className={styles.col}>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver('story')}
                  onMouseLeave={e => this.onMouseLeave('story')}
                >
                  <label>01</label>
                  <h1>Our Story</h1>
                  <div
                    className={cx(styles.marketHero, {
                      [styles.visible]: hovering === 'partners'
                    })}
                  />
                </div>
                <div
                  className={styles.col}
                  onMouseOver={e => this.onMouseOver('partners')}
                  onMouseLeave={e => this.onMouseLeave('partners')}
                >
                  <label>02</label>
                  <h1>Partners</h1>
                  <div
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
