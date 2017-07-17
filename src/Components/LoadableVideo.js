import React, { Component } from 'react';
import LoadHelper from '../LoadHelper';

export default class LoadableVideo extends Component {
  constructor(props) {
    super(props);

    this.loaded = false;
    LoadHelper.addItem();
    //console.log('LoadableVideo', this.props.src, 'created');
  }

  onCanPlay() {
    if (!this.loaded) {
      LoadHelper.itemLoaded();
      this.loaded = true;
    }
    //console.log('LoadableVideo', this.props.src, 'canPlay');
  }

  onError() {
    this.onCanPlay();
  }

  render() {
    return (
      <video
        {...this.props}
        onCanPlay={e => this.onCanPlay(e)}
        onError={e => this.onError(e)}
      >
        <source src={this.props.src} />
      </video>
    );
  }
}
