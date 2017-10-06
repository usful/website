module.exports = {
  component: null,
  active: false,
  route: {
    path: '/experiences/earth-week',
    strict: true
  },
  id: 'ep3',
  type: 'experiences',
  name: 'Earth Week',
  tags: ['Environment', 'Education'],
  hero:
    'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-3.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/earth-week-hero-2.mp4',
  client: 'Brookfield Office Properties',
  description:
    'We partnered with local urban farming startups to showcase affordable and viable new tech solutions to Toronto’s downtown core with an unexpected installation that became a powerful awareness campaign.',
  impact:
    'Over 20,000 people engaged with the installation further recognizing our clients commitment to sustainability & increased awareness for all partners.',
  content: [
    {
      id: 'earth-week-1',
      type: 'TextBlock',
      text:
        'Our team was responsible for the design, concept, and execution of the Earth Week installation. This began with extensive research and development, as we sourced the latest and greatest growing technology.'
    },
    {
      id: 'earth-week-2',
      type: 'MediaBlock',
      mediaType: 'Image',
      url:
        'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-5.jpg',
      align: 'left',
      text: 'Designed to introduce the concept of urban farming in a palatable and hands-on manner, the installation showcased the simplicity of urban farming by highlighting growing technologies.',
    },
    {
      id: 'earth-week-3',
      type: 'MediaBlock',
      mediaType: 'Image',
      align: 'right',
      text: 'Urban Cultivator - Indoor gardens that grow healthy and organic vegetables, herbs, and microgreens in any kitchen.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-1.jpg',
    },
    {
      id: 'earth-week-4',
      type: 'MediaBlock',
      mediaType: 'Image',
      align: 'left',
      text: 'Language of Plants - Exploring the theme of language as culture through the medium of the black oak savannah ecosystem while discovering a bio-acoustic symphony.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-9.jpg',
    },
    {
      id: 'earth-week-5',
      type: 'QuoteBlock',
      text: 'This interactive experience educated me on hydroponic and urban farming methods I can use in my own backyard!',
      by: 'Tenant, Brookfield Properties',
    },
    {
      id: 'earth-week-6',
      type: 'MediaBlock',
      mediaType: 'Image',
      align: 'center',
      text: 'Through the design and construction of the installation, people experienced this technology for themselves, witnessing firsthand how urban gardening could become a reality.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/earth-week-8.jpg',
    },
  ] //Blocks
};
