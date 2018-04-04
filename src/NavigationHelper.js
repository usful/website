import { matchPath } from 'react-router-dom';
import data from './data';
import utils from './utils';

const TRACKING_ID = 'UA-57226902-1';

let analytics;
try {
  analytics = gtag;
} catch (e) {
  analytics = () => {};
}

analytics('js', new Date());
analytics('config', TRACKING_ID);

export default class NavigationHelper {
  static history = [];
  static data = data;

  static setup() {
    if (!data.isSetup) {
      window.router.history.listen(location => this.routeChanged(location));
      data.isSetup = true;
    }
  }

  static changeTitle(next) {
    document.title = `${next.name === 'Home' ? 'Usful' : next.name} ❤  ${new Date().getFullYear()}`;
  }

  static async hashChanged(next, last) {
    next.shown = true;
    last.shown = false;
  }

  static async routeChanged(next) {
    let last, lastProject, nextProject;

    //Google analytics
    analytics('event', 'page_view', {
      page_location: `https://usful.co/${next.pathname}`,
      page_path: next.pathname
    });

    last = this.history[this.history.length - 1];
    this.history.push({ ...next });

    this.hashChanged(next, last);

    if (last) {
      if (last.pathname === next.pathname) {
        return;
      }

      lastProject = this.data.projects.find(project =>
        matchPath(last.pathname, project.route)
      );
    }

    nextProject = this.data.projects.find(project =>
      matchPath(next.pathname, project.route)
    );

    if (nextProject) {
      nextProject.active = true;
      await utils.pause(10);
    }

    if (lastProject) {
      lastProject.leaving = true;
      lastProject.leaving = false;
      lastProject.active = false;
    }

    if (nextProject) {
      nextProject.showing = true;
      nextProject.showing = false;
      nextProject.active = true;
    }
  }

  static getMenu(name) {
    return NavigationHelper.data.menu.find(menu => menu.name === name);
  }
}
