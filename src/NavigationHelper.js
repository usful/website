import { matchPath } from 'react-router-dom';
import data from './data';

export default class NavigationHelper {
  static currentPage = null;
  static nextPage = null;
  static lastPage = null;

  static pages = [
    {
      name: 'home',
      section: null,
      component: null,
      active: false,
      path: {
        path: '/',
        exact: true,
        strict: false
      }
    },
    {
      name: 'experiences',
      section: data.sections.find(section => section.slug === 'experiences'),
      component: null,
      active: false,
      path: {
        path: '/experiences',
        strict: false
      },
      projectPath: {
        path: '/experiences/:project',
        strict: false
      }
    },
    {
      name: 'technology',
      section: data.sections.find(section => section.slug === 'technology'),
      component: null,
      active: false,
      path: {
        path: '/technology',
        strict: false
      },
      projectPath: {
        path: '/technology/:project',
        strict: false
      }
    }
  ];

  static showNextPage() {
    if (this.nextPage) {
      this.currentPage = this.nextPage;
      this.nextPage = null;

      console.log(
        Date.now(),
        'NavigationHelper.showNextPage showing',
        this.currentPage
      );

      this.currentPage.component.show();
    }
  }

  static matchRoute(pathname) {
    console.log(Date.now(), 'NavigationHelper.matchRoute', pathname);

    this.pages.forEach(page => {
      const match = matchPath(pathname, page.path);

      if (match) {
        if (page.section) {
          page.section.active = true;

          if (page.section.projects) {
            const projectMatch = matchPath(pathname, page.projectPath);

            if (projectMatch) {
              console.log(
                Date.now(),
                'NavigationHelper.matchRoute project match',
                projectMatch
              );

              page.section.projects.forEach(
                project =>
                  (project.active =
                    project.slug === projectMatch.params.project)
              );

              //Page has already been transitioned to.
              if (page.active) {
                return;
              }
            }
          }
        }

        if (this.currentPage) {
          console.log(
            Date.now(),
            'NavigationHelper.transitionPages hiding',
            this.currentPage
          );
          this.currentPage.component.hide();
        }

        this.lastPage = this.currentPage;
        this.currentPage = null;

        page.active = true;

        this.nextPage = page;
      } else {
        if (page.section) {
          page.section.active = false;
        }

        page.active = false;
      }
    });
  }
}
