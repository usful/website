import sections from './sections';
import Models from '../models/Models';
import AppModel from '../models/App';

const app = new AppModel();

Models.addOnReady(() => {
  AppModel.isSetup = false;
  AppModel.sections = sections;
  AppModel.menu = [
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
  ];
});

export default app;
