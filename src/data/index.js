import AppModel from '../models/App';
import projects from './sections/experiences/projects';

const app = new AppModel({
  isSetup: false,
  projects: projects,
  project: null,
  menu: [
    {
      showing: false,
      active: false,
      leaving: false,
      id: 'a4',
      hash: '#about',
      name: 'About',
    },
    {
      showing: false,
      active: false,
      leaving: false,
      id: 'a5',
      hash: '#contact',
      name: 'Contact',
    },
  ],
});

export default app;
