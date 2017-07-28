import React, { Component } from 'react';
import utils from '../../utils';

export default class PageBase extends Component {
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

    this.state = {
      showing: false,
      hiding: false,
      hidden: true
    };
  }

  async show() {
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
  
    await this.show1();
  }

  async show1() {
    await utils.pause(utils.timing);

    this.props.onShown();
  }

  async hide() {
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

    await this.hide1();
  }

  async hide1() {
    await utils.pause(utils.timing);

    this.setState(
      {
        hidden: true,
        hiding: false
      },
      () => this.props.onHidden()
    );
  }

  render() {
    return null;
  }
}
