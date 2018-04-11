import Models from './Models';

export default Models.create('Route', {
  loading: Boolean,
  path: String,
  exact: Boolean,
  hash: String,
  strict: Boolean
});
