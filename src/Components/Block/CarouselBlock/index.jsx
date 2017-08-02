import React, { Component } from 'react';
import styles from './style.scss';

import Block from '../index';

export default class CarouselBlock extends Component {
  static defaultProps = {
    content: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.content || [];

    return (
      <div className={styles.carouselBlock}>
        <div
          className={styles.content}
          style={{ width: `${content.length * 100}%` }}
        >
          {content.map(block => <Block key={block.id} {...block} />)}
        </div>
        <ul className={styles.dots}>
          {content.map(block => <li />)}
        </ul>
      </div>
    );
  }
}
