export default {
  sections: [
    {
      _component: null,
      _active: false,
      id: 'h1',
      name: 'Home',
      slug: '/',
      route: {
        path: '/',
        exact: true,
        strict: false
      },
      projects: []
    },
    {
      _component: null,
      _active: false,
      id: 'a1',
      slug: 'experiences',
      name: 'Experiences',
      hero: '/img/sergio-alejandro-ortiz-110188.jpg',
      route: {
        path: '/experiences',
        strict: false
      },
      projects: [
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/interactive-galleries',
            strict: true
          },
          id: 'ep1',
          type: 'experiences',
          slug: 'interactive-galleries',
          name: 'Interactive Galleries',
          tags: ['Heart', 'Education'],
          hero: 'https://lorempixel.com/1110/680/?random&ts=1',
          heroVideo:
            'https://s3.amazonaws.com/anthropocene/vids/empty-lake.mp4',
          client: 'Multiple',
          description:
            'We believe in the power of  the arts and culture scene to educate and inspire key audiences. Held in typically unused, unique yet convenient spaces, our attention-grabbing art projects are focused on social commentary. Our global network of respected artists can transform a blank canvass of a space into an experience that instigates a powerful dialogue. It’s this experience that becomes associated with your brand. Leave it to us to curate installations – whether clean and simple or infused with technology – that match your target objectives.',
          impact:
            'Our public galleries can connect with over 5,000 people daily, giving visitors something to talk about when they return to the office from their lunch break or home after work. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience. By offering a one-on-one high touchpoint, we inspire shifts in consciousness and a subsequent association of your brand to this progressive change in thinking.',
          content: [
            {
              id: 'b1',
              type: 'ImageBlock',
              url: 'https://lorempixel.com/1110/680/?random&ts=10',
              align: 'left',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b18',
              type: 'TextBlock',
              text:
                'At the period of our arrival at the Island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. But, as before hinted, for some time there was a continual fetching and carrying on board of divers odds and ends of things, both large and small.'
            },
            {
              id: 'b2',
              type: 'ImageBlock',
              url: 'https://lorempixel.com/1110/680/?random&ts=11',
              align: 'right',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b20',
              type: 'TextBlock',
              text:
                'At the period of our arrival at the Island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. But, as before hinted, for some time there was a continual fetching and carrying on board of divers odds and ends of things, both large and small.'
            },
            {
              id: 'b3',
              type: 'ImageBlock',
              url: 'https://lorempixel.com/1110/680/?random&ts=24',
              align: 'center',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b5',
              type: 'ImageBlock',
              url: 'https://lorempixel.com/1110/680/?random&ts=12',
              align: 'full',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b4',
              type: 'QuoteBlock',
              text: `It's all about the look, the feel, the run. *wink*`,
              by: 'Kofi Gyekye, Head Usful Dude'
            },
            {
              id: 'b6',
              type: 'CarouselBlock',
              content: [
                {
                  id: 'bc1',
                  type: 'VideoBlock',
                  url:
                    'https://s3.amazonaws.com/anthropocene/vids/clip4.mp4'
                },
                {
                  id: 'bc2',
                  type: 'ImageBlock',
                  url: 'https://lorempixel.com/1110/680/?random&ts=101',
                  align: 'full'
                },
                {
                  id: 'bc3',
                  type: 'ImageBlock',
                  url: 'https://lorempixel.com/1110/680/?random&ts=102',
                  align: 'full'
                },
                {
                  id: 'bc4',
                  type: 'ImageBlock',
                  url: 'https://lorempixel.com/1110/680/?random&ts=103',
                  align: 'full'
                }
              ]
            },
            {
              id: 'b10',
              type: 'TextBlock',
              text:
                'At the period of our arrival at the Island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. But, as before hinted, for some time there was a continual fetching and carrying on board of divers odds and ends of things, both large and small.'
            }
          ] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/physical-installations',
            strict: true
          },
          id: 'ep2',
          type: 'experiences',
          slug: 'physical-installations',
          name: 'Physical Installations',
          tags: ['Poop', 'Environment', 'Stuff'],
          hero: 'https://lorempixel.com/1110/680/?random&ts=2',
          heroVideo:
            'https://www.anonymous.paris/assets/videos/projects/anonymous_sebastien-tellier.webm',
          client: 'Multiple',
          description:
            'We made sure Osheaga goers got the memo that the UK’s beloved TopShop was coming to Canada with our “TopShop Urban Oasis” installation at the popular Montreal music festival. Offering a place of calm from the festivities, here, guests could rehydrate with water and were given polaroid cameras to document their festival experience. \n',
          impact:
            'We wanted the users to tell the story, and invited them to drop the film back so that we could process it to capture both the festival and the TopShop experience. Not only did the experience offer an unexpected and well-received layer to the festival experience, it got users talking TopShop',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/awareness-campaigns-urban-farming',
            strict: true
          },
          id: 'ep3',
          type: 'experiences',
          slug: 'awareness-campaigns-urban-farming',
          name: 'Awareness Campaigns - Urban Farming',
          tags: ['Environment', 'Heart'],
          hero: 'https://lorempixel.com/1110/680/?random&ts=3',
          heroVideo: 'https://s3.amazonaws.com/anthropocene/vids/clip5.mp4',
          client: 'Brookfield Office Properties Canada - Bay Adelaide Centre',
          description:
            'To educate on the benefits of urban farming, Usful partnered with local urban farmers to bring affordable and viable new tech solutions to Toronto’s downtown core with an unexpected installation that became a powerful awareness campaign. Over a month period, Usful’s attention-grabbing installation tapped into the minds of thousands of Toronto pavement pounders, getting the wheels turning on the benefits of growing their own food',
          impact:
            'Designed to introduce the concept of urban farming in a palatable and hands-on manner, the installation showcased the simplicity of urban farming by highlighting growing technology like Bright Agrotech’s ZipGrow Towers, Urban Cultivator Microgreen Growing Units, and Landscape Culture’s “Language of Plants.” Users were able to experience this technology for themselves, inspiring an understanding of sustainable change and how to make it feasible. In doing so, the progressive values of Brookfield Office Properties became associated with the initiative. \n',
          content: [] //Blocks
        }
      ]
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/market',
        strict: true
      },
      id: 'a2',
      slug: 'market',
      name: 'Market',
      hero: '/img/brenda-godinez-228181.jpg'
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/technology',
        strict: true
      },
      id: 'a3',
      slug: 'technology',
      name: 'Technology',
      hero: '/img/Lane.png',
      projects: [
        {
          _component: null,
          _active: false,
          route: {
            path: '/technology/lane',
            strict: true
          },
          id: 'tp3',
          type: 'technology',
          slug: 'lane',
          name: 'Lane',
          hero: 'https://lorempixel.com/1110/680/?random&ts=4',
          industry: 'CRE Enterprise SaaS',
          description:
            'Tars Tarkas himself seemed pleased with my reply, but his only comment was more or less enigmatical—"And I think I know Tal Hajus, Jeddak of Thark."\n',
          impact:
            'Full in this rapid wake, and many fathoms in the rear, swam a huge, humped old bull, which by his comparatively slow progress, as well as by the unusual yellowish incrustations overgrowing him, seemed afflicted with the jaundice, or some other infirmity. Whether this whale belonged to the pod in advance, seemed questionable; for it is not customary for such venerable leviathans to be at all social. Nevertheless, he stuck to their wake, though indeed their back water must have retarded him, because the white-bone or swell at his broad muzzle was a dashed one, like the swell formed when\n',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/technology/vini',
            strict: true
          },
          id: 'tp4',
          type: 'technology',
          slug: 'vini',
          name: 'VINI',
          hero: 'https://lorempixel.com/1110/680/?random&ts=5',
          industry: 'Mobile SaaS',
          description:
            '"They aren\'t straight," answered the other. "Never mind," said the farmer. "They are ears just the same," which was true enough. "Now I\'ll make the eyes," said the farmer. So he painted my right eye, and as soon as it was finished I found myself looking at him and at everything around me with a great deal of curiosity, for this was my first glimpse of the world. "That\'s a rather pretty eye," remarked the Munchkin who was watching the farmer. "Blue paint is just the color for eyes.\' "I think I\'ll make the other a little\n',
          impact:
            'We hid our new weapons beneath the skins which formed our beds, and then Perry conceived the idea of making bows and arrows—weapons apparently unknown within Pellucidar. Next came shields; but these I found it easier to steal from the walls of the outer guardroom of the building. We had completed these arrangements for our protection after leaving Phutra when the Sagoths who had been sent to recapture the escaped prisoners returned with four of them, of whom Hooja was one. Dian and two others had eluded them. It so happened that Hooja was confined in the\n',
          content: [] //Blocks
        }
      ]
    }
  ],
  menu: [
    {
      id: 'a4',
      slug: 'about',
      name: 'About'
    },
    {
      id: 'a5',
      slug: 'contact',
      name: 'Contact'
    }
  ]
};
