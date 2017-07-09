import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import PageBase from '../PageBase';

export default class LoadingPage extends PageBase {
  static defaultProps = {
    ...PageBase.defaultProps,
    progress: 0,
    visible: true
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
      <section
        className={cx(styles.loadingPage, {
          [styles.showing]: this.state.showing,
          [styles.hiding]: this.state.hiding,
          [styles.hidden]: this.state.hidden
        })}
        style={this.transitionStyle}
      >
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ width: `${this.props.progress}%` }}
          />
        </div>
        <h1 className={styles.logo}>usful</h1>
      </section>
    );
  }
}
