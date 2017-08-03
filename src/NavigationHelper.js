import { matchPath } from 'react-router-dom';
import data from './data';
import { EventEmitter } from 'fbemitter';

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

  static async hashChanged(next) {
    let last, lastMenu, nextMenu;
    debugger;

    last = this.history[this.history.length - 1];

    if (last && last.hash) {
      lastMenu = this.data.menu.find(menu => menu.slug === last.hash);

      if (lastMenu) {
        lastMenu._component.show();
      }
    }

    if (next && next.hash) {
      nextMenu = this.data.menu.find(menu => menu.slug === next.hash);

      if (nextMenu) {
        nextMenu._component.show();
      }
    }
  }

  static async routeChanged(next) {
    let last, lastSection, lastProject;
    let nextSection, nextProject;

    last = this.history[this.history.length - 1];

    this.hashChanged(next);

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
        if (lastSection) {
          lastSection._leaving = true;
          emitter.emit('update');
          await lastSection._component.hide();
          lastSection._leaving = false;
          lastSection._active = false;
          emitter.emit('update');
        }

        nextSection._showing = true;
        emitter.emit('update');
        await nextSection._component.show();
        nextSection._showing = false;
        nextSection._active = true;
        emitter.emit('update');
      }

      if (lastProject) {
        lastProject._leaing = true;
        emitter.emit('update');
        await lastProject._component.hide();
        lastProject._leaving = false;
        lastProject._active = false;
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

    this.history.push({ ...next });
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
