import React, { Component } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

const TIMING = 1000;

export default class ProjectSlide extends Component {
  static defaultProps = {
    project: {},
    selected: false,
    timing: TIMING
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && !this.props.selected) {
      this.timeout = setTimeout(() => {
        this.setState({
          selected: true
        });
      }, this.props.timing);
    } else if (!nextProps.selected && this.props.selected) {
      this.setState({
        selected: false
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const project = this.props.project;

    const style = {
      backgroundImage: `url(${this.props.project.hero})`
    };

    return (
      <div
        className={cx(styles.projectSlide, {
          [styles.selected]: this.state.selected
        })}
        style={style}
      >
        <section className={styles.info}>
          <h1>
            <a href={`/${project.type}/${project.slug}`}>{project.name}</a>
            in
            <a href={`/${project.type}`}>{project.type}</a>
          </h1>
        </section>
      </div>
    );
  }
}
