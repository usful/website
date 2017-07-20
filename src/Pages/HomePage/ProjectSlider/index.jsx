import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import ProjectSlide from './ProjectSlide';
import utils from '../../../utils';

const INTERVAL = 7500;

const getProjects = sections =>
  sections
    .filter(section => !!section.projects)
    .reduce((arr, section) => arr.concat(section.projects), []);

export default class ProjectSlider extends Component {
  static defaultProps = {
    sections: [],
    interval: INTERVAL,
    showInfo: true
  };

  constructor(props) {
    super(props);

    this.state = {
      projects: getProjects(props.sections),
      currentProject: 0,
      sliderWidth: 100
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.next(), this.props.interval);
    this.setState({
      sliderWidth: this.refs.slider.offsetWidth
    });
  }

  _moveSlide(by) {
    this.setState({
      currentProject: utils.arrayClamp(
        this.state.currentProject + by,
        this.state.projects
      )
    });
  }

  next() {
    this._moveSlide(1);
  }

  previous() {
    this._moveSlide(-1);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sections !== this.props.sections) {
      this.setState({
        projects: getProjects(nextProps.sections),
        currentProject: 0
      });
    }
  }

  render() {
    const { currentProject, projects, sliderWidth } = this.state;

    const slidesStyle = {
      width: projects.length * sliderWidth,
      transform: `translateX(${-currentProject * sliderWidth}px)`
    };

    const project = projects[currentProject];

    return (
      <div
        ref="slider"
        className={cx(styles.projectSlider, {
          [styles.showInfo]: this.props.showInfo
        })}
      >
        <section className={styles.slides} style={slidesStyle}>
          {projects.map((project, i) =>
            <ProjectSlide
              key={project.id}
              project={project}
              selected={i === currentProject}
            />
          )}
        </section>
        {this.props.children}
        <section className={styles.info}>
          <h1>
            <Link to={`/${project.type}/${project.slug}`}>{project.name}</Link>
            in
            <Link to={`/${project.type}`}>{project.type}</Link>
          </h1>
        </section>
      </div>
    );
  }
}
