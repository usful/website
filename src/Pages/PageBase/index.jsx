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
    visible: false
  };

  constructor(props) {
    super(props);

    this.state = {
      hiding: false,
      hidden: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && this.state.hidden) {
      this.show();
    } else if (!nextProps.visible && !this.state.hidden) {
      this.hide();
    }
  }

  componentDidMount() {
    if (this.props.visible && this.state.hidden) {
      this.show();
    } else if (!this.props.visible && !this.state.hidden) {
      this.hide();
    }
  }

  show() {
    if (!this.state.hidden) {
      return;
    }

    this.setState({
      hidden: false,
      hiding: true
    });

    setTimeout(() => this.setState({ hiding: false }), 1);
    setTimeout(() => this.props.onShown(), utils.fadeTiming);

    this.props.onShow();
  }

  hide() {
    if (this.state.hidden) {
      return;
    }

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
