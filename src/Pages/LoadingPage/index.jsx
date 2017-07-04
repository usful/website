import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import PageBase from '../PageBase';

export default class LoadingPage extends PageBase {
  static defaultProps = {
    ...PageBase.defaultProps,
    progress: 0
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.progress >= 100 &&
      !(this.state.hidden || this.state.hiding)
    ) {
      this.hide();
    }
  }

  render() {
    if (this.state.hidden) {
      return null;
    }

    return (
      <section
        className={cx(styles.loadingPage, {
          [styles.hiding]: this.state.hiding
        })}
        style={this.transitionStyle}
      >
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ width: `${this.props.progress}%` }}
          />
        </div>
      </section>
    );
  }
}
