import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import utils from '../../../utils';
import PageBase from '../../PageBase';
import Tag from '../Tag';
import CloseIcon from '../../../Components/Icons/Close';
import Block from '../../../Components/Block';

const MODIFIER = 0.8;

export default class ExperienceProject extends PageBase {
  static numberOfStates = 3;
  static timing = utils.timing * MODIFIER;

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

  render() {
    const { experience, count, position, next } = this.props;
    const { showing, shown, show1, show2, show3, hiding, hidden } = this.state;

    return (
      <div
        className={cx(styles.experienceProject, {
          [styles.showing]: showing,
          [styles.shown]: shown,
          [styles.show1]: show1,
          [styles.show2]: show2,
          [styles.show3]: show3,
          [styles.hiding]: hiding,
          [styles.hidden]: hidden
        })}
      >
        <section className={styles.content}>
          <article>
            {experience.content.map(block => <Block key={block.id} {...block} />)}
          </article>
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
