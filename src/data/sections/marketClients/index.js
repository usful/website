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
          type: 'MediaBlock',
          text: 'A unique, immersive, food-filled turnkey experience.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-pasta.mp4',
          mediaType: 'Video',
          width: 100,
        },
        {
          id: 'bc3',
          type: 'MediaBlock',
          text:
            'Highly configurable and customizable for  any location or event.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-people.mp4',
          mediaType: 'Video',
          width: 100,
        },
        {
          id: 'bc2',
          type: 'MediaBlock',
          text: 'The best vendors and products the city has to offer.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-sign.mp4',
          mediaType: 'Video',
          width: 100,
        },
        {
          id: 'bc4',
          type: 'MediaBlock',
          text: 'We bring everything you need to host a market in any space.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-bees.mp4',
          mediaType: 'Video',
          width: 100,
        }
      ]
    }
  ],
  id: 'ms1',
  inMenu: false,
  name: 'Market Clients'
};
