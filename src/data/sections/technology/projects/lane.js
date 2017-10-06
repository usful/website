export default {
  component: null,
  active: false,
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
    '[Lane](https://www.joinlane.com) brings modern SaaS & Mobile technology to an industry ready for disruption, becoming the central operating system for office buildings and connecting tenants with services and amenities.',
  impact:
    'Since the nationwide launch in 2016, the [Lane](https://www.joinlane.com) platform engages 60,000 tenants daily, and is used by companies with portfolios of over 200MM SqFt.',
  content: [
    {
      id: 'lane-1',
      type: 'MediaBlock',
      mediaType: 'Image',
      align: 'right',
      text: 'Commercial Real Estate is one of the biggest asset classes in the world, but one that’s had little disruption.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-1.jpg',
    },
    {
      id: 'lane-2',
      type: 'MediaBlock',
      mediaType: 'Image',
      align: 'left',
      text: 'Noticing a growing need for active tenant engagement in the industry, and a clear void of technology solutions, we created Lane, the first fully featured tenant engagement solution for CRE.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/technology/lane-3.jpg',
    },
    {
      id: 'lane-3',
      type: 'MediaBlock',
      mediaType: 'Video',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-web.mp4',
      width: 90,
      text: 'Thanks to training and support from the Lane team, property management companies now have an efficient and modern way to communicate with their tenants, increase engagement, and reduce tenant turnover.',
    },
    {
      id: 'lane-4',
      type: 'MediaBlock',
      mediaType: 'Video',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/lane-mobile.mp4',
      width: 67,
      text: 'The mobile app brings modern SaaS & mobile technology to properties becoming the central operating system for connecting tenants with building services and amenities.',
      align: 'left',
    }
  ] //Blocks
};
