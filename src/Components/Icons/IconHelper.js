export default class IconHelper {
  static width = 2;
  static height = 2;

  constructor({ width = 32, height = 32 }) {
    this.width = width;
    this.height = height;
  }

  get style() {
    if (this.width > this.height) {
      return {
        width: `${(IconHelper.height / this.height) * this.width}em`,
        height: `${IconHelper.height}em`
      }
    }

    return {
      width: `${IconHelper.width}em`,
      height: `${(IconHelper.width / this.width) * this.height}em`
    }
  }

  get viewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

}
