import React from 'react';
import cx from 'classnames';

import styles from './ExperiencesPage.scss';
import utils from '../utils';

import Showable from '../Components/Showable';
import TopBar from '../Components/TopBar';
import Project from '../Components/Project';
import Footer from '../Components/Footer';
import ProjectHero from '../Components/ProjectHero';
import ExperienceLink from '../Components/ExperienceLink';
import Logos from '../Components/Logos';

//mouse scroll down by Nikita Tcherednikov from the Noun Project

export default class ExperiencesPage extends Showable {
  static enter = [
    250, //show1 -> 2,
    1000, //show3 -> 4
    0 //show3 -> 4
  ];

  static exit = [
    1000, //show4 -> show3
    250, //show3 -> show2,
    125 // show2 -> show1
  ];

  static defaultProps = {
    ...Showable.defaultProps,
    menu: [],
    projects: []
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hovering: null,
      selected: null,
      show1: true,
      show2: true,
      show3: true,
      showing: false,
      hiding: false,
      shown: true,
      hidden: false
    };
  }

  experienceMouseOver(experience) {
    this.setState({ hovering: experience.id });
  }

  experienceMouseLeave(experience) {
    if (this.state.hovering === experience.id) {
      this.setState({ hovering: null });
    }
  }

  render() {
    const { projects, menu } = this.props;
    const { hovering, show3 } = this.state;
    const selected = this.props.project;
    const hideElement = hovering || selected ? styles.hoverHide : '';

    return (
      <div className={cx(styles.experiencesPage, this.showableClasses(styles))}>
        {this.shouldRender ? (
          <div>
            <div className={styles.container}>
              {projects.map(experience => (
                <ProjectHero
                  key={experience.id}
                  visible={
                    (hovering === experience.id || selected === experience) &&
                    show3
                  }
                  project={experience}
                />
              ))}

              <TopBar className={cx(styles.top, hideElement)} menu={menu} />

              <section className={cx(styles.intro, hideElement)}>
                <h1>We are a technology, design,<br/> and experience studio.</h1>
                <hr />
                <p>
                  We have a creative multidisciplinary team<br/>
                  dedicated to designing and creating products and<br/>
                  experiences that shift consciousness.
                </p>
              </section>

              <section className={styles.experiences}>
                {projects.map((experience, i) => (
                  <ExperienceLink
                    key={experience.id}
                    experience={experience}
                    hovering={!!hovering || selected}
                    active={hovering === experience.id}
                    onClick={experience => (this.selected = experience)}
                    onMouseOver={experience =>
                      this.experienceMouseOver(experience)
                    }
                    onMouseLeave={experience =>
                      this.experienceMouseLeave(experience)
                    }
                  />
                ))}
              </section>
            </div>

            {projects.map((project, i) => (
              <Project
                key={project.id}
                project={project}
                active={selected === project}
                visible={selected === project}
                position={i + 1}
                count={projects.length}
                next={projects[utils.arrayClamp(i + 1, projects)]}
              />
            ))}

            <section className={styles.logos}>
              <h1>People we've worked with.</h1>

              <div>
                <Logos.AdStandardsCanada />
                <Logos.BauXiGallery />
                <Logos.Brookfield />
                <Logos.Cadillac />
                <Logos.CadillacFairview />
                <Logos.EdBurtynsky />
                <Logos.EmeryVillageBia />
                <Logos.EntertainmentDistrictBia />
                <Logos.FlowWater />
                <Logos.GiantContainers />
                <Logos.GreenOwlMobile />
                <Logos.HudsonsBayCompany />
                <Logos.Infiniti />
                <Logos.ItalianTradeCommission />
                <Logos.KiplingGroup />
                <Logos.Leyaata />
                <Logos.MinistryOfEnergy />
                <Logos.ModularFarms />
                <Logos.OakenFinancial />
                <Logos.PreciseParkLink />
                <Logos.Rogers />
                <Logos.SixCycle />
                <Logos.Sony />
                <Logos.Terroni />
                <Logos.ThomsonReuters />
                <Logos.TopshopTopman />
                <Logos.TorontoFinancialDistrictBia />
                <Logos.TorontoInternationalFilmFestival />
                <Logos.TourismVancouver />
                <Logos.UrbanCultivator />
                <Logos.VonWong />
                <Logos.Wattpad />
                <Logos.WildNorthFlowers />
                <Logos.ZipGrow />
              </div>
            </section>

            <Footer />
          </div>
        ) : null}
      </div>
    );
  }
}
