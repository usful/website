import React, { Component } from 'react';
import cx from 'classnames';
import styles from './styles.scss';
import LoadableImage from '../../../../Components/LoadableImage';
import LoadableVideo from '../../../../Components/LoadableVideo';

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
        className={cx(styles.projectSlide, 'projectSlide', {
          [styles.selected]: selected
        })}
        style={style}
      >
        {project.heroVideo
          ? <LoadableVideo muted autoPlay loop src={project.heroVideo} />
          : <LoadableImage className={styles.hero} src={project.hero}/>}
      </div>
    );
  }
}
