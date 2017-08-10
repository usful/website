import React, { Component } from 'react';
import cx from 'classnames';

import styles from './style.scss';
import Block from '../index';
import utils from '../../../utils';

const UPDATE_TIME = 100;

export default class CarouselBlock extends Component {
  static defaultProps = {
    content: [],
    timing: 5000,
    animation: 'slide',
    activeClass: '',
    pagerClass: '',
    onChange: current => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      currentPercentage: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let done =
        this.state.currentPercentage +
        this.props.timing / UPDATE_TIME / this.props.timing;

      if (done >= 1) {
        done = 0;
        this.next();
      }

      this.setState({
        currentPercentage: done
      });
    }, UPDATE_TIME);
  }

  moveBy(num) {
    this.setState({
      current: utils.arrayClamp(this.state.current + num, this.props.content)
    });
  }

  next() {
    this.moveBy(1);
  }

  previous() {
    this.moveBy(-1);
  }

  renderSlide() {
    const content = this.props.content || [];
    const translateX = -this.state.current / content.length * 100;
    const width = content.length * 100;
    const activeClass = this.props.activeClass;

    return (
      <div
        className={cx(styles.content, styles.slide)}
        style={{
          width: `${width}%`,
          transform: `translateX(${translateX}%)`
        }}
      >
        {content.map((block, i) =>
          <Block
            key={block.id}
            {...block}
            className={cx({
              [styles.noPadding]: true,
              [activeClass]: i === this.state.current
            })}
          />
        )}
      </div>
    );
  }

  renderFade() {
    const content = this.props.content || [];
    const activeClass = this.props.activeClass;

    return (
      <div className={cx(styles.content, styles.fade)}>
        {content.map((block, i) =>
          <Block
            key={block.id}
            {...block}
            className={cx({
              [styles.noPadding]: true,
              [styles.fade]: true,
              [styles.active]: i === this.state.current,
              [activeClass]: i === this.state.current
            })}
          />
        )}
      </div>
    );
  }

  render() {
    const content = this.props.content || [];

    return (
      <div className={cx(styles.carouselBlock, this.props.className)}>
        {this.props.animation === 'slide' ? this.renderSlide() : null}
        {this.props.animation === 'fade' ? this.renderFade() : null}

        <ul className={cx(styles.dots, this.props.pagerClass)}>
          {content.map((block, i) =>
            <li
              onClick={() =>
                this.setState({ current: i, currentPercentage: 0 })}
              key={block.id}
            >
              <div
                style={{
                  transform: `scale(${i === this.state.current
                    ? this.state.currentPercentage
                    : '0'},1)`
                }}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}
