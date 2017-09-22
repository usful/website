export default {
  _component: null,
  _active: false,
  route: {
    path: '/technology/lane',
    strict: true
  },
  id: 'tp3',
  type: 'technology',
  name: 'Lane',
  tags: [],
  hero: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-hero.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-hero.mp4',
  industry: 'Commercial Real Estate, SaaS',
  tagLine: 'The first tenant engagement solution for commercial real estate.',
  description:
    'Commercial Real Estate is one of the biggest asset classes in the world, but one that’s had little disruption. Noticing a growing need for active tenant engagement in the industry, and a clear void of technology solutions, we created [Lane](https://www.joinlane.com), the first fully featured tenant engagement solution for CRE. Lane brings modern SaaS & Mobile technology to an industry ready for disruption, becoming the central operating system for office buildings and connecting tenants with services and amenities.',
  impact:
    'Since the nationwide launch in 2016, the [Lane](https://www.joinlane.com) platform engages 60,000 tenants daily, and is used by companies with portfolios of over 200MM SqFt. Thanks to training and support from the [Lane](https://www.joinlane.com) team, property management companies now have an efficient and modern way to communicate with their tenants, increase engagement, and reduce tenant turnover.',
  content: [
    {
      id: 'bc1',
      type: 'VideoBlock',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-web.mp4',
      padding: 10
    },
    {
      id: 'bc2',
      type: 'VideoBlock',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-mobile.mp4',
      padding: 33
    }
  ] //Blocks
};
