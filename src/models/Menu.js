import Models from './Models';

export default Models.create('Menu', {
  showing: Boolean,
  active: Boolean,
  leaving: Boolean,
  id: String,
  hash: String,
  name: String
});
