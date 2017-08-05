import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';
import utils from '../../utils';

import Showable from '../../Components/Showable';
import CloseIcon from '../../Components/Icons/Close';

export default class About extends Showable {
  static showStates = 1;

  constructor(props) {
    super(props);
  }

  close() {
    window.history.back();
  }

  render() {
    return (
      <div
        className={cx(styles.about, this.showableClasses(styles))}
        onClick={() => this.close()}
      >
        <section className={styles.form} onClick={e => e.stopPropagation()}>
          <div className={styles.header}/>
          <h1>We are a team of conscious creatives.</h1>
          <p>
            Usful products creatively challenge people to make choices that
            better both the planet and their lives. The creation of a
            forward-thinking team of technologists, designers, developers,
            engineers, and architects, Usful's physical and digital experiences
            are designed to inspire a shift in the way users think about
            experiences and products. The new generation of citizen craves
            meaning; through our suite of products with purpose, we're here to
            associate your brand with impactful user experiences that get people
            listening, talking, reevaluating, and acting.
          </p>
          <button className={styles.closeButton} onClick={() => this.close()}>
            <CloseIcon color="black" />
          </button>
        </section>
      </div>
    );
  }
}