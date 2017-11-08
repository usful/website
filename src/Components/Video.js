import React, { Component } from 'react';
import utils from '../utils';

const browser = utils.detect();

export default class Video extends Component {
  static defaultProps = {
    play: false,
    autoPlay: false,
    muted: true,
    loop: true,
    playsInline: true
  };

  constructor(props) {
    super(props);
    this.chromeFix = browser.name !== 'chrome';
  }

  play() {
    this.refs.vid.play();
  }

  pause() {
    this.refs.vid.pause();
  }

  componentDidMount() {
    if (this.props.play) {
      this.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.play && !this.props.play) {
      this.play();
    } else if (!nextProps.play && this.props.play) {
      this.pause();
    }
  }

  render() {
    return (
      <video
        ref="vid"
        className={this.props.className}
        style={this.props.style}
        muted={this.props.muted}
        loop={this.props.loop}
        onCanPlay={() => {
          this.chromeFix = true;
          this.props.onCanPlay()
        }}
        onError={this.props.onError}
        autoPlay={this.props.autoPlay}
        playsInline={this.props.playsInline}
        onSuspend={() => {
          if(!this.chromeFix) {
            this.chromeFix = true;
            this.refs.vid.src = this.props.src;
            this.refs.vid.load();
          }
        }}
      >
        <source src={this.props.src} />
      </video>
    );
  }
}
