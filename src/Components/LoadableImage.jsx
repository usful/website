import React, { PureComponent } from 'react';

export default class LoadableImage extends PureComponent {
  constructor(props) {
    super(props);
  }

  onLoad() {
  }

  onError() {
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
