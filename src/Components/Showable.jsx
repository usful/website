import React, { Component } from 'react';
import utils from '../utils/index';

export default class Showable extends Component {
  static showStates = 1;
  static timing = utils.timing;

  static defaultProps = {
    show: () => {},
    hide: () => {},
    onShown: () => {},
    onShow: () => {},
    onHide: () => {},
    onHidden: () => {},
    visible: false,
    active: false
  };

  constructor(props) {
    super(props);

    const state = {
      showing: false,
      hiding: false,
      hidden: true
    };

    for (let i = 1; i < this.constructor.showStates + 1; i++) {
      state[`show${i}`] = false;
      state[`hide${i}`] = false;
    }

    this.state = {
      ...state
    };
  }

  showableClasses(styles) {
    const names = {
      [styles.shown]: this.state.shown,
      [styles.showing]: this.state.showing,
      [styles.hiding]: this.state.hiding,
      [styles.hidden]: this.state.hidden
    };

    for (let i=1; i<this.constructor.showStates+1; i++) {
      names[styles[`show${i}`]] = this.state[`show${i}`];
      names[styles[`hide${i}`]] = this.state[`hide${i}`];
    }

    return names;
  }

  async show() {
    const states = this.constructor.showStates;
    
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

    this.props.onShow();

    await utils.pause(1);

    for (let i = 1; i < states + 1; i++) {
      this.setState({
        [`show${i}`]: true,
        [`hide${states - i + 1}`]: false
      });

      await utils.pause(this.constructor.timing);
    }
  
    this.setState({ showing: false });

    this.props.onShown();
  }

  async hide() {
    const states = this.constructor.showStates;
    
    if (this.state.hidden) {
      return;
    }

    await new Promise(resolve =>
      this.setState(
        {
          hiding: true,
          showing: false
        },
        resolve
      )
    );

    this.props.onHide();

    for (let i = states; i > 0; i--) {
      this.setState({
        [`hide${i}`]: true,
        [`show${i}`]: false
      });

      await utils.pause(this.constructor.timing);
    }
  
    this.setState({ hiding: false, hidden: true });
  
    this.props.onHidden();
  }

  render() {
    return null;
  }
}
