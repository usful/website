import React, { Component } from 'react';
import LoadHelper from '../LoadHelper';

export default class LoadableImage extends Component {
  constructor(props) {
    super(props);

    LoadHelper.addItem();
    //console.log('LoadableImage', this.props.src, 'created');
  }

  onLoad() {
    LoadHelper.itemLoaded();
    //console.log('LoadableImage', this.props.src, 'loaded');
  }

  onError() {
    LoadHelper.itemLoaded();
    //console.log('LoadableImage', this.props.src, 'error');
  }

  render() {
    return (
      <img
        {...this.props}
        onLoad={e => this.onLoad()}
        onError={e => this.onError()}
      />
    );
  }
}
