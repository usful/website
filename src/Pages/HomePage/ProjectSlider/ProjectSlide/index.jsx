import React, { Component } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

export default class ProjectSlide extends Component {
  static defaultProps = {
    project: {},
    selected: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { project, selected } = this.props;

    const style = {
      backgroundImage: `url(${project.hero})`
    };

    return (
      <div
        className={cx(styles.projectSlide, {
          [styles.selected]: selected
        })}
        style={style}
      />
    );
  }
}
