import React, { Component } from 'react';
import styles from './styles.scss';

import ProjectSlide from './ProjectSlide';
import utils from '../../../utils';

const SLIDER_WIDTH = 69; //ems
const INTERVAL = 5000;

const getProjects = sections =>
  sections
    .filter(section => !!section.projects)
    .reduce((arr, section) => arr.concat(section.projects), []);

export default class ProjectSlider extends Component {
  static defaultProps = {
    sections: [],
    interval: INTERVAL
  };

  constructor(props) {
    super(props);

    this.state = {
      projects: getProjects(props.sections),
      currentProject: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.next(), this.props.interval);
  }

  next() {
    this.setState({
      currentProject: utils.arrayClamp(
        this.state.currentProject + 1,
        this.state.projects
      )
    });
  }

  previous() {
    this.setState({
      currentProject: utils.arrayClamp(
        this.state.currentProject - 1,
        this.state.projects
      )
    });
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
    const slidesStyle = {
      width: `${this.state.projects.length * SLIDER_WIDTH}rem`,
      transform: `translateX(${-this.state.currentProject * SLIDER_WIDTH}rem)`
    };

    return (
      <div className={styles.projectSlider}>
        <section className={styles.slides} style={slidesStyle}>
          {this.state.projects.map(project =>
            <ProjectSlide key={project.id} project={project} />
          )}
        </section>
        {this.props.children}
      </div>
    );
  }
}
