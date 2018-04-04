import Models from './Models';
import Menu from './Menu';
import Project from './Project';
import Route from './Route';

export default Models.create('App', {
  isSetup: Boolean,
  projects: [Project],
  project: String,
  menu: [Menu],
  route: Route
});
