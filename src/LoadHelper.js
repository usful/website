import { EventEmitter } from 'fbemitter';

const emitter = new EventEmitter();

const EVENT_TOTAL_UPDATED = 'totalUpdated';
const EVENT_PROGRESS_UPDATE = 'progressUpdate';
const EVENT_LOADED = 'loaded';
const INTERVAL = 40; //ms

export default class LoadHelper {
  static EVENT_TOTAL_UPDATED = EVENT_TOTAL_UPDATED;
  static EVENT_PROGRESS_UPDATE = EVENT_PROGRESS_UPDATE;
  static EVENT_LOADED = EVENT_LOADED;
  static total = 1;
  static progress = 1;
  static loaded = false;
  static _interval = null;

  static addItem() {
    this.total = this.total + 100;
    emitter.emit(EVENT_TOTAL_UPDATED, this.total);

    if (!this._interval) {
      this._interval = setInterval(() => this.tick(), INTERVAL);
    }

    return this.total;
  }

  static tick() {
    ++this.progress;
    this.emitProgress();
  }

  static itemLoaded() {
    this.progress = this.progress + (100 - this.progress % 100);
    this.emitProgress();
    return this.progress;
  }

  static emitProgress() {
    if (!this.loaded) {
      emitter.emit(EVENT_PROGRESS_UPDATE, this.progress / this.total);
    }

    this.checkLoaded();
  }

  static checkLoaded() {
    if (!this.loaded && this.progress >= this.total) {
      this.loaded = true;
      emitter.emit(EVENT_LOADED, this.total);
    }
  }

  static addProgressListener(listener) {
    return emitter.addListener(EVENT_PROGRESS_UPDATE, listener);
  }

  static addLoadedListener(listener) {
    return emitter.once(EVENT_LOADED, listener);
  }

  static removeAllListeners() {
    [EVENT_PROGRESS_UPDATE, EVENT_LOADED, EVENT_TOTAL_UPDATED].forEach(event =>
      emitter.removeAllListeners(event)
    );
  }
}
