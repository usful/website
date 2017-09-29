import Models from './Models';
import Route from './Route';
import Project from './Project';
import Block from './Block';

export default Models.create('Section', {
  component: Object,
  active: Boolean,
  id: String,
  name: String,
  inMenu: Boolean,
  route: Route,
  projects: [Project],
  content: [Block]
});
