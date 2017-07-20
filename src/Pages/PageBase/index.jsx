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

  show() {
    if (!this.state.hidden) {
      return;
    }

    this.setState({
      hidden: false,
      hiding: false,
      showing: true
    }, () => {
      this.show1();

      this.props.onShow();
    });
  }

  async show1() {
    await utils.pause(utils.timing);

    this.props.onShown();
  }

  hide() {
    if (this.state.hidden) {
      return;
    }

    this.setState({
      hiding: true,
      showing: false
    }, () => {
      this.hide1();
      this.props.onHide();
    });
  }

  async hide1() {
    await utils.pause(utils.timing);

    this.setState({
      hidden: true,
      hiding: false
    }, () => this.props.onHidden());
  }


  render() {
    return null;
  }
}
