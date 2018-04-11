import ExtendableError from 'es6-error';

export default class NotFoundError extends ExtendableError {
  static errorName = 'NotFoundError';

  constructor(message = 'This resource was not found.') {
    super();

    this.name = 'NotFoundError';
    this.message = message;
    this.status = 404;
  }
}
