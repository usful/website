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
    console.log('NavigationHelper.showNextPage');

    if (this.nextPage) {
      this.nextPage.component.show();

      this.currentPage = this.nextPage;
      this.nextPage = null;

      console.log(
        'NavigationHelper.showNextPage showing',
        this.currentPage.name
      );
    }
  }

  static matchRoute(pathname) {
    this.pages.forEach(page => {
      const match = matchPath(pathname, page.path);

      if (match) {
        console.log(
          'NavigationHelper.matchRoute',
          pathname,
          page.path.path,
          !!match
        );

        if (page.section) {
          page.section.active = true;

          if (page.section.projects) {
            const projectMatch = matchPath(pathname, page.projectPath);

            if (projectMatch) {
              page.section.projects.forEach(
                project =>
                  (project.active =
                    project.slug === projectMatch.params.project)
              );

              //Page has already been transitioned to.
              if (page.active) {
                return;
              }
            } else {
              page.section.projects.forEach(
                project => (project.active = false)
              );
            }
          }
        }

        if (page !== this.currentPage) {
          console.log(
            'NavigationHelper.transitionPages checking',
            page,
            this.currentPage
          );

          if (this.currentPage) {
            console.log(
              'NavigationHelper.transitionPages hiding',
              this.currentPage.name
            );

            this.currentPage.component.hide();

            this.lastPage = this.currentPage;
            this.currentPage = null;
          }

          page.active = true;

          this.nextPage = page;
        }
      } else {
        if (page.section) {
          page.section.active = false;
        }

        page.active = false;
      }
    });
  }
}
