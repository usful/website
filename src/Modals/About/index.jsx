import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';
import Showable from '../../Components/Showable';

export default class About extends Showable {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={cx(styles.about, this.showableClasses(styles))} >
        <h1>About Us</h1>
      </div>
    )
  }
}