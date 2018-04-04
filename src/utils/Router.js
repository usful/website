import createHistory from 'history/createBrowserHistory';
import toRegex from 'path-to-regexp';
import queryString from 'query-string';
import { RedirectError, InvalidRouteError, NotFoundError } from '../errors';
import Route from '../models/Route';

function matchURI(path, uri) {
  const keys = [];
  const pattern = toRegex(path, keys);
  const match = pattern.exec(uri);

  if (!match) {
    return { params: null, query: null };
  }

  const params = Object.create(null);

  for (let i = 1; i < match.length; i++) {
    params[keys[i - 1].name] = match[i] !== undefined ? match[i] : undefined;
  }

  const query = queryString.parse(window.location.search);

  return { params, query };
}

export default class Router {
  constructor({ routes = [], appState = {} }) {
    this.routes = routes;
    this.routeHistory = [];
    this.listenCallback = () => {};
    this.appState = appState;

    this.history = createHistory({
      basename: ''
    });

    this.history.listen(location => this.render(location));
  }

  isValidPath(path) {
    return !(
      path.includes('http://') ||
      path.includes('https://') ||
      path.includes('mailto:') ||
      path.includes('tel:')
    );
  }

  interceptAnchors(e) {
    const checkElement = (el, depth) => {
      if (
        el.tagName === 'A' &&
        el.attributes.href &&
        this.isValidPath(el.attributes.href.value)
      ) {
        e.preventDefault();
        e.stopPropagation();
        this.push(el.attributes.href.value);
      } else if (depth < 5) {
        checkElement(el.parentElement, depth + 1);
      }
    };

    checkElement(e.target, 1);
  }

  resolve(context) {
    for (const route of this.routes) {
      const uri = context.error ? '/error' : context.pathname;

      const { params, query } = matchURI(route.path, uri);

      if (!params) {
        continue;
      }

      this.appState.route = new Route({
        loading: true,
        path: context.pathname,
        hash: context.hash
      });

      //TODO: we may actually do something with this route model.
      this.routeHistory.push(this.appState.route.toJSON());

      const result = route.action({ ...context, params, query });

      if (result) {
        if (route.scrollToTop !== false) {
          setTimeout(() => window.scrollTo(0, 0), 150);
        }

        if (route.title) {
          document.title = route.title;
        }

        return result;
      }
    }

    throw new InvalidRouteError(context.pathname);
  }

  replace() {
    return this.history.replace.apply(this.history, arguments);
  }

  push() {
    return this.history.push.apply(this.history, arguments);
  }

  back() {
    return this.history.goBack();
  }

  render(location) {
    try {
      const renderedRoute = this.resolve(location);
      this.listenCallback(renderedRoute);
    } catch (err) {
      if (err.constructor === RedirectError) {
        this.push(err.path);
      } else if (
        err.constructor === InvalidRouteError ||
        err.constructor === NotFoundError
      ) {
        this.replace('/not-found');
      } else {
        throw err;
      }
    }
  }

  reload() {
    return this.render(this.history.location);
  }

  listen(cb) {
    this.listenCallback = cb;
  }

  renderCurrentRoute() {
    this.render(this.history.location);
  }
}
