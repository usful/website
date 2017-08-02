import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

import Showable from '../../Components/Showable';

export default class TechnologiesPage extends Showable {
  static defaultProps = {
    ...Showable.defaultProps
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={cx(styles.technologiesPage, this.showableClasses(styles))}
      >
        <h1>Technologies</h1>
        <h1>Technologies</h1>
        <h1>Technologies</h1>
        <h1>Technologies</h1>
        <h1>Technologies</h1>
        <h1>Technologies</h1>
      </div>
    );
  }
}
