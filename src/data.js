export default {
  sections: [
    {
      _component: null,
      _active: false,
      id: 'h1',
      name: 'Home',
      route: {
        path: '/',
        exact: true,
        strict: false
      },
      projects: [],
      inMenu: false
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/technology',
        strict: true
      },
      inMenu: true,
      id: 'a3',
      name: 'Technology',
      hero: '/img/lane.jpg',
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
          name: 'Lane',
          tags: [],
          hero: '/img/technology/lane-hero.jpg',
          industry: 'CRE Enterprise SaaS',
          tagLine: 'Bringing a trillion dollar industry intro the future.',
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
          name: 'VINI',
          tags: [],
          hero: '/img/technology/vini-hero.jpg',
          industry: 'Mobile SaaS',
          tagLine: 'Disrupting the wine industry.',
          description:
            '"They aren\'t straight," answered the other. "Never mind," said the farmer. "They are ears just the same," which was true enough. "Now I\'ll make the eyes," said the farmer. So he painted my right eye, and as soon as it was finished I found myself looking at him and at everything around me with a great deal of curiosity, for this was my first glimpse of the world. "That\'s a rather pretty eye," remarked the Munchkin who was watching the farmer. "Blue paint is just the color for eyes.\' "I think I\'ll make the other a little\n',
          impact:
            'We hid our new weapons beneath the skins which formed our beds, and then Perry conceived the idea of making bows and arrows—weapons apparently unknown within Pellucidar. Next came shields; but these I found it easier to steal from the walls of the outer guardroom of the building. We had completed these arrangements for our protection after leaving Phutra when the Sagoths who had been sent to recapture the escaped prisoners returned with four of them, of whom Hooja was one. Dian and two others had eluded them. It so happened that Hooja was confined in the\n',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/technology/change-for-a-dollar',
            strict: true
          },
          id: 'tp5',
          type: 'technology',
          name: 'Change for a Dollar',
          tags: [],
          hero: '/img/technology/change-for-a-dollar-hero.jpg',
          industry: 'Mobile SaaS',
          description:
            '"They aren\'t straight," answered the other. "Never mind," said the farmer. "They are ears just the same," which was true enough. "Now I\'ll make the eyes," said the farmer. So he painted my right eye, and as soon as it was finished I found myself looking at him and at everything around me with a great deal of curiosity, for this was my first glimpse of the world. "That\'s a rather pretty eye," remarked the Munchkin who was watching the farmer. "Blue paint is just the color for eyes.\' "I think I\'ll make the other a little\n',
          impact:
            'We hid our new weapons beneath the skins which formed our beds, and then Perry conceived the idea of making bows and arrows—weapons apparently unknown within Pellucidar. Next came shields; but these I found it easier to steal from the walls of the outer guardroom of the building. We had completed these arrangements for our protection after leaving Phutra when the Sagoths who had been sent to recapture the escaped prisoners returned with four of them, of whom Hooja was one. Dian and two others had eluded them. It so happened that Hooja was confined in the\n',
          content: [] //Blocks
        }
      ]
    },
    {
      _component: null,
      _active: false,
      id: 'a1',
      inMenu: true,
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
            path: '/experiences/interactive-art',
            strict: true
          },
          id: 'ep1',
          type: 'experiences',
          name: 'Interactive Art',
          tags: ['Heart', 'Education'],
          hero: '/img/experiences/interactive-galleries-ed-4.jpg',
          heroVideo: '/img/experiences/interactive-galleries-hero.mp4',
          client:
            'Edward Burtynsky, Joshua Jensen Nagle, Benjamin Von Wong, George Steinmetz',
          description:
            'Held in typically unused, unique yet convenient spaces, our art projects are attention grabbing. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience. From our global network of respected artists, we can transform a blank canvas of a space into an experience that instigates a powerful dialogue. Leave it to us to curate installations – whether clean and simple or infused with technology – that match your objectives, and to craft an experience that will become associated with your brand.',
          impact:
            'Our installations connect with tens of thousands of people daily, giving visitors something to talk about.',
          content: [
            {
              id: 'interactive-galleries-1',
              type: 'QuoteBlock',
              text:
                'I wish my artwork could persuade millions of people to join a global conversation about sustainability.',
              by: 'Edward Burtynsky'
            },
            {
              id: 'interactive-galleries-2',
              type: 'CarouselBlock',
              content: [
                {
                  id: 'interactive-galleries-1-1',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-ed-1.jpg'
                },
                {
                  id: 'interactive-galleries-1-2',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-ed-2.jpg'
                },
                {
                  id: 'interactive-galleries-1-3',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-ed-3.jpg'
                },
                {
                  id: 'interactive-galleries-1-4',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-ed-4.jpg'
                },
                {
                  id: 'interactive-galleries-1-6',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-ed-6.jpg'
                }
              ]
            },
            {
              id: 'interactive-galleries-3',
              type: 'TextBlock',
              text:
                'Usful took visitors on a self-guided interactive tour that explored the work and world of renowned Canadian artist Ed Burtynsky. To share the works and findings of [Manufactured Landscapes](http://www.edwardburtynsky.com/site_contents/Films/Manufactured_Landscapes_Film.html) – a feature length documentary on Burtynsky – the tour showcased the photographs of Burtynsky’s 25-year exploration of how industrial activity has created and shaped the landscapes of our world.'
            },
            {
              id: 'interactive-galleries-4',
              type: 'QuoteBlock',
              text:
                'When I’m there, it brings back happy memories and simpler times, and I get to relax... it immediately calms me down.',
              by: 'Joshua Jensen Nagle'
            },
            {
              id: 'interactive-galleries-5',
              type: 'CarouselBlock',
              content: [
                {
                  id: 'interactive-galleries-4-1',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-joshua-1.jpg'
                },
                {
                  id: 'interactive-galleries-4-2',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-joshua-2.jpg'
                },
                {
                  id: 'interactive-galleries-4-3',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-joshua-3.jpg'
                }
              ]
            },
            {
              id: 'interactive-galleries-6',
              type: 'TextBlock',
              text:
                'Offering a temporary escape from the daily grind, Toronto-based photographer [Joshua Jensen Nagle](https://bau-xi.com/collections/joshua-jensen-nagle) provided a dose of vacation inspiration with his collection of signature photographs of sun-soaked shorelines. The striking images featured in this exhibition are a continuation of his obsession with beach culture and his ongoing body of work, Endless Summer.'
            },
            {
              id: 'interactive-galleries-7',
              type: 'QuoteBlock',
              text: 'Creativity is a way of life.',
              by: 'Benjamin Von Wong'
            },
            {
              id: 'interactive-galleries-8',
              type: 'CarouselBlock',
              content: [
                {
                  id: 'interactive-galleries-8-1',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-vonwong-1.jpg'
                },
                {
                  id: 'interactive-galleries-8-2',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-vonwong-2.jpg'
                },
                {
                  id: 'interactive-galleries-8-3',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-vonwong-3.jpg'
                }
              ]
            },
            {
              id: 'interactive-galleries-9',
              type: 'TextBlock',
              text:
                'Canadian photographer Benjamin Von Wong turned 10,000 plastic bottles into a visually mind-blowing and informative art experience with [#MermaidsHatePlastic](http://www.vonwong.com/Store/MermaidsHatePlastic/). Transforming the lobby of the Bay Adelaide Centre, the exhibition made for a value-added lunch break, as it highlighted the alarming reality of plastic pollution. Accompanying the images was a self-guided tour curated by Usful and available via a mobile app.'
            },
            {
              id: 'interactive-galleries-10',
              type: 'QuoteBlock',
              text:
                'One of the more interesting things about desert environments is how people and animals can survive in the very limits of existence...',
              by: 'George Steinmetz'
            },
            {
              id: 'interactive-galleries-11',
              type: 'CarouselBlock',
              content: [
                {
                  id: 'interactive-galleries-11-1',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-steinmetz-1.jpg'
                },
                {
                  id: 'interactive-galleries-11-2',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-steinmetz-2.jpg'
                },
                {
                  id: 'interactive-galleries-11-3',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-steinmetz-3.jpg'
                },
                {
                  id: 'interactive-galleries-11-4',
                  type: 'ImageBlock',
                  url: '/img/experiences/interactive-galleries-steinmetz-4.jpg'
                }
              ]
            },
            {
              id: 'interactive-galleries-12',
              type: 'TextBlock',
              text:
                'Visitors were offered a glimpse into some of the world’s most remote environments at [Desert Air](http://georgesteinmetz.com/images/desert-air/), a photography exhibition by award-winning National Geographic photographer George Steinmetz. Steinmetz spent fifteen years documenting the world’s extreme deserts from the air, using the lightest and slowest paraglider that exists to offer an unmatched perspective on these isolated parts of the planet.'
            }
          ] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/6ix-cycle',
            strict: true
          },
          id: 'ep5',
          type: 'experiences',
          name: '6ix Cycle',
          tags: ['Heart', 'Education'],
          hero: '/img/experiences/6ix-cycle-2.jpg',
          heroVideo: '/img/experiences/6ix-cycle-hero.mp4',
          client: 'Multiple',
          description:
            'To highlight the benefits of wellness in the workplace, we turned a section of downtown Toronto into a high-energy outdoor spin studio. Held in collaboration with a corporate health and wellness program, the outdoor spin cycling event offered two classes per day for two days. It involved a virtual reality (VR) component that allowed participants to experience a virtual cycle race before debriefing over local and healthy refreshments.',
          impact:
            'The impossible-to-miss installation got both the participants and passersby engaged and motivated, with business wear-clad audience members cheering on the participants in between meetings. The use of VR offered a multi-faceted and memorable experience. The first live session resulted in over 4,000 impressions.\n',
          content: [
            {
              id: 'b18',
              type: 'TextBlock',
              text:
                'From conception to teardown, our team designed a sleek outdoor spin studio with spin bikes, music, and refreshments. To offer a layered experience, we sourced top-of-the-line VR technology and administered the experience for the audience. We engaged with participants through a mobile app for signups and check-ins to the event.'
            },
            {
              id: 'b2',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-1.jpg',
              align: 'full'
            },
            {
              id: 'b3',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-2.jpg',
              align: 'full'
            },
            {
              id: 'b4',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-3.jpg',
              align: 'full'
            },
            {
              id: 'b5',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-4.jpg',
              align: 'full'
            }
          ] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/osheaga-oasis',
            strict: true
          },
          id: 'ep2',
          type: 'experiences',
          name: 'Osheaga Oasis',
          tags: ['Environment', 'Stuff'],
          hero: '/img/experiences/osheaga-oasis-3.jpg',
          heroVideo: '/img/experiences/osheaga-oasis-hero.mp4',
          client: 'TopShop',
          description:
            'We were there to make sure [Osheaga](https://www.osheaga.com/en) goers got the memo that the UK’s beloved [TopShop](http://www.topshop.com) was coming to Canada with a “TopShop Urban Oasis” tech installation at the popular Montreal music festival. Offering a place of calm from the festivities, here, guests could rehydrate with water and document their festival experience with branded cameras.  TopShop fans could also deepen their connection with the brand by partaking in an interactive experience.',
          impact: 'TODO',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/earth-week',
            strict: true
          },
          id: 'ep3',
          type: 'experiences',
          name: 'Earth Week',
          tags: ['Environment', 'Heart'],
          hero: '/img/experiences/earth-week-3.jpg',
          heroVideo: '/img/experiences/earth-week-hero.mp4',
          client: 'Brookfield Office Properties',
          description:
            'To educate on the benefits of urban farming, Usful partnered with local urban farmers to bring affordable and viable new tech solutions to Toronto’s downtown core with an unexpected installation that became a powerful awareness campaign. Over a month period, Usful’s attention-grabbing installation tapped into the minds of thousands of Toronto pavement pounders, getting the wheels turning on the benefits of growing their own food',
          impact:
            'Designed to introduce the concept of urban farming in a palatable and hands-on manner, the installation showcased the simplicity of urban farming by highlighting growing technology like Bright Agrotech’s ZipGrow Towers, Urban Cultivator Microgreen Growing Units, and Landscape Culture’s “Language of Plants.” Users were able to experience this technology for themselves, inspiring an understanding of sustainable change and how to make it feasible. In doing so, the progressive values of Brookfield Office Properties became associated with the initiative. \n',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/anthropocene-film',
            strict: true
          },
          id: 'ep4',
          type: 'experiences',
          name: 'Anthropocene',
          tags: ['Heart', 'Education'],
          hero: 'https://s3.amazonaws.com/anthropocene/vids/water.jpg',
          heroVideo: 'https://s3.amazonaws.com/anthropocene/vids/water.mp4',
          client: 'Anthropocene Film',
          description:
            'We are the creators of user-friendly digital experiences that impact how people view and navigate both the world and their daily lives. Our Usful digital experiences heighten consumer connection and engagement with brands, products, art, and film. We work with the best designers and with top-of-the-line technology in the creation of our immersive and impactful digital projects. \n',
          impact:
            'Our public galleries can connect with over 5,000 people daily, giving visitors something to talk about when they return to the office from their lunch break or home after work. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience. By offering a one-on-one high touchpoint, we inspire shifts in consciousness and a subsequent association of your brand to this progressive change in thinking.',
          content: [] //Blocks
        }
      ]
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/market',
        exact: true
      },
      projects: [],
      id: 'a2',
      inMenu: true,
      name: 'Market',
      hero: '/img/brenda-godinez-228181.jpg'
    },
    {
      _component: null,
      _active: false,
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
              text: 'Join the collective of conscious human focused brands.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip4.mp4'
            },
            {
              id: 'bc8',
              type: 'VideoBlock',
              text: 'More text that is good.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip5.mp4'
            },
            {
              id: 'bc9',
              type: 'VideoBlock',
              text: 'Something something something else. Markets.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip6.mp4'
            },
            {
              id: 'bc10',
              type: 'VideoBlock',
              text: 'Join our market today, contact us below.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip7.mp4'
            }
          ]
        }
      ],
      id: 'a2',
      inMenu: false,
      name: 'Market Partners'
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/market/story',
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
              text: 'Join the collective of conscious human focused brands.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip4.mp4'
            },
            {
              id: 'bc2',
              type: 'VideoBlock',
              text: 'More text that is good.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip5.mp4'
            },
            {
              id: 'bc3',
              type: 'VideoBlock',
              text: 'Something something something else. Markets.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip6.mp4'
            },
            {
              id: 'bc4',
              type: 'VideoBlock',
              text: 'Join our market today, contact us below.',
              url: 'https://s3.amazonaws.com/anthropocene/vids/clip7.mp4'
            }
          ]
        }
      ],
      id: 'ms1',
      inMenu: false,
      name: 'Market Story'
    },
    {
      _component: null,
      _active: false,
      route: {
        path: '/market/story',
        exact: true
      },
      projects: [],
      id: 'a2',
      inMenu: false,
      name: 'Market Story'
    }
  ],
  menu: [
    {
      _showing: false,
      _active: false,
      _leaving: false,
      id: 'a4',
      hash: '#about',
      name: 'About'
    },
    {
      _showing: false,
      _active: false,
      _leaving: false,
      id: 'a5',
      hash: '#contact',
      name: 'Contact'
    }
  ]
};
