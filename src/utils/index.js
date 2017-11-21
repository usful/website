import arrayClamp from './arrayClamp';
import pause from './pause';
import MobileDetect from 'mobile-detect';
import { detect } from 'detect-browser';

const timing = 600; //500
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = !!mobileDetect.mobile();
const isTablet = !!mobileDetect.tablet();

export default {
  isMobile,
  isTablet,
  mobileDetect,
  timing,
  arrayClamp,
  pause,
  detect,
};
