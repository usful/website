module.exports = {
  component: null,
  active: false,
  route: {
    path: '/project/interactive-art',
    strict: true
  },
  id: 'ep1',
  type: 'experiences',
  name: 'Interactive Art',
  tags: ['Education', 'Community'],
  hero:
    'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-ed-4.jpg',
  heroVideo: 'https://s3.amazonaws.com/usful-portfolio/vids/art-hero.mp4',
  client:
    'Edward Burtynsky, Joshua Jensen Nagle, George Steinmetz, Benjamin Von Wong',
  description:
    'Held in typically unused, unique yet convenient spaces, our art projects are attention-grabbing. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience.',
  impact:
    'Our installations have connected with over 10,000 young urban professionals daily, resulting in increased foot-traffic, earned media and press, and help fulfill cultural and sustainability initiatives.',
  content: [
    {
      id: 'interactive-galleries-1',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'From our global network of respected artists, we can transform a blank canvas of a space into an experience that instigates a powerful dialogue.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-strategy.jpg',
      align: 'left',
    },
    {
      id: 'interactive-galleries-2',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'Leave it to us to curate installations – whether clean and simple or infused with technology – that match your objectives, and to craft an experience that will become associated with your brand.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-setup-rendering.jpg',
      align: 'right',
    },
    {
      id: 'interactive-galleries-3',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'We took visitors on a self-guided interactive tour that explored the work and world of renowned Canadian artist Ed Burtynsky. To share the works and findings of Manufactured Landscapes – a feature-length documentary on Burtynsky – the tour showcased the photographs of Burtynsky’s 25-year exploration of how industrial activity has created and shaped the landscapes of our world.',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-ed-7.jpg',
      align: 'left',
    },
    {
      id: 'interactive-galleries-4',
      type: 'QuoteBlock',
      text: 'I wish my artwork could persuade millions of people to join a global conversation about sustainability.',
      by: 'Edward Burtynsky',
    },
    {
      id: 'interactive-galleries-5',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'Offering a temporary escape from the daily grind, Toronto-based photographer Joshua Jensen Nagle provided a dose of vacation inspiration with his collection of signature photographs of sun-soaked shorelines.',
      // placeholder url
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-jensen-nagle.jpg',
      align: 'right',
    },
    {
      id: 'interactive-galleries-6',
      type: 'CarouselBlock',
      content: [
        {
          id: 'interactive-galleries-6-1',
          type: 'MediaBlock',
          mediaType: 'Image',
          url:
            'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-1.jpg',
        },
        {
          id: 'interactive-galleries-6-2',
          type: 'MediaBlock',
          mediaType: 'Image',
          url:
            'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-2.jpg',
        },
        {
          id: 'interactive-galleries-6-3',
          type: 'MediaBlock',
          mediaType: 'Image',
          url:
            'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-joshua-3.jpg',
        },
      ],
    },
    {
      id: 'interactive-galleries-7',
      type: 'MediaBlock',
      mediaType: 'Image',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-vonwong-4.jpg',
      align: 'center',
      text: 'Canadian photographer Benjamin Von Wong turned 10,000 plastic bottles into a visually mind-blowing and informative art experience with #MermaidsHatePlastic. Transforming the lobby of the Bay Adelaide Centre, the exhibition made for a value-added lunch break, as it highlighted the alarming reality of plastic pollution. Accompanying the images was a self-guided tour curated by Usful and available via a mobile app.',
    },
    {
      id: 'interactive-galleries-8',
      type: 'QuoteBlock',
      text: 'One of the more interesting things about desert environments is how people and animals can survive in the very limits of existence...',
      by: 'George Steinmetz',
    },
    {
      id: 'interactive-galleries-9',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'Visitors were offered a glimpse into some of the world’s most remote environments at Desert Air, a photography exhibition by award-winning National Geographic photographer George Steinmetz.',
      align: 'left',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-steinmetz-1.jpg',
    },
    {
      id: 'interactive-galleries-10',
      type: 'MediaBlock',
      mediaType: 'Image',
      text: 'Interactive audio tours are accessible to the public through Usful’s mobile engagement app, Lane.',
      align: 'right',
      url: 'https://s3.amazonaws.com/usful-portfolio/img/experiences/interactive-galleries-interactive-tech.jpg',
    },
  ] //Blocks
};
