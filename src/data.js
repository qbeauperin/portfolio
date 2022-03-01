const data = {
    'projects' : [
        {
            key: 1,
            name: 'Dauntless roadmap',
            uri: 'dauntless-roadmap',
            techs: ['react', 'greensock', 'sass', 'gulp'],
            features: [
                'interactive "3d-like" interface', 
                'seamless animations and transitions between pages', 
                'search function',
                'notification system for returning users',
                'mobile friendly', 
                'alternative accessible version'
            ],
            imgs: [
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap1.jpg'},
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap2.jpg'},
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap3.jpg'},
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap4.jpg'},
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap5.jpg'},
                {type: 'desktop', src: '/images/dauntless-roadmap/dauntless-roadmap6.jpg'},
                {type: 'mobile', src: '/images/dauntless-roadmap/dauntless-roadmap7.jpg'},
                {type: 'mobile', src: '/images/dauntless-roadmap/dauntless-roadmap8.jpg'},
                {type: 'mobile', src: '/images/dauntless-roadmap/dauntless-roadmap9.jpg'},
                {type: 'mobile', src: '/images/dauntless-roadmap/dauntless-roadmap10.jpg'},
                {type: 'mobile', src: '/images/dauntless-roadmap/dauntless-roadmap11.jpg'},
            ]
        },
        {
            key: 2,
            name: 'Dauntless website',
            uri: 'dauntless-website',
            link: 'https://playdauntless.com/',
            techs: ['jekyll', 'liquid', 'html5', 'sass', 'gulp'],
            features: ['static site', 'regular content updates', 'millions of MAU'],
            imgs: [
                {type: 'desktop', src: '/images/dauntless/dauntless1.jpg'},
                {type: 'desktop', src: '/images/dauntless/dauntless2.jpg'},
                {type: 'desktop', src: '/images/dauntless/dauntless3.jpg'},
                {type: 'desktop', src: '/images/dauntless/dauntless4.jpg'},
                {type: 'desktop', src: '/images/dauntless/dauntless5.jpg'},
                {type: 'mobile', src: '/images/dauntless/dauntless6.jpg'},
                {type: 'mobile', src: '/images/dauntless/dauntless7.jpg'},
                {type: 'mobile', src: '/images/dauntless/dauntless8.jpg'},
                {type: 'mobile', src: '/images/dauntless/dauntless9.jpg'},
                {type: 'mobile', src: '/images/dauntless/dauntless10.jpg'},
            ]
        },
        {
            key: 3,
            name: 'Leon and Harper',
            uri: 'leon-and-harper',
            link: 'https://www.leonandharper.com/en/',
            techs: ['magento', 'wordpress', 'fishpig', 'php', 'sass', 'grunt', 'bootstrap', 'gmaps'],
            features: ['e-commerce', 'store locator', 'mobile version'],
            imgs: [
                {type: 'desktop', src: '/images/leonandharper/leonandharper1.jpg'},
                {type: 'desktop', src: '/images/leonandharper/leonandharper2.jpg'},
                {type: 'desktop', src: '/images/leonandharper/leonandharper3.jpg'},
                {type: 'desktop', src: '/images/leonandharper/leonandharper4.jpg'},
                {type: 'mobile', src: '/images/leonandharper/leonandharper5.jpg'},
                {type: 'mobile', src: '/images/leonandharper/leonandharper6.jpg'},
                {type: 'mobile', src: '/images/leonandharper/leonandharper7.jpg'},
                {type: 'mobile', src: '/images/leonandharper/leonandharper8.jpg'},
                {type: 'mobile', src: '/images/leonandharper/leonandharper9.jpg'},
            ]
        },
        {
            key: 4,
            name: 'Travel journal',
            uri: 'travel-journal',
            techs: ['react', 'html5', 'sass', 'wordpress'],
            features: ['wordpress based API', 'dynamic google map with markers and polylines', 'responsive and multi-platform slider as main navigation', 'photo viewer', 'responsive'],
            comments: ['Personal project to illustrate my cross-Canada road-trip'],
            imgs: [
                {type: 'desktop', src: '/images/traveljournal/traveljournal1.jpg'},
                {type: 'desktop', src: '/images/traveljournal/traveljournal2.jpg'},
                {type: 'mobile', src: '/images/traveljournal/traveljournal3.jpg'},
                {type: 'mobile', src: '/images/traveljournal/traveljournal4.jpg'},
            ]
        },
        {
            key: 5,
            name: 'Natalys',
            uri: 'natalys',
            techs: ['magento', 'wordpress', 'fishpig', 'php', 'sass', 'grunt', 'bootstrap', 'gmaps'],
            features: ['e-commerce', 'store locator', 'mobile version'],
            imgs: [
                {type: 'desktop', src: '/images/natalys/natalys1.jpg'},
                {type: 'desktop', src: '/images/natalys/natalys2.jpg'},
                {type: 'desktop', src: '/images/natalys/natalys3.jpg'},
                {type: 'mobile', src: '/images/natalys/natalys4.jpg'},
                {type: 'mobile', src: '/images/natalys/natalys5.jpg'},
                {type: 'mobile', src: '/images/natalys/natalys6.jpg'},
            ]
        },
        {
            key: 6,
            name: 'Maille Leo',
            uri: 'maille-leo',
            techs: ['javascript', 'jquery', 'sass'],
            features: ['custom t-shirt configurator', 'responsive'],
            comments: [
                'the configurator allowed the user to create a custom t-shirt with the choice of sleeve type, collar type, color but also hundreds of designs to choose from and place wherever (front, back, sleeve and/or stack them)',
                'the user could see in real time multiple views of the shirt based on 3D renders and then place an order when satisfied with his creation',
                'I wish I knew React then'
            ],
            imgs: [
                {type: 'desktop', src: '/images/mailleleo/mailleleo1.jpg'},
                {type: 'desktop', src: '/images/mailleleo/mailleleo2.jpg'},
                {type: 'desktop', src: '/images/mailleleo/mailleleo3.jpg'},
                {type: 'desktop', src: '/images/mailleleo/mailleleo4.jpg'},
            ]
        },
        {
            key: 7,
            name: 'Nisop',
            uri: 'nisop',
            techs: ['wordpress', 'php', 'html5', 'sass'],
            features: ['courses catalog', 'online reservation', 'interesting design', 'cute little logo animation'],
            imgs: [
                {type: 'desktop', src: '/images/nisop/nisop1.jpg'},
                {type: 'desktop', src: '/images/nisop/nisop2.jpg'},
                {type: 'mobile', src: '/images/nisop/nisop3.jpg'},
                {type: 'mobile', src: '/images/nisop/nisop4.jpg'},
            ]
        },
        {
            key: 8,
            name: 'Oxbow SUP',
            uri: 'oxbow-sup',
            techs: ['wordpress', 'php', 'html5', 'sass'],
            features: ['differents object types presentation (ambassadors, collections, events, news)', 'user contribution module', 'newsletter'],
            imgs: [
                {type: 'desktop', src: '/images/oxbowsup/oxbowsup1.jpg'},
                {type: 'desktop', src: '/images/oxbowsup/oxbowsup2.jpg'},
                {type: 'desktop', src: '/images/oxbowsup/oxbowsup3.jpg'},
                {type: 'desktop', src: '/images/oxbowsup/oxbowsup4.jpg'},
            ]
        },
        {
            key: 9,
            name: 'Le Ptio',
            uri: 'le-ptio',
            techs: ['php', 'cakephp', 'javascript', 'jquery', 'sass'],
            features: ['custom scooter configurator', '360° live preview', 'purchase order generation'],
            imgs: [
                {type: 'desktop', src: '/images/leptio/leptio1.jpg'},
                {type: 'desktop', src: '/images/leptio/leptio2.jpg'},
            ]
        }
    ]
};

export default data;
