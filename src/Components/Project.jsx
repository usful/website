import React from 'react';
import cx from 'classnames';
import Markdown from 'react-markdown';

import styles from './Project.scss';

import utils from '../utils';
import Showable from './Showable';
import Tag from './Tag';
import CloseIcon from './Icons/Close';
import ScrollDownIcon from './Icons/ScrollDown';

import Block from './Block';

export default class Project extends Showable {
  static enter = [utils.timing * 0.8, utils.timing * 0.8, utils.timing * 0.8];
  static exit = [utils.timing * 0.1, utils.timing * 0.8, utils.timing * 0.8];

  static defaultProps = {
    ...Showable.defaultProps,
    baseUrl: '/project',
    align: 'right'
  };

  constructor(props) {
    super(props);
  }

  renderContent() {
    const { project } = this.props;

    if (project.content && project.content.length) {
      return (
        <article>
          <div className={styles.scrollDown}>
            <ScrollDownIcon />
          </div>
          {project.content.map(block => (
            <Block key={block.id} {...block} active />
          ))}
        </article>
      );
    }
  }

  render() {
    const { project, count, position, next, align } = this.props;

    return (
      <div
        className={cx(
          styles.project,
          this.showableClasses(styles),
          styles[align],
          {
            [styles.hasContent]: project.content && project.content.length
          }
        )}
      >
        {utils.isMobile ? null : (
          <section className={styles.content}>{this.renderContent()}</section>
        )}
        <section
          className={cx(
            styles.description,
            utils.mobileDetect.os() === 'iOS' ? styles.ios : null
          )}
        >
          <div className={styles.descriptionCopy}>
            <div className={styles.title}>
              <h1>{project.name}</h1>
              <section className={styles.tags}>
                {project.tags.map(tag => (
                  <Tag tag={tag} key={tag} color="green" />
                ))}
              </section>
            </div>
            <div className={styles.info}>
              <div className={styles.infoBox}>
                <label>Who:</label>
                <Markdown source={project.client || project.industry} />
              </div>
              <div className={styles.infoBox}>
                <label>What:</label>
                <Markdown source={project.description} />
              </div>
              <div className={styles.infoBox}>
                <label>Impact:</label>
                <Markdown source={project.impact} />
              </div>
              <h1>Want to collaborate?</h1>
              <menu className={styles.contact}>
                <div />
                <hr />
                <a className={styles.button} href="#contact">
                  Contact Us
                </a>
              </menu>
            </div>
          </div>
          <div
            className={cx(
              styles.nav,
              utils.mobileDetect.os() === 'iOS' ? styles.ios : null
            )}
          >
            <a href="/" className={styles.navClose}>
              <CloseIcon color="white" />
            </a>
            <div className={styles.next}>
              <div className={styles.rotate}>
                <label>Next:</label>
                <a href={next.route.path}>{next.name}</a>
              </div>
            </div>
            <div className={styles.count}>
              {`${position}`.padStart(2, '0')}/{`${count}`.padStart(2, '0')}
            </div>
          </div>
        </section>
        {utils.isMobile ? (
          <section className={styles.content}>{this.renderContent()}</section>
        ) : null}
      </div>
    );
  }
}
