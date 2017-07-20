import React from 'react';
import cx from 'classnames';
import styles from './styles.scss';

import utils from '../../../utils';
import PageBase from '../../PageBase';
import Tag from '../Tag';

export default class ExperienceProject extends PageBase {
  constructor(props) {
    super(props);
  }

  async show1() {
    await utils.pause(1);

    this.setState({
      show1: true,
      hide1: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show2: true
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show3: true,
      showing: false
    });

    this.props.onShown();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected && !this.props.selected) {
      console.log('Showing Experience Project', this.props.experience.name);
      this.show();
    } else if (!nextProps.selected && this.props.selected) {
      this.hide();
    }
  }

  async hide1() {
    await utils.pause(1);

    this.setState({
      hide1: true,
      show3: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show2: false
    });

    await utils.pause(utils.timing * 0.75);

    this.setState({
      show1: false
    });

    await utils.pause(utils.timing * 0.75);

    this.props.onHidden();

    this.setState({
      hidden: true,
      hiding: false
    });
  }

  render() {
    const { experience, count, position } = this.props;
    const { showing, shown, show1, show2, show3, hiding, hidden } = this.state;

    return (
      <div
        className={cx(styles.experienceProject, {
          [styles.showing]: showing,
          [styles.shown]: shown,
          [styles.show1]: show1,
          [styles.show2]: show2,
          [styles.show3]: show3,
          [styles.hiding]: hiding,
          [styles.hidden]: hidden
        })}
      >
        <section className={styles.content}>
        </section>
        <section className={styles.description}>
          <div className={styles.title}>
            <h1>
              {experience.name}
            </h1>
            <section className={styles.tags}>
              {experience.tags.map(tag =>
                <Tag tag={tag} key={tag} color="green" />
              )}
            </section>
          </div>
          <div className={styles.info}>
            <div className={styles.infoBox}>
              <label>Client:</label>
              <p>
                {experience.client}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Description:</label>
              <p>
                {experience.description}
              </p>
            </div>
            <div className={styles.infoBox}>
              <label>Impact:</label>
              <p>
                {experience.impact}
              </p>
            </div>
          </div>
        </section>
        <section className={styles.nav}>
          <h1>Navbar</h1>
          <h2>
            {position} / {count}
          </h2>
        </section>
      </div>
    );
  }
}
