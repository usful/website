import React, { Component } from 'react';
import { matchPath } from 'react-router-dom';
import utils from '../utils/index';

export default class Showable extends Component {
  static enter = [utils.timing];
  static exit = [utils.timing];

  static defaultProps = {
    show: () => {},
    hide: () => {},
    onShown: () => {},
    onShow: () => {},
    onHide: () => {},
    onHidden: () => {},
    visible: false,
    section: {}
  };

  constructor(props) {
    super(props);

    const state = {
      showing: false,
      hiding: false,
      shown: false,
      hidden: true,
      active: false
    };

    if (this.props.section && this.props.section.route) {
      state.active = !!matchPath(
        window.location.pathname,
        this.props.section.route
      );
    }

    for (let i = 1; i < this.constructor.enter.length + 1; i++) {
      state[`show${i}`] = false;
      state[`hide${i}`] = false;
    }

    this.state = {
      ...state
    };
  }

  onShow() {}

  onShown() {}

  onHidden() {}

  onHide() {}

  showableClasses(styles) {
    const names = {
      [styles.shown]: this.state.shown,
      [styles.showing]: this.state.showing,
      [styles.hiding]: this.state.hiding,
      [styles.hidden]: this.state.hidden
    };

    for (let i = 1; i < this.constructor.enter.length + 1; i++) {
      names[styles[`show${i}`]] = this.state[`show${i}`];
      names[styles[`hide${i}`]] = this.state[`hide${i}`];
    }

    return names;
  }

  setActive() {
    this.setState({ active: true });
  }

  setInactive() {
    this.setState({ active: false });
  }

  async show() {
    const states = this.constructor.enter.length;

    if (!this.state.hidden) {
      return;
    }

    await new Promise(resolve =>
      this.setState(
        {
          hidden: false,
          hiding: false,
          showing: true
        },
        resolve
      )
    );

    this.onShown();
    this.props.onShow();

    for (let i = 1; i < states + 1; i++) {
      this.setState({
        [`show${i}`]: true,
        [`hide${states - i + 1}`]: false
      });

      await utils.pause(this.constructor.enter[i - 1]);
    }

    this.setState({ shown: true, showing: false });

    this.onShown();
    this.props.onShown();
  }

  async hide() {
    const states = this.constructor.exit.length;

    if (this.state.hidden) {
      return;
    }

    await new Promise(resolve =>
      this.setState(
        {
          hiding: true,
          shown: false,
          showing: false
        },
        resolve
      )
    );

    this.onHide();
    this.props.onHide();

    for (let i = states; i > 0; i--) {
      this.setState({
        [`hide${states - i + 1}`]: true,
        [`show${i}`]: false
      });

      await utils.pause(this.constructor.exit[states - i]);
    }

    this.setState({ hiding: false, hidden: true });

    this.onHidden();
    this.props.onHidden();
  }

  get shouldRender() {
    return this.state.active;
  }

  render() {
    return null;
  }
}
