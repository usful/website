import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';
import data from '../../data';
import FooterTagLine from '../../Components/FooterTagLine';
import Footer from '../../Components/Footer';
import Block from '../../Components/Block';
import Boxes from './Boxes';

import Showable from '../../Components/Showable';

const section = data.sections.find(section => section.name === 'Change For A Dollar Site');

const carousalImages = [
  {
    id: 'carousal-1',
    type: 'MediaBlock',
    mediaType: 'Image',
    url:'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_+housing.jpg'
  },
  {
    id: 'carousal-2',
    type: 'MediaBlock',
    mediaType: 'Image',
    url:'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_animals.jpg'
  },
  {
    id: 'carousal-3',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_civil+rights.jpg'
  },
  {
    id: 'carousal-4',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_education.jpg'
  },
  {
    id: 'carousal-5',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_environment.jpg'
  },
  {
    id: 'carousal-6',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_graduation.jpg'
  },
  {
    id: 'carousal-7',
    type: 'MediaBlock',
    mediaType: 'Image',
    url: 'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CauseCarousal/CFD+site_healthcare.jpg'
  },
];

export default class TechnologiesPage extends Showable {
  static enter = [125, 600, 600, 200];
  static exit = [600, 300, 125, 300];

  static defaultProps = {
    ...Showable.defaultProps,
    menu: [],
    section: {
      projects: []
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.shouldRender) {
      return null;
    }

    return (
      <div className={cx(styles.cfdPage, this.showableClasses(styles))}>
          <div>
            <section className={styles.intro}>
              <div className={styles.left}>
                <img
                  src='https://s3.amazonaws.com/usful-portfolio/img/technology/cfd-logo.png'
                  className={styles.logo}
                />
                <div className={styles.introCopy}>
                  <h1 className={styles.hero}>Change For A Dollar</h1>
                  <p className={styles.subTitle}>Automated Cashless Giving</p>
                </div>
              </div>
              <div className={styles.right}>
                <img
                  className={styles.donationHistoryPNG}
                  src='https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CFD_donation+history.png'
                />

                <img
                  className={styles.charityProfilePNG}
                  src='https://s3.amazonaws.com/usful-portfolio/cfdSite/img/charity+profile.png'
                />
              </div>
            </section>
            <section className={styles.blurb}>
              <hr />
                <h1> Making it easier to support the causes that matter to you </h1>
                <p> The future of giving is digital. We made Change for a Dollar to empower the next generation of donors.</p>
              <hr />
            </section>
            <section className={styles.stepOne}>
              <Boxes
                className={styles.boxes}
                box1Style={styles.box1}
                box2Style={styles.box2}
                box3Style={styles.box3}
                title='Choose a Cause'
                block={
                  {
                    type: 'CarouselBlock',
                    content: carousalImages,
                    width: 100,
                    className: styles.carousal,
                  }
                }
                icon='https://s3.amazonaws.com/usful-portfolio/cfdSite/img/checklist.png'
                text='Sign up with Change for a Dollar and choose the charities you would like to support. Search for a charity you know or discover a new one.'
              />
            </section>
            <section className={styles.stepTwo}>
              <Boxes
                className={styles.boxes}
                box1Style={styles.box1}
                box2Style={styles.box2}
                box3Style={styles.box3}
                title='Link Your Cards'
                block={
                  {
                    id: 'image-2-1',
                    type: 'MediaBlock',
                    mediaType: 'Image',
                    url:'https://s3.amazonaws.com/usful-portfolio/cfdSite/img/CFD-StepTwo-Image.jpg',
                    width: 100,
                  }
                }
                icon='https://s3.amazonaws.com/usful-portfolio/cfdSite/img/bank-cards.png'
                text='Link your debit or credit card and set your donation preferences, cap your monthly giving at an amount you are comfortable with. All your data is safe and secure.'
              />
            </section>
            <section className={styles.stepThree}></section>
            <FooterTagLine text="Get In Touch" />
          </div>
      </div>
    );
  }
}
