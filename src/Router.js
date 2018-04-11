import React from 'react';
import Router from './utils/Router';
import AppState from './data';

const notFound = {
  path: '/not-found',
  title: `404 Error // Usful ❤ ${new Date().getFullYear()}`,
  action: () => {
    return ({ app }) => (
      <div>
        <h1>That resource could not be found.</h1>
      </div>
    );
  }
};

const error = {
  path: '/error',
  title: `Uh-oh! // Usful ❤ ${new Date().getFullYear()}`,
  action: () => {
    const message = window.lastError
      ? `${window.lastError.message} - ${window.lastError.stack}`
      : 'Unknown';

    const route = router.routeHistory[router.routeHistory.length - 2];

    return ({ app }) => (
      <div>
        <h1>An error occurred.</h1>
        <h2>
          Please try again. The details below may help us debug the problem.
        </h2>
        <h3>Route</h3>
        <pre>{JSON.stringify(route)}</pre>
        <h3>Stack Trace</h3>
        <pre>{message}</pre>
      </div>
    );
  }
};

const home = {
  path: '/',
  title: `Usful ❤ ${new Date().getFullYear()}`,
  action: () => {
    AppState.project = null;

    //Google analytics
    window.analytics('event', 'page_view', {
      page_location: `https://usful.co/`,
      page_path: ''
    });

    return ({ app }) => null;
  }
};

const routes = [home, notFound, error].concat(
  AppState.projects.map(project => ({
    title: `${project.name} // Usful ❤ ${new Date().getFullYear()}`,
    path: project.route.path,
    action: () => {

      //Google analytics
      window.analytics('event', 'page_view', {
        page_location: `https://usful.co${project.route.path}`,
        page_path: project.route.path
      });

      console.log('Routing', project.name, project.id);

      AppState.project = project.id;

      return ({ app }) => null;
    }
  }))
);

const router = new Router({
  baseName: '',
  appState: AppState,
  routes
});

export default router;
