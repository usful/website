import Models from './Models';
import Route from './Route';
import Project from './Project';

export default Models.create('Section', {
  component: Object,
  active: Boolean,
  id: String,
  name: String,
  inMenu: Boolean,
  route: Route,
  projects: [Project]
});
