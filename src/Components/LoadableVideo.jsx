import React, { PureComponent } from 'react';
import Video from './Video';

export default class LoadableVideo extends PureComponent {
  constructor(props) {
    super(props);

    this.loaded = false;
  }

  onCanPlay() {
    if (!this.loaded) {
      this.loaded = true;
    }
  }

  onError() {
    this.onCanPlay();
  }

  render() {
    return (
      <Video
        {...this.props}
        onCanPlay={e => this.onCanPlay(e)}
        onError={e => this.onError(e)}
      />
    );
  }
}
