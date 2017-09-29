import sections from './sections';
import AppModel from '../models/App';

const app = new AppModel({
  isSetup: false,
  sections: sections,
  menu: [
    {
      showing: false,
      active: false,
      leaving: false,
      id: 'a4',
      hash: '#about',
      name: 'About'
    },
    {
      showing: false,
      active: false,
      leaving: false,
      id: 'a5',
      hash: '#contact',
      name: 'Contact'
    }
  ]
});

export default app;
