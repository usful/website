import Models from './Models';
import Menu from './Menu';
import Section from './Section';

export default Models.create('App', {
  isSetup: Boolean,
  sections: [Section],
  menu: [Menu]
});