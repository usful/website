module.exports = {
  _component: null,
  _active: false,
  route: {
    path: '/experiences/anthropocene-film',
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
    'The goal of the upcoming feature-film documentary is to explore a critical point in earth and human history and to expand awareness of our species’ reach and impact. The first step in making a change involves understanding, and the project leaves people informed and inspired to rethink a few elements of their lives.  The beginning of a series of The visually stimulating and interactive site was nominated for an award in 2016 for its creativity and innovative approach to design. The unique display of information, large background images, and dramatic animations encourage site visitors to continue to explore and raise awareness by sharing the cause with others.',
  impact:
    'The first in a series of digital experiences for the Anthropocene film, the site received industry recognition and [awards](https://www.awwwards.com/sites/anthropocene), gathering over 100,000 visitors and helping the film to raise funding for production.',
  content: [
    {
      id: 'bc3',
      type: 'TextBlock',
      text:
        'With a goal to be as engaging and impactful as the film is, Usful developed an interactive web platform for The Anthropocene Film Project. The innovative objective was to create an engaging and hard-hitting experience for users that parallels the impact humans have on the planet’s future: As platform engagement and interaction lessens, the experience slowly dies, mirroring the effect humans have on the world if no progression on sustainable resourcing is made. Conversely, the more a user interacts with the site, the longer it will stay alive.'
    },
    {
      id: 'bc2',
      type: 'VideoBlock',
      url:
        'https://s3.amazonaws.com/usful-portfolio/vids/anthropocene-hero.mp4',
      padding: 10
    },
    {
      id: 'bc1',
      type: 'QuoteBlock',
      text: 'We humans may have become the impact-equivalent of that asteroid.',
      by: 'Jennifer Baichwal'
    }
  ] //Blocks
};
