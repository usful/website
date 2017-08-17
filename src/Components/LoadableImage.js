import React, { Component } from 'react';
import LoadHelper from '../LoadHelper';

export default class LoadableImage extends Component {
  constructor(props) {
    super(props);

    LoadHelper.addItem();
  }

  onLoad() {
    LoadHelper.itemLoaded();
  }

  onError() {
    LoadHelper.itemLoaded();
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
