import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import utils from '../../../utils';
import Showable from '../../../Components/Showable';
import Tag from '../Tag';
import CloseIcon from '../../../Components/Icons/Close';
import ScrollDownIcon from '../../../Components/Icons/ScrollDown';

import Block from '../../../Components/Block';

export default class ExperienceProject extends Showable {
  static showStates = 3;
  static timing = utils.timing * 0.8;

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && !this.props.selected) {
      this.show();
    } else if (!nextProps.selected && this.props.selected) {
      this.hide();
    }
  }

  renderContent() {
    const { experience } = this.props;
    
    if (experience.content && experience.content.length) {
      return (
        <article>
          <div className={styles.scrollDown}>
            <ScrollDownIcon/>
          </div>
          {experience.content.map(block => <Block key={block.id} {...block} />)}
        </article>
      )
    }
  };
  
  render() {
    const { experience, count, position, next } = this.props;

    return (
      <div
        className={cx(styles.experienceProject, this.showableClasses(styles))}
      >
        <section className={styles.content}>
          {this.renderContent()}
        </section>
        <section className={styles.description}>
          <div className={styles.title}>
            <h1>
              {experience.name}
            </h1>
            <section className={styles.tags}>
              {experience.tags.map(tag =>
                <Tag tag={tag} key={tag} color="green" />
              )}
            </section>
          </div>
          <div className={styles.info}>
            <div className={styles.infoBox}>
              <label>Client:</label>
              <p>
                {experience.client}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Description:</label>
              <p>
                {experience.description}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Impact:</label>
              <p>
                {experience.impact}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.nav}>
          <Link to="/experiences" className={styles.navClose}>
            <CloseIcon color="white" />
          </Link>
          <div className={styles.next}>
            <div className={styles.rotate}>
              <label>Next:</label>
              <Link to={`/experiences/${next.slug}`}>
                {next.name}
              </Link>
            </div>
          </div>
          <div className={styles.count}>
            {`${position}`.padStart(2, '0')}/{`${count}`.padStart(2, '0')}
          </div>
        </section>
      </div>
    );
  }
}
