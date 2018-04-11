module.exports = {
  component: null,
  active: false,
  route: {
    path: '/project/anthropocene-film',
    strict: true
  },
  id: 'ep4',
  type: 'experiences',
  name: 'Anthropocene',
  tags: ['Tech', 'Environment'],
  hero: 'https://s3.amazonaws.com/anthropocene/vids/water.jpg',
  heroVideo: 'https://s3.amazonaws.com/anthropocene/vids/water.mp4',
  client: 'Ed Burtynsky, The Anthropocene Film Project.',
  description:
    'With a goal to be as engaging and impactful as the film is, Usful developed an interactive web platform for The Anthropocene Film Project.',
  impact:
    'The first in a series of digital experiences for the Anthropocene film, the site received industry recognition and [awards](https://www.awwwards.com/sites/anthropocene), gathering over 100,000 visitors and helping the film to raise funding for production.',
  content: [
    {
      id: 'anthropocene-1',
      type: 'TextBlock',
      text: 'The goal of the powerful documentary is to explore a critical point in earth and human history and to expand awareness of our species’ reach and impact.',
    },
    {
      id: 'anthropocene-2',
      type: 'MediaBlock',
      align: 'left',
      text: 'Kid. - Universal logo and brand identity. The visually stimulating and interactive site was nominated for an award in 2016 for its creativity and innovative approach to design.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/anthropocene-3.jpg',
      mediaType: 'Image',
    },
    {
      id: 'anthropocene-3',
      type: 'QuoteBlock',
      text: 'We humans may have become the impact-equivalent of that asteroid.',
      by: 'Jennifer Baichwal',
    },
    {
      id: 'anthropocene-4',
      type: 'MediaBlock',
      align: 'center',
      text: 'The innovative objective was to create an engaging and hard-hitting experience for users that parallels the impact humans have on the planet’s future: As platform engagement and interaction lessens, the experience slowly dies, mirroring the effect humans have on the world if no progression on sustainable resourcing is made. Conversely, the more a user interacts with the site, the longer it will stay alive.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/anthropocene-hero.mp4',
      width: 90,
      mediaType: 'Video',
    },
    {
      id: 'anthropocene-5',
      type: 'MediaBlock',
      align: 'left',
      text: 'The unique display of information, large background images, and dramatic animations encourage site visitors to continue to explore and raise awareness by sharing the cause with others.',
      url: 'https://s3.amazonaws.com/usful-portfolio/vids/anthropocene-mobile.mp4',
      width: 67,
      mediaType: 'Video',
    },
  ] //Blocks
};
