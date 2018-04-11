import ExtendableError from 'es6-error';

export default class InvalidRouteError extends ExtendableError {
  static errorName = 'InvalidRouteError';

  constructor(path) {
    super();

    this.name = 'InvalidRouteError';
    this.path = path;
    this.status = 404;
  }
}
