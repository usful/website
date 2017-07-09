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
    showLevels: 2
  };

  constructor(props) {
    super(props);

    this.state = {
      showLevel: 0,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      showing: false,
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
    console.log(this.constructor.name, 'show', this.state.hidden);

    if (!this.state.hidden) {
      return;
    }

    this.setState({
      hidden: false,
      hiding: false,
      showing: true
    });

    setTimeout(() => this._showStep(1), 1);

    this.props.onShow();
  }

  _showStep(step) {
    console.log(this.constructor.name, '_showStep', this.state.showLevel, this.props.showLevels);
    
    const next = this.state.showLevel + step;

    if (next > this.props.showLevels) {
      this.props.onShown();
      return;
    }

    this.setState({
      showLevel: next,
      [`show${next}`]: step > 0
    });
  
    if (next === 1 && step < 0) {
      setTimeout(() => this.setState({ hidden: true }), 1);
      this.props.onHidden();
      return;
    }
    
    setTimeout(() => this._showStep(step), utils.timing);
  }

  hide() {
    console.log(this.constructor.name, 'hide', this.state.hidden);

    if (this.state.hidden) {
      return;
    }

    this.setState({
      hiding: true,
      showing: false
    });

    this._showStep(-1);

    this.props.onHide();
  }

  get transitionStyle() {
    return {
      transition: `opacity ${utils.timing}ms ease-out`
    };
  }

  render() {
    return null;
  }
}
