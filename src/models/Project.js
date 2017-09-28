import Models from './Models';
import Route from './Route';
import Block from './Block';

export default Models.create('Project', {
  component: Object,
  active: Boolean,
  route: Route,
  id: String,
  type: String,
  name: String,
  tags: [String],
  hero: String,
  heroVideo: String,
  client: String,
  industry: String,
  description: String,
  impact: String,
  content: [Block]
});
