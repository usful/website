import React from 'react';
import cx from 'classnames';
import styles from '../styles.scss';
import IconHelper from '../IconHelper';

const helper = new IconHelper({ width: 90, height: 113 });

export default function ScrollDown({ className = '', color = 'white' }) {
  return (
    <svg
      className={cx('icon', className)}
      style={helper.style}
      viewBox={helper.viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className={styles[`${color}Fill`]} cx="45" cy="13" r="3" />
      <path className={styles[`${color}Fill`]} d="M45,0.5c-8.284,0-15,6.717-15,15.002v24.996C30,48.783,36.716,55.5,45,55.5s15-6.717,15-15.002V15.502  C60,7.217,53.284,0.5,45,0.5z M58,40.498C58,47.667,52.168,53.5,45,53.5c-7.168,0-13-5.833-13-13.002V15.502  C32,8.333,37.832,2.5,45,2.5c7.168,0,13,5.833,13,13.002V40.498z" />
      <path className={styles[`${color}Fill`]} d="M58.293,59.793L45,73.086L31.707,59.793c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14,14  C44.488,75.402,44.744,75.5,45,75.5s0.512-0.098,0.707-0.293l14-14c0.391-0.391,0.391-1.023,0-1.414S58.684,59.402,58.293,59.793z" />
      <path className={styles[`${color}Fill`]} d="M58.293,73.793L45,87.086L31.707,73.793c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14,14  C44.488,89.402,44.744,89.5,45,89.5s0.512-0.098,0.707-0.293l14-14c0.391-0.391,0.391-1.023,0-1.414S58.684,73.402,58.293,73.793z" />
    </svg>
  );
}
