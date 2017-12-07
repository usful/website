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
    document.title = `${next.name === 'Home' ? 'Usful' : next.name} ❤  2017`;
  }

  static async hashChanged(next, last) {
    const toggle = (location, action) => {
      if (location && location.hash) {
        const menu = this.data.menu.find(menu => menu.hash === location.hash);

        if (menu) {
          menu.component[action]();
        }
      }
    };

    toggle(last, 'hide');
    toggle(next, 'show');
  }

  static async routeChanged(next) {
    let last, lastSection, lastProject;
    let nextSection, nextProject;

    //Google analytics
    analytics('event', 'page_view', {
      'page_location': `https://usful.co/${next.pathname}`,
      'page_path': next.pathname
    });

    last = this.history[this.history.length - 1];
    this.history.push({ ...next });

    this.hashChanged(next, last);

    if (last) {
      if (last.pathname === next.pathname) {
        return;
      }

      lastSection = this.data.sections.find(section =>
        matchPath(last.pathname, section.route)
      );

      if (lastSection) {
        lastProject = lastSection.projects.find(project =>
          matchPath(last.pathname, project.route)
        );
      }
    }

    nextSection = this.data.sections.find(section =>
      matchPath(next.pathname, section.route)
    );

    if (nextSection) {
      nextProject = nextSection.projects.find(project =>
        matchPath(next.pathname, project.route)
      );

      if (nextSection !== lastSection) {
        NavigationHelper.changeTitle(nextSection);
        nextSection.component.setActive();

        if (lastSection) {
          lastSection.leaving = true;
          await lastSection.component.hide();
          lastSection.leaving = false;
          lastSection.active = false;
          lastSection.component.setInactive();
        }

        nextSection.showing = true;
        await nextSection.component.show();
        nextSection.showing = false;
        nextSection.active = true;
      }

      if (nextProject) {
        await nextProject.component.setActive();
        await utils.pause(10);
      }

      if (lastProject) {
        lastProject.leaving = true;
        await lastProject.component.hide();
        lastProject.leaving = false;
        lastProject.active = false;
        lastProject.component.setInactive();
      }

      if (nextProject) {
        nextProject.showing = true;
        await nextProject.component.show();
        nextProject.showing = false;
        nextProject.active = true;
      }
    }
  }

  static getSection(name) {
    return NavigationHelper.data.sections.find(
      section => section.name === name
    );
  }

  static getMenu(name) {
    return NavigationHelper.data.menu.find(menu => menu.name === name);
  }
}
