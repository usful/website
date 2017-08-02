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
            path: '/experiences/skating-rink',
            strict: true
          },
          id: 'ep1',
          type: 'experiences',
          slug: 'skating-rink',
          name: 'Skating Rink',
          tags: ['Poop', 'Environment', 'Stuff'],
          hero: 'https://unsplash.it/1110/680/?random&ts=1',
          heroVideo:
            'https://s3.amazonaws.com/anthropocene/vids/empty-lake.mp4',
          client: 'Dudes',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.\n',
          impact:
            'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.\n',
          content: [
            {
              id: 'b1',
              type: 'ImageBlock',
              url: 'https://unsplash.it/1110/680/?random&ts=10',
              align: 'left',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b2',
              type: 'ImageBlock',
              url: 'https://unsplash.it/1110/680/?random&ts=11',
              align: 'right',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b3',
              type: 'ImageBlock',
              url: 'https://unsplash.it/1110/680/?random&ts=24',
              align: 'center',
              text:
                'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis'
            },
            {
              id: 'b5',
              type: 'ImageBlock',
              url: 'https://unsplash.it/1110/680/?random&ts=12',
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
                  id: 'b7',
                  type: 'ImageBlock',
                  url: 'https://unsplash.it/1110/680/?random&ts=12',
                  align: 'full'
                },
                {
                  id: 'b8',
                  type: 'ImageBlock',
                  url: 'https://unsplash.it/1110/680/?random&ts=13',
                  align: 'full'
                },
                {
                  id: 'b9',
                  type: 'ImageBlock',
                  url: 'https://unsplash.it/1110/680/?random&ts=14',
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
            path: '/experiences/manufactured-landscapes',
            strict: true
          },
          id: 'ep2',
          type: 'experiences',
          slug: 'manufactured-landscapes',
          name: 'Manufactured Landscapes',
          tags: ['Poop', 'Environment', 'Stuff'],
          hero: 'https://unsplash.it/1110/680/?random&ts=2',
          heroVideo:
            'https://www.anonymous.paris/assets/videos/projects/anonymous_sebastien-tellier.webm',
          client: 'Babes',
          description:
            'At the period of our arrival at the Island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. But, as before hinted, for some time there was a continual fetching and carrying on board of divers odds and ends of things, both large and small.\n',
          impact:
            '"Thou Bildad!" roared Peleg, starting up and clattering about the cabin. "Blast ye, Captain Bildad, if I had followed thy advice in these matters, I would afore now had a conscience to lug about that would be heavy enough to founder the largest ship that ever sailed round Cape Horn."\n',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/osheaga-with-topman',
            strict: true
          },
          id: 'ep3',
          type: 'experiences',
          slug: 'osheaga-with-topman',
          name: 'Osheaga with Topman',
          tags: ['Poop', 'Environment', 'Stuff'],
          hero: 'https://unsplash.it/1110/680/?random&ts=3',
          heroVideo: 'https://s3.amazonaws.com/anthropocene/vids/clip5.mp4',
          client: 'Babes',
          description:
            'At the period of our arrival at the Island, the heaviest storage of the Pequod had been almost completed; comprising her beef, bread, water, fuel, and iron hoops and staves. But, as before hinted, for some time there was a continual fetching and carrying on board of divers odds and ends of things, both large and small.\n',
          impact:
            '"Thou Bildad!" roared Peleg, starting up and clattering about the cabin. "Blast ye, Captain Bildad, if I had followed thy advice in these matters, I would afore now had a conscience to lug about that would be heavy enough to founder the largest ship that ever sailed round Cape Horn."\n',
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
          hero: 'https://unsplash.it/1110/680/?random&ts=4',
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
          hero: 'https://unsplash.it/1110/680/?random&ts=5',
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
