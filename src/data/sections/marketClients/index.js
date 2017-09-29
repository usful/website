export default {
  component: null,
  active: false,
  route: {
    path: '/market/clients',
    exact: true
  },
  projects: [],
  content: [
    {
      id: 'mb1',
      type: 'CarouselBlock',
      animation: 'fade',
      content: [
        {
          id: 'bc1',
          type: 'VideoBlock',
          text: 'A unique, immersive, food-filled turnkey experience.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-pasta.mp4'
        },
        {
          id: 'bc3',
          type: 'VideoBlock',
          text:
            'Highly configurable and customizable for  any location or event.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-people.mp4'
        },
        {
          id: 'bc2',
          type: 'VideoBlock',
          text: 'The best vendors and products the city has to offer.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-sign.mp4'
        },
        {
          id: 'bc4',
          type: 'VideoBlock',
          text: 'We bring everything you need to host a market in any space.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-bees.mp4'
        }
      ]
    }
  ],
  id: 'ms1',
  inMenu: false,
  name: 'Market Clients'
};
