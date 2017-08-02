import React, { Component } from 'react';
import utils from '../../utils';

export default class PageBase extends Component {
  static numberOfStates = 1;
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

    for (let i = 1; i < this.constructor.numberOfStates + 1; i++) {
      state[`show${i}`] = false;
      state[`hide${i}`] = false;
    }

    this.state = {
      ...state
    };
  }

  async show() {
    const states = this.constructor.numberOfStates;
    
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
      console.log(this.constructor.name, 'showing', states, `show${i}`, `hide${states - i + 1}`);
  
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
    const states = this.constructor.numberOfStates;
    
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
      console.log(this.constructor.name, 'hiding', states, `hide${i}`, `show${states - i + 1}`);
      this.setState({
        [`hide${i}`]: true,
        [`show${states - i + 1}`]: false
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
