import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import PageBase from '../PageBase';

export default class ExperiencesPage extends PageBase {
  static defaultProps = {
    ...PageBase.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={cx(styles.experiencesPage, {
          [styles.hiding]: this.state.hiding,
          [styles.hidden]: this.state.hidden
        })}
        style={this.transitionStyle}
      >
        <h1>Experiences</h1>
        <h1>Experiences</h1>
        <h1>Experiences</h1>
        <h1>Experiences</h1>
        <h1>Experiences</h1>
        <h1>Experiences</h1>
      </div>
    );
  }
}
