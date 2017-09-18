import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import Showable from '../../Components/Showable';

export default class LoadingPage extends Showable {
  static defaultProps = {
    ...Showable.defaultProps,
    progress: 0
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hidden: false
    };
  }

  render() {
    return (
      <section className={cx(styles.loadingPage, this.showableClasses(styles))}>
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ transform: `scaleX(${this.props.progress})` }}
          />
        </div>
        <h1 className={styles.logo}>Loading ...</h1>
      </section>
    );
  }
}
