import Models from './Models';

export default Models.create('Route', {
  path: String,
  exact: Boolean,
  strict: Boolean
});