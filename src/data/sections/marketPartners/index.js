export default {
  component: null,
  active: false,
  route: {
    path: '/market/partners',
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
          text: 'Turn-key vending with access to the best customers.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-stall.mp4'
        },
        {
          id: 'bc8',
          type: 'VideoBlock',
          text: 'Join our collective of the best vendors.',
          url:
            'https://s3.amazonaws.com/usful-portfolio/vids/market-sammiches.mp4'
        },
        {
          id: 'bc9',
          type: 'VideoBlock',
          text: 'Different locations, seasons and themes to participate in.',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-people.mp4'
        },
        {
          id: 'bc10',
          type: 'VideoBlock',
          text: 'Join our market, contact us today!',
          url: 'https://s3.amazonaws.com/usful-portfolio/vids/market-tomato.mp4'
        }
      ]
    }
  ],
  id: 'a2',
  inMenu: false,
  name: 'Market Partners'
};
