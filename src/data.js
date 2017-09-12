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
          heroVideo: '/vids/lane-hero.mp4',
          industry: 'Commercial Real Estate, SaaS',
          tagLine:
            'The first tenant engagement solution for commercial real estate.',
          description:
            'Commercial Real Estate is one of the biggest asset classes in the world, but one that’s had little disruption. Noticing a growing need for active tenant engagement in the industry, and a clear void of technology solutions, we created Lane, the first fully featured tenant engagement solution for CRE. Lane brings modern SaaS & Mobile technology to an industry ready for disruption, becoming the central operating system for office buildings and connecting tenants with services and amenities.',
          impact:
            'Since the nationwide launch in 2016, the Lane platform engages 60,000 tenants daily, and is used by companies with portfolios of over 200MM SqFt. Thanks to training and support from the Lane team, property management companies now have an efficient and modern way to communicate with their tenants, increase engagement, and reduce tenant turnover.',
          content: [
            {
              id: 'bc1',
              type: 'VideoBlock',
              url: '/vids/lane-web.mp4',
              padding: 10
            },
            {
              id: 'bc2',
              type: 'VideoBlock',
              url: '/vids/lane-mobile.mp4',
              padding: 33
            }
          ] //Blocks
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
          heroVideo: '/vids/vini-hero.mp4',
          industry: 'Ecommerce, Luxury Goods, SaaS',
          tagLine:
            'Buy wine easy. The best and hard to find wines delivered to your door.',
          description:
            'With a mission to eliminate the red tape when it comes to bringing the best and most difficult-to-find wine to your doorstep, Usful helped create VINI.  With a goal of disrupting the traditional wine industry, the Usful team was responsible for everything from the market research, to product design, to product development.  The result was a full featured SaaS e-commerce platform for merchants to offer hard to find wines, and a web and mobile app for wine aficionados to get them delivered.',
          impact:
            'VINI was able to successfully raise $500,000 in seed funding based on the product Usful created with them.',
          content: [
            {
              id: 'bv1',
              type: 'VideoBlock',
              url: '/vids/vini-mobile.mp4',
              padding: 33
            }
          ] //Blocks
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
          industry: 'Charity, Fundraising',
          tagLine: 'Automated Cashless Giving',
          description:
            'With cash becoming increasingly a thing of the past, the way we give to charities is changing. Millennials typically find it difficult to donate because it isn’t as easy as a few taps. Created end-to-end by Usful, the Change for a Dollar mobile and web platform infuses innovation into the concept of charitable giving; it rounds up every purchase made to the nearest dollar and donates the change to the user’s choice of charity.',
          impact:
            'Having won a placement at a product innovation event, and secured $5,000,000 in donated hours Change for a Dollar is currently raising a seed round for investment.',
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
            path: '/experiences/6ix-cycle',
            strict: true
          },
          id: 'ep5',
          type: 'experiences',
          name: '6IX Cycle',
          tags: ['Health', 'Education'],
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
                'From conception to tear-down, our team designed a sleek outdoor spin studio with spin bikes, music, and refreshments.'
            },
            {
              id: 'b2',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-1.jpg',
              align: 'full'
            },
            {
              id: 'b19',
              type: 'TextBlock',
              text:
                'To offer a layered experience, we sourced top-of-the-line VR technology and administered the experience for the audience. We engaged with participants through a mobile app for signups and check-ins to the event.'
            },
            {
              id: 'b4',
              type: 'ImageBlock',
              url: '/img/experiences/6ix-cycle-3.jpg',
              align: 'full'
            }
          ] //Blocks
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
          tags: ['Environment', 'Education'],
          hero: '/img/experiences/earth-week-3.jpg',
          heroVideo: '/vids/earthweek-hero.mp4',
          client: 'Brookfield Office Properties',
          description:
            'We partnered with local urban farming startups to bring affordable and viable new tech solutions to Toronto’s downtown core with an unexpected installation that became a powerful awareness campaign. Over a month period, the attention-grabbing installation tapped into the minds of tens of thousands of Toronto young professionals, getting the wheels turning on the benefits of growing their own food. Designed to introduce the concept of urban farming in a palatable and hands-on manner, the installation showcased the simplicity of urban farming by highlighting growing technology like Bright Agrotech’s ZipGrow Towers, Urban Cultivator Microgreen Growing Units, and Landscape Culture’s “Language of Plants.”.',
          impact:
            'The event not only reached over 20,000 young professionals in the downtown core, but fulfilled sustainability and greening mandates for Brookfield.',
          content: [
            {
              id: 'b18',
              type: 'TextBlock',
              text:
                'Our team was responsible for the design, concept, and execution of the Earth Week installation. This began with extensive research and development, as we sourced the latest and greatest growing technology.'
            },
            {
              id: 'b2',
              type: 'ImageBlock',
              url: '/img/experiences/earth-week-1.jpg',
              align: 'full'
            },
            {
              id: 'b19',
              type: 'TextBlock',
              text:
                'Through the design and construction of the installation, people experienced this technology for themselves, witnessing firsthand how urban gardening could become a reality. '
            },
            {
              id: 'b3',
              type: 'ImageBlock',
              url: '/img/experiences/earth-week-2.jpg',
              align: 'full'
            },
            {
              id: 'b20',
              type: 'TextBlock',
              text:
                'In addition to attracting curious passersby, we invited a curated selection of guests for a series of informative lunch events in the space, inspiring a powerful dialogue on the future of food.'
            },
            {
              id: 'b4',
              type: 'ImageBlock',
              url: '/img/experiences/earth-week-3.jpg',
              align: 'full'
            }
          ] //Blocks
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
              url: '/vids/anthropocene-hero.mp4',
              padding: 10
            },
            {
              id: 'bc1',
              type: 'QuoteBlock',
              text:
                'We humans may have become the impact-equivalent of that asteroid.',
              by: 'Jennifer Baichwal'
            }
          ] //Blocks
        },
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
          tags: ['Education', 'Community'],
          hero: '/img/experiences/interactive-galleries-ed-4.jpg',
          heroVideo: '/vids/art-hero.mp4',
          client:
            'Edward Burtynsky, Joshua Jensen Nagle, Benjamin Von Wong, George Steinmetz',
          description:
            'Held in typically unused, unique yet convenient spaces, our art projects are attention grabbing. We take unused space, reimagine it, and make it a captivating, discovery-filled, and meaningful learning experience. From our global network of respected artists, we can transform a blank canvas of a space into an experience that instigates a powerful dialogue. Leave it to us to curate installations – whether clean and simple or infused with technology – that match your objectives, and to craft an experience that will become associated with your brand.',
          impact:
            'Our installations have connected with over 10,000 young urban professionals daily, resulting in increased foot-traffic, earned media and press, and help fulfill cultural and sustainability initiatives.',
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
                'We took visitors on a self-guided interactive tour that explored the work and world of renowned Canadian artist Ed Burtynsky. To share the works and findings of [Manufactured Landscapes](http://www.edwardburtynsky.com/site_contents/Films/Manufactured_Landscapes_Film.html) – a feature length documentary on Burtynsky – the tour showcased the photographs of Burtynsky’s 25-year exploration of how industrial activity has created and shaped the landscapes of our world.'
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
            },
            {
              id: 'interactive-galleries-13',
              type: 'TextBlock',
              text:
                'With our interactive art installations, our team offers everything from the strategic planning of brand managers and the trained eye of curators, to the person-power needed for a full exhibit setup and takedown. Reimagining the way that art is displayed, our spatial designers transform unconventional spaces into layered galleries, managing the process from start to finish. We handle everything with the greatest guest impact in mind, from access to our roster of coveted artists, to the infusion of innovative tech that enhance commentary.'
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
          tags: ['Community', 'Tech'],
          hero: '/img/experiences/osheaga-oasis-3.jpg',
          heroVideo: '/vids/topshop-hero.mp4',
          client: 'TopShop',
          description:
            'We were there to make sure [Osheaga](https://www.osheaga.com/en) goers were well aware that the UK’s beloved TopShop was coming to Canada with a “TopShop Urban Oasis” tech installation at the popular Montreal music festival. Offering a place of calm from the festivities, here, guests could rehydrate with water and document their festival experience with branded cameras.  TopShop fans could also deepen their connection with the brand by joining in an interactive experience.',
          impact:
            'Not only did TopShop offer an unexpected and well-received experience to the 50,000 festival goers, the tech installation resulted in over 10,000 sign-ups.\n',
          content: [] //Blocks
        },
        {
          _component: null,
          _active: false,
          route: {
            path: '/experiences/terroni',
            strict: true
          },
          id: 'ep8',
          type: 'experiences',
          name: 'Terroni',
          tags: ['Tech', 'Community'],
          hero: '/img/experiences/terroni-hero.jpg',
          heroVideo: '/vids/terroni-hero.mp4',
          client: 'Terroni Restaurants',
          description:
            'We redesigned and developed a new web experience for longtime favourite Toronto and Los Angeles Italian restaurant, [Terroni](http://www.terroni.com/). With a mission to offer a clean, easy, and family-friendly experience, our team devised the digital strategy, and built the entire online presence for Terroni’s family of restaurants. We took the original design and aesthetic of the brand and translated it to a visually pleasing online and digital experience filled with crisp, colourful, and delicious-looking photos.  The digital experience improves the customer journey while telling the story of the beloved brand while combining all business facets into one seamless experience.',
          impact:
            'The new web experience resulted in increasing Terroni’s visitors from the 10,000s per month, up into the 1,000,000s per month.',
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
              url: '/vids/market-stall.mp4'
            },
            {
              id: 'bc8',
              type: 'VideoBlock',
              text: 'More text that is good.',
              url: '/vids/market-sammiches.mp4'
            },
            {
              id: 'bc9',
              type: 'VideoBlock',
              text: 'Something something something else. Markets.',
              url: '/vids/market-people.mp4'
            },
            {
              id: 'bc10',
              type: 'VideoBlock',
              text: 'Join our market today, contact us below.',
              url: '/vids/market-tomato.mp4'
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
              url: '/vids/market-pasta.mp4'
            },
            {
              id: 'bc2',
              type: 'VideoBlock',
              text: 'More text that is good.',
              url: '/vids/market-sign.mp4'
            },
            {
              id: 'bc3',
              type: 'VideoBlock',
              text: 'Something something something else. Markets.',
              url: '/vids/market-casey.mp4'
            },
            {
              id: 'bc4',
              type: 'VideoBlock',
              text: 'Join our market today, contact us below.',
              url: '/vids/market-bees.mp4'
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
