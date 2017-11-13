import React from 'react';
import cx from 'classnames';

import Block from '../../../Components/Block';
import styles from './styles.scss';

export default function Boxes(props) {
  const {
    className,
    background1,
    background2,
    background3,
    color1,
    color2,
    color3,
    contentStyle,
    align,
    title,
    block,
    text,
    icon,
  } = props;
  const yOffset = props.yOffset || 17;
  const yDiff = props.yDiff || 3;
  return (
    <div
      className={cx(styles.boxes, styles[align || 'center'], className)}
    >
      <div
        className={styles.box1}
        style={{
          background: background1,
          color: color1,
          backgroundSize: 'contain',
        }}
      >
        <h2>
          {title}
        </h2>
      </div>
      <div
        className={cx(styles.box2, styles.defaultBox, styles[contentStyle || 'left'])}
        style={{
          top: `${yOffset + yDiff}rem`,
          color: color2,
          background: background2,
          backgroundSize: 'contain',
        }}
      >
        <Block
          {...block}
          className={styles.block}
        />
      </div>
      <div
        className={cx(styles.box3,styles.defaultBox, styles[contentStyle || 'left'])}
        style={{
          top: `${yOffset}rem`,
          color: color3,
          background: background3,
          backgroundSize: 'contain',
        }}
      >
        <img
          className={styles.bankCards}
          src={icon}
        />
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}