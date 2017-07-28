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

  static async routeChanged(next) {
    let last, lastSection, lastProject;
    let nextSection, nextProject;

    last = this.history[this.history.length - 1];

    if (last) {
      lastSection = this.data.sections.find(section =>
        matchPath(last.pathname, section.route)
      );

      if (lastSection) {
        lastProject = lastSection.projects.find(project =>
          matchPath(last.pathname, project.route)
        );
      }
    }

    console.log(
      `Route Changed ${last ? last.pathname : 'none'} => ${next.pathname}`
    );

    nextSection = this.data.sections.find(section =>
      matchPath(next.pathname, section.route)
    );

    if (nextSection) {
      nextProject = nextSection.projects.find(project =>
        matchPath(next.pathname, project.route)
      );

      if (nextSection !== lastSection) {
        if (lastSection) {
          await lastSection._component.hide();
          lastSection._active = false;
          emitter.emit('update');
        }

        await nextSection._component.show();
        nextSection._active = true;
        emitter.emit('update');
      }

      if (lastProject) {
        await lastProject._component.hide();
        lastProject._active = false;
        emitter.emit('update');
      }

      if (nextProject) {
        await nextProject._component.show();
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

  static addListener(cb) {
    return emitter.addListener('update', cb);
  }
}
