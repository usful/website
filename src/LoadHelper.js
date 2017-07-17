import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();

export default class LoadHelper {
  static total = 1;
  static progress = 1;
  static loaded = false;

  static addItem() {
    ++this.total;
    emitter.emit('totalUpdated', this.total);
    return this.total;
  }

  static itemLoaded() {
    ++this.progress;
    emitter.emit('progressUpdate', this.progress / this.total);

    this.checkLoaded();

    return this.progress;
  }

  static checkLoaded() {
    if (!this.loaded && this.progress >= this.total) {
      this.loaded = true;
      emitter.emit('loaded', this.total);
    }
  }

  static addProgressListener(listener) {
    return emitter.addListener('progressUpdate', listener);
  }

  static addLoadedListener(listener) {
    return emitter.once('loaded', listener);
  }

  static addListener({ event, listener }) {
    return emitter.addListener(event, listener);
  }

  static once({ event, listener }) {
    return emitter.once(event, listener);
  }

  static removeAllListeners() {
    ['progressUpdate', 'loaded'].forEach(event =>
      emitter.removeAllListeners(event)
    );
  }
}
