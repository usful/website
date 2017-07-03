import React, { Component } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const FADE_OUT_TIME = 250; //ms

export default class LoadingPage extends Component {
  static defaultProps = {
    progress: 0,
    onHide: () => {},
    onHidden: () => {},
    fadeOutTime: FADE_OUT_TIME
  };

  constructor(props) {
    super(props);

    this.state = {
      hiding: false,
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.progress >= 100 &&
      !(this.state.hidden || this.state.hiding)
    ) {
      this.setState({ hiding: true }, () => this.props.onHide());
      setTimeout(() => this._onHidden(), this.props.fadeOutTime);
    }
  }

  _onHidden() {
    this.setState({ hidden: true }, () => this.props.onHidden());
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
        style={{ transition: `opacity ${this.props.fadeOutTime}ms ease-out` }}
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
