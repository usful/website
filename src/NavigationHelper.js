import { matchPath } from 'react-router-dom';
import data from './data';
import { EventEmitter } from 'fbemitter';
import utils from './utils';

const emitter = new EventEmitter();

export default class NavigationHelper {
  static history = [];
  static data = data;

  static setup() {
    if (!this._setup) {
      window.router.history.listen(location => this.routeChanged(location));
      emitter.emit('setup');
      this._setup = true;
    }
  }

  static async hashChanged(next, last) {
    let lastMenu, nextMenu;

    if (last && last.hash) {
      lastMenu = this.data.menu.find(menu => menu.hash === last.hash);

      if (lastMenu) {
        lastMenu._component.hide();
      }
    }

    if (next && next.hash) {
      nextMenu = this.data.menu.find(menu => menu.hash === next.hash);

      if (nextMenu) {
        nextMenu._component.show();
      }
    }
  }

  static async routeChanged(next) {
    let last, lastSection, lastProject;
    let nextSection, nextProject;

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
        nextSection._component.setActive();

        if (lastSection) {
          lastSection._leaving = true;
          emitter.emit('update');
          await lastSection._component.hide();
          lastSection._leaving = false;
          lastSection._active = false;
          lastSection._component.setInactive();
          emitter.emit('update');
        }

        nextSection._showing = true;
        emitter.emit('update');
        await nextSection._component.show();
        nextSection._showing = false;
        nextSection._active = true;
        emitter.emit('update');
      }

      if (nextProject) {
        await nextProject._component.setActive();
        await utils.pause(10);
      }
      
      if (lastProject) {
        lastProject._leaving = true;
        emitter.emit('update');
        await lastProject._component.hide();
        lastProject._leaving = false;
        lastProject._active = false;
        lastProject._component.setInactive();
        emitter.emit('update');
      }

      if (nextProject) {
        nextProject._showing = true;
        emitter.emit('update');
        await nextProject._component.show();
        nextProject._showing = false;
        nextProject._active = true;
        emitter.emit('update');
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

  static addListener(cb) {
    return emitter.addListener('update', cb);
  }
}
