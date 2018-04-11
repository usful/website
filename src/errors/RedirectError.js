import ExtendableError from 'es6-error';

export default class RedirectError extends ExtendableError {
  static errorName = 'RedirectError';

  constructor(path) {
    super();

    this.name = 'RedirectError';
    this.path = path;
    this.status = 301;
  }
}
