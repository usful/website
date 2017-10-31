import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import utils from '../../utils';
import data from '../../data';
import FooterTagLine from '../../Components/FooterTagLine';
import Footer from '../../Components/Footer';

import Showable from '../../Components/Showable';

const section = data.sections.find(section => section.name === 'Change For A Dollar Site');

const cfdGuideBlocks = [
  {
    title:'Choose A Cause',
    image: 'https://image.ibb.co/kAQKJG/icons8_Checklist_100.jpg',
    description: 'Sign up with Change for a Dollar and choose the charities you would like to support. Search for a charity you know or discover a new one.',
  },
  {
    title:'Link Your Cards',
    image: 'https://image.ibb.co/hyHYdG/icons8_Bank_Cards_100.jpg',
    description: 'Link your debit or credit card and set your donation preferences, cap your monthly giving at an amount you are comfortable with. All your data is safe and secure.',
  },
  {
    title:'Donate With Every Purchase',
    image: 'https://image.ibb.co/eXSYdG/icons8_Coins_100.jpg',
    description: 'Live your life - go for coffee with your friends, have night out, grab groceries. Change for a Dollar automatically rounds up all of your purchases to the nearest dollar and donates the change.',
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
              <div className={styles.topBar}>
                <img
                  src='https://s3.amazonaws.com/usful-portfolio/img/technology/cfd-logo.png'
                  className={styles.logo}
                />
              </div>
              <div className={styles.introCopy}>
                <h1 className={styles.hero}>Change For A Dollar</h1>
                <p className={styles.subTitle}>Automated Cashless Giving</p>
              </div>
            </section>
            <section className={styles.blurb}>
              <hr />
                <h1> Making it easy to support the causes that matter most to you </h1>
                <p> With cash increasingly becoming a thing of the past, the way we give to charities is changing. We made Change for a Dollar to empower the next generation of donors.</p>
              <hr />
            </section>
            <section className={styles.info}>
              <div className={styles.guide}>
                {
                  cfdGuideBlocks.map(
                    block => (
                      <div className={styles.guideBlock}>
                        <div className={styles.left}>
                          <h2>{block.title}</h2>
                          <img src={block.image} />
                        </div>
                        <div className={styles.right}>
                          <p>{block.description}</p>
                        </div>
                      </div>
                    )
                  )
                }
              </div>
            </section>
            <FooterTagLine text="Want to collaborate on a project?" />
          </div>
      </div>
    );
  }
}
