import React, { Component } from 'react';
import utils from '../../utils';

export default class PageBase extends Component {
  static defaultProps = {
    show: () => {},
    hide: () => {},
    onShown: () => {},
    onShow: () => {},
    onHide: () => {},
    onHidden: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      hiding: false,
      hidden: false
    };
  }
  
  show() {
    this.setState(
      {
        hidden: false,
        hiding: true
      }
    );
  
    setTimeout(() => this.setState({ hiding: false }), 1);
    setTimeout(() => this.props.onShown(), utils.fadeTiming);

    this.props.onShow();
  }

  hide() {
    this.setState({
      hiding: true
    });

    setTimeout(() => {
      this.setState({ hidden: true });
      this.props.onHidden();
    }, utils.fadeTiming);
    
    this.props.onHide();
  }

  get transitionStyle() {
    return {
      transition: `opacity ${utils.fadeTiming}ms ease-out`
    };
  }

  render() {
    return null;
  }
}
