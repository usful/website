import React from 'react';
import cx from 'classnames';

import Block from '../../../Components/Block';
import styles from './styles.scss';

export default function Boxes(props) {
  const {
    className,
    box1Style,
    box2Style,
    box3Style,
    title,
    block,
    text,
    icon,
  } = props;
  return (
    <div className={cx(styles.boxes, className)}>
      <div className={cx(styles.box1, box1Style || styles.defaultBox)}>
        <h2>
          {title}
        </h2>
      </div>
      <div
        className={cx(styles.box2, box2Style || styles.defaultBox)}
      >
        <Block
          {...block}
        />
      </div>
      <div className={cx(styles.box3, box3Style || styles.defaultBox)}>
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