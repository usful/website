import React, { Component } from 'react';
import cx from 'classnames';

import styles from './style.scss';
import Block from '../index';
import utils from '../../../utils';

export default class CarouselBlock extends Component {
  static defaultProps = {
    content: [],
    timing: 5000
  };

  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.next(), this.props.timing);
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

  render() {
    const content = this.props.content || [];
    const width = content.length * 100;
    const translateX = -this.state.current / content.length * 100;

    return (
      <div className={styles.carouselBlock}>
        <div
          className={styles.content}
          style={{
            width: `${width}%`,
            transform: `translateX(${translateX}%)`
          }}
        >
          {content.map(block => <Block key={block.id} {...block} />)}
        </div>
        <ul className={styles.dots}>
          {content.map((block, i) =>
            <li
              onClick={() => this.setState({current: i})}
              className={cx({ [styles.selected]: i === this.state.current })}
              key={block.id}
            />
          )}
        </ul>
      </div>
    );
  }
}
