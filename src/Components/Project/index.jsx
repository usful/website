import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import utils from '../../utils/index';
import Showable from '../Showable';
import Tag from '../Tag/index';
import CloseIcon from '../Icons/Close/index';
import ScrollDownIcon from '../Icons/ScrollDown/index';

import Block from '../Block/index';

export default class Project extends Showable {
  static enter = [utils.timing * 0.8, utils.timing * 0.8, utils.timing * 0.8];
  static exit = [utils.timing * 0.8, utils.timing * 0.8, utils.timing * 0.8];

  static defaultProps = {
    ...Showable.defaultProps,
    baseUrl: '/experiences'
  };

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
    const { project } = this.props;

    if (project.content && project.content.length) {
      return (
        <article>
          <div className={styles.scrollDown}>
            <ScrollDownIcon />
          </div>
          {project.content.map(block => <Block key={block.id} {...block} />)}
        </article>
      );
    }
  }

  render() {
    const { project, count, position, next } = this.props;

    return (
      <div
        className={cx(styles.project, this.showableClasses(styles), {
          [styles.hasContent]: project.content && project.content.length
        })}
      >
        <section className={styles.content}>
          {this.renderContent()}
        </section>
        <section className={styles.description}>
          <div className={styles.title}>
            <h1>
              {project.name}
            </h1>
            <section className={styles.tags}>
              {project.tags.map(tag =>
                <Tag tag={tag} key={tag} color="green" />
              )}
            </section>
          </div>
          <div className={styles.info}>
            <div className={styles.infoBox}>
              <label>Client:</label>
              <p>
                {project.client}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Description:</label>
              <p>
                {project.description}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Impact:</label>
              <p>
                {project.impact}
              </p>
            </div>
            <h1>Want to collaborate?</h1>
            <menu className={styles.contact}>
              <div />
              <hr />
              <Link className={styles.button} to="#contact">
                Contact Us
              </Link>
            </menu>
          </div>
        </section>
        <section className={styles.nav}>
          <Link to={this.props.baseUrl} className={styles.navClose}>
            <CloseIcon color="white" />
          </Link>
          <div className={styles.next}>
            <div className={styles.rotate}>
              <label>Next:</label>
              <Link to={this.props.baseUrl + '/' + next.slug}>
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
