import React from 'react';
import cx from 'classnames';
import styles from './Logo.scss';

export default function Logo({ className }) {
  return <h1 className={cx(styles.logo, className)}>Usful</h1>;
}
