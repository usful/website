import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import Showable from '../../Components/Showable';
import Footer from '../../Components/Footer';
import MainMenu from '../../Components/MainMenu';
import Logo from '../../Components/Logo';
import LoadableVideo from '../../Components/LoadableVideo';

export default class MarketPartnersPage extends Showable {
  static enter = [1500, 600, 600];
  static exit = [600, 600, 600];

  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }


  render() {
    const { section, menu } = this.props;

    return (
      <div className={cx(styles.marketPage, this.showableClasses(styles))}>
        <section className={styles.top}>
          <Link className={styles.logoLink} to="/">
            <Logo className={styles.logo} />
          </Link>
          <MainMenu color={'white'} items={menu} />
        </section>

        <Footer className={styles.footer} />
      </div>
    );
  }
}
