import React, { PureComponent } from 'react';
import cx from 'classnames';

import utils from '../../../../utils';
import styles from './styles.scss';
import LoadableImage from '../../../../Components/LoadableImage';
import LoadableVideo from '../../../../Components/LoadableVideo';

export default class ProjectSlide extends PureComponent {
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
        {project.heroVideo && !utils.isMobile
          ? <LoadableVideo muted loop src={project.heroVideo} play={selected} />
          : <LoadableImage className={styles.hero} src={project.hero} />}
      </div>
    );
  }
}
