import Models from './Models';

export default Models.create('Block', {
  id: String,
  type: String,
  text: String,
  url: String,
  align: String,
  by: String,
  content: ['Block'],
  animation: String,
  padding: Number
});
