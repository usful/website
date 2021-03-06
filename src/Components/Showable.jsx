import React, { PureComponent } from 'react';
import utils from '../utils';

export default class Showable extends PureComponent {
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
    active: false,
  };

  constructor(props) {
    super(props);

    const state = {
      showing: false,
      hiding: false,
      shown: false,
      hidden: true
    };

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

  componentDidMount() {
    if (this.props.visible) {
      this.show();
    } else if (!this.props.visible) {
      this.hide();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible && !this.props.visible) {
      this.hide();
    }

    if (!prevProps.visible && this.props.visible) {
      this.show();
    }
  }

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

    this.onShow();
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
    return this.props.active;
  }

  render() {
    return null;
  }
}
