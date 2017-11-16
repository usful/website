import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';
import data from '../../data';

import Showable from '../../Components/Showable';
import TopBar from '../../Components/TopBar';
import Project from '../../Components/Project';
import Footer from '../../Components/Footer';
import ProjectHero from '../../Components/ProjectHero';

import ExperienceLink from './ExperienceLink';
import Logos from '../../Components/Logos';

//mouse scroll down by Nikita Tcherednikov from the Noun Project

const menu = [
  {
    href: '/technology',
    name: 'Technology'
  },
  {
    href: '/market',
    name: 'Market'
  }
].concat(data.menu.map(item => ({ href: item.hash, name: item.name })));
const section = data.sections.find(section => section.name === 'Experiences');

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
    section: {
      projects: []
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
      hovering: null,
      selected: null
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
    const { hovering, show3 } = this.state;

    const selected = section.projects.find(
      experience => experience.active || experience.showing
    );

    const hideElement = hovering || selected ? styles.hoverHide : '';

    return (
      <div className={cx(styles.experiencesPage, this.showableClasses(styles))}>
        {this.shouldRender ? (
          <div>
            <div className={styles.container}>
              {section.projects.map(experience => (
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
                <h1>Creating experiences with purpose.</h1>
                <hr />
                <p>
                  We shake up the stale concept of traditional outreach with
                  unique, interactive, physical and digital installations
                  designed to inspire both conversations, and shifts in
                  thinking; offering your brand a deep, meaningful association
                  that your audience won’t forget.
                </p>
              </section>

              <section className={styles.experiences}>
                {section.projects.map((experience, i) => (
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

            {section.projects.map((project, i) => (
              <Project
                ref={el => (project.component = el || project.component)}
                key={project.id}
                project={project}
                selected={project.active}
                position={i + 1}
                count={section.projects.length}
                next={
                  section.projects[utils.arrayClamp(i + 1, section.projects)]
                }
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
                <Logos.CoteDeBoeuf />
                <Logos.Dekefir />
                <Logos.EdBurtynsky />
                <Logos.EmeryVillageBia />
                <Logos.EntertainmentDistrictBia />
                <Logos.FifthTownChese />
                <Logos.FlowWater />
                <Logos.FornoCultura />
                <Logos.GiantContainers />
                <Logos.GreenOwlMobile />
                <Logos.HudsonsBayCompany />
                <Logos.Infiniti />
                <Logos.ItalianTradeCommission />
                <Logos.JoshuaJensenNagle />
                <Logos.KiplingGroup />
                <Logos.Leyaata />
                <Logos.Menkes />
                <Logos.MinistryOfEnergy />
                <Logos.MinistryOfHealthLongTermCare />
                <Logos.ModularFarms />
                <Logos.OakenFinancial />
                <Logos.PreciseParkLink />
                <Logos.RevelFoods />
                <Logos.Rodneys />
                <Logos.Rogers />
                <Logos.Sanagans />
                <Logos.SixCycle />
                <Logos.Sony />
                <Logos.SteamWhistle />
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
