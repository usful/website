import arrayClamp from './arrayClamp';
import pause from './pause';
import MobileDetect from 'mobile-detect';

const timing = 600; //500
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = !!mobileDetect.mobile();
export default {
  isMobile,
  mobileDetect,
  timing,
  arrayClamp,
  pause
};
