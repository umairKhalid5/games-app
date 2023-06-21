//? GenresList:
const genres = [
  { name: 'Action', id: 4 },
  { name: 'Indie', id: 51 },
  { name: 'Adventure', id: 3 },
  { name: 'RPG', id: 5 },
  { name: 'Strategy', id: 10 },
  { name: 'Shooter', id: 2 },
  { name: 'Casual', id: 40 },
  { name: 'Simulation', id: 14 },
  { name: 'Puzzle', id: 7 },
  { name: 'Arcade', id: 11 },
  { name: 'Platformer', id: 83 },
  { name: 'Massively Multiplayer', id: 59 },
  { name: 'Racing', id: 1 },
  { name: 'Sports', id: 15 },
  { name: 'Fighting', id: 6 },
  { name: 'Family', id: 19 },
  { name: 'Board Games', id: 28 },
  { name: 'Educational', id: 34 },
  { name: 'Card', id: 17 },
];

const platforms = [
  { name: 'PC', id: 1 },
  { name: 'PlayStation', id: 2 },
  { name: 'Xbox', id: 3 },
  { name: 'Nintendo', id: 7 },
];

//? All Games:
const data1 = {
  count: 850588,
  next: 'https://api.rawg.io/api/games?key=461802735fbb4bc2bf6b7e2fb125f043&page=2&page_size=2',
  previous: null,
  results: [
    {
      id: 3498,
      slug: 'grand-theft-auto-v',
      name: 'Grand Theft Auto V',
      released: '2013-09-17',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      rating: 4.47,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 3809,
          percent: 58.95,
        },
        {
          id: 4,
          title: 'recommended',
          count: 2124,
          percent: 32.87,
        },
        {
          id: 3,
          title: 'meh',
          count: 410,
          percent: 6.35,
        },
        {
          id: 1,
          title: 'skip',
          count: 118,
          percent: 1.83,
        },
      ],
      ratings_count: 6369,
      reviews_text_count: 52,
      added: 19488,
      added_by_status: {
        yet: 502,
        owned: 11234,
        beaten: 5457,
        toplay: 576,
        dropped: 1021,
        playing: 698,
      },
      metacritic: 92,
      playtime: 73,
      suggestions_count: 421,
      updated: '2023-06-19T17:53:02',
      user_game: null,
      reviews_count: 6461,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 887,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 768,
            image_background:
              'https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6642,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 513343,
            image_background:
              'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: {
            minimum:
              'Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.',
            recommended:
              'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: 'PlayStation 3',
            slug: 'playstation3',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3181,
            image_background:
              'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 14,
            name: 'Xbox 360',
            slug: 'xbox360',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2774,
            image_background:
              'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5517,
            image_background:
              'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
          },
          released_at: '2013-09-17',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 172946,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 132715,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
      ],
      stores: [
        {
          id: 290375,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7819,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 438095,
          store: {
            id: 11,
            name: 'Epic Games',
            slug: 'epic-games',
            domain: 'epicgames.com',
            games_count: 1245,
            image_background:
              'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
          },
        },
        {
          id: 290376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 76203,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 290377,
          store: {
            id: 7,
            name: 'Xbox 360 Store',
            slug: 'xbox360',
            domain: 'marketplace.xbox.com',
            games_count: 1912,
            image_background:
              'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
          },
        },
        {
          id: 290378,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4760,
            image_background:
              'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206004,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40847,
          name: 'Steam Achievements',
          slug: 'steam-achievements',
          language: 'eng',
          games_count: 30619,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 7,
          name: 'Multiplayer',
          slug: 'multiplayer',
          language: 'eng',
          games_count: 35015,
          image_background:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14358,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29520,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3239,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17300,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 18,
          name: 'Co-op',
          slug: 'co-op',
          language: 'eng',
          games_count: 9836,
          image_background:
            'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6284,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 411,
          name: 'cooperative',
          slug: 'cooperative',
          language: 'eng',
          games_count: 4079,
          image_background:
            'https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg',
        },
        {
          id: 8,
          name: 'First-Person',
          slug: 'first-person',
          language: 'eng',
          games_count: 28568,
          image_background:
            'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9441,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 4,
          name: 'Funny',
          slug: 'funny',
          language: 'eng',
          games_count: 22529,
          image_background:
            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5921,
          image_background:
            'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg',
        },
        {
          id: 123,
          name: 'Comedy',
          slug: 'comedy',
          language: 'eng',
          games_count: 10882,
          image_background:
            'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
        },
        {
          id: 150,
          name: 'Third-Person Shooter',
          slug: 'third-person-shooter',
          language: 'eng',
          games_count: 2896,
          image_background:
            'https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg',
        },
        {
          id: 62,
          name: 'Moddable',
          slug: 'moddable',
          language: 'eng',
          games_count: 773,
          image_background:
            'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
        },
        {
          id: 144,
          name: 'Crime',
          slug: 'crime',
          language: 'eng',
          games_count: 2548,
          image_background:
            'https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg',
        },
        {
          id: 62349,
          name: 'vr mod',
          slug: 'vr-mod',
          language: 'eng',
          games_count: 17,
          image_background:
            'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 1827221,
          image:
            'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
        },
        {
          id: 1827222,
          image:
            'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
        },
        {
          id: 1827223,
          image:
            'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
        },
        {
          id: 1827225,
          image:
            'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
        },
        {
          id: 1827226,
          image:
            'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
        },
        {
          id: 1827227,
          image:
            'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
        },
      ],
    },
    {
      id: 3328,
      slug: 'the-witcher-3-wild-hunt',
      name: 'The Witcher 3: Wild Hunt',
      released: '2015-05-18',
      tba: false,
      background_image:
        'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      rating: 4.66,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: 'exceptional',
          count: 4776,
          percent: 77.38,
        },
        {
          id: 4,
          title: 'recommended',
          count: 989,
          percent: 16.02,
        },
        {
          id: 3,
          title: 'meh',
          count: 253,
          percent: 4.1,
        },
        {
          id: 1,
          title: 'skip',
          count: 154,
          percent: 2.5,
        },
      ],
      ratings_count: 6076,
      reviews_text_count: 66,
      added: 18667,
      added_by_status: {
        yet: 1067,
        owned: 10754,
        beaten: 4428,
        toplay: 734,
        dropped: 847,
        playing: 837,
      },
      metacritic: 92,
      playtime: 46,
      suggestions_count: 665,
      updated: '2023-06-18T14:07:05',
      user_game: null,
      reviews_count: 6172,
      saturated_color: '0f0f0f',
      dominant_color: '0f0f0f',
      platforms: [
        {
          platform: {
            id: 186,
            name: 'Xbox Series S/X',
            slug: 'xbox-series-x',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 768,
            image_background:
              'https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: 'PlayStation 4',
            slug: 'playstation4',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6642,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo Switch',
            slug: 'nintendo-switch',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5246,
            image_background:
              'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: 'PC',
            slug: 'pc',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 513343,
            image_background:
              'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: 'Xbox One',
            slug: 'xbox-one',
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5517,
            image_background:
              'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: 'PlayStation 5',
            slug: 'playstation5',
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 887,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
          released_at: '2015-05-18',
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: 'PC',
            slug: 'pc',
          },
        },
        {
          platform: {
            id: 2,
            name: 'PlayStation',
            slug: 'playstation',
          },
        },
        {
          platform: {
            id: 3,
            name: 'Xbox',
            slug: 'xbox',
          },
        },
        {
          platform: {
            id: 7,
            name: 'Nintendo',
            slug: 'nintendo',
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: 'Action',
          slug: 'action',
          games_count: 172946,
          image_background:
            'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
        },
        {
          id: 3,
          name: 'Adventure',
          slug: 'adventure',
          games_count: 132715,
          image_background:
            'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
        },
        {
          id: 5,
          name: 'RPG',
          slug: 'role-playing-games-rpg',
          games_count: 52571,
          image_background:
            'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
        },
      ],
      stores: [
        {
          id: 354780,
          store: {
            id: 5,
            name: 'GOG',
            slug: 'gog',
            domain: 'gog.com',
            games_count: 5221,
            image_background:
              'https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg',
          },
        },
        {
          id: 3565,
          store: {
            id: 3,
            name: 'PlayStation Store',
            slug: 'playstation-store',
            domain: 'store.playstation.com',
            games_count: 7819,
            image_background:
              'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
          },
        },
        {
          id: 305376,
          store: {
            id: 1,
            name: 'Steam',
            slug: 'steam',
            domain: 'store.steampowered.com',
            games_count: 76203,
            image_background:
              'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
          },
        },
        {
          id: 312313,
          store: {
            id: 2,
            name: 'Xbox Store',
            slug: 'xbox-store',
            domain: 'microsoft.com',
            games_count: 4760,
            image_background:
              'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
          },
        },
        {
          id: 676022,
          store: {
            id: 6,
            name: 'Nintendo Store',
            slug: 'nintendo',
            domain: 'nintendo.com',
            games_count: 8874,
            image_background:
              'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: 'Singleplayer',
          slug: 'singleplayer',
          language: 'eng',
          games_count: 206004,
          image_background:
            'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
        },
        {
          id: 40836,
          name: 'Full controller support',
          slug: 'full-controller-support',
          language: 'eng',
          games_count: 14358,
          image_background:
            'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
        },
        {
          id: 13,
          name: 'Atmospheric',
          slug: 'atmospheric',
          language: 'eng',
          games_count: 29520,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 42,
          name: 'Great Soundtrack',
          slug: 'great-soundtrack',
          language: 'eng',
          games_count: 3239,
          image_background:
            'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
        },
        {
          id: 24,
          name: 'RPG',
          slug: 'rpg',
          language: 'eng',
          games_count: 17300,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 118,
          name: 'Story Rich',
          slug: 'story-rich',
          language: 'eng',
          games_count: 18228,
          image_background:
            'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
        },
        {
          id: 36,
          name: 'Open World',
          slug: 'open-world',
          language: 'eng',
          games_count: 6284,
          image_background:
            'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
        },
        {
          id: 149,
          name: 'Third Person',
          slug: 'third-person',
          language: 'eng',
          games_count: 9441,
          image_background:
            'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
        },
        {
          id: 64,
          name: 'Fantasy',
          slug: 'fantasy',
          language: 'eng',
          games_count: 24519,
          image_background:
            'https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg',
        },
        {
          id: 37,
          name: 'Sandbox',
          slug: 'sandbox',
          language: 'eng',
          games_count: 5921,
          image_background:
            'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg',
        },
        {
          id: 97,
          name: 'Action RPG',
          slug: 'action-rpg',
          language: 'eng',
          games_count: 5727,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
        {
          id: 41,
          name: 'Dark',
          slug: 'dark',
          language: 'eng',
          games_count: 14117,
          image_background:
            'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
        },
        {
          id: 44,
          name: 'Nudity',
          slug: 'nudity',
          language: 'eng',
          games_count: 4983,
          image_background:
            'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        },
        {
          id: 336,
          name: 'controller support',
          slug: 'controller-support',
          language: 'eng',
          games_count: 293,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
        },
        {
          id: 145,
          name: 'Choices Matter',
          slug: 'choices-matter',
          language: 'eng',
          games_count: 3592,
          image_background:
            'https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg',
        },
        {
          id: 192,
          name: 'Mature',
          slug: 'mature',
          language: 'eng',
          games_count: 2198,
          image_background:
            'https://media.rawg.io/media/games/a34/a348e613424260bc7e034fb6031c762e.jpg',
        },
        {
          id: 40,
          name: 'Dark Fantasy',
          slug: 'dark-fantasy',
          language: 'eng',
          games_count: 3253,
          image_background:
            'https://media.rawg.io/media/games/1dc/1dc45435c09f844b24eb96cd66eb6325.jpg',
        },
        {
          id: 66,
          name: 'Medieval',
          slug: 'medieval',
          language: 'eng',
          games_count: 5376,
          image_background:
            'https://media.rawg.io/media/games/c07/c07e1c1e6908a2eeebd5dad0708abd01.jpg',
        },
        {
          id: 82,
          name: 'Magic',
          slug: 'magic',
          language: 'eng',
          games_count: 8110,
          image_background:
            'https://media.rawg.io/media/games/071/0715f91a89d634d9183e2f23c0cb1a98.jpg',
        },
        {
          id: 218,
          name: 'Multiple Endings',
          slug: 'multiple-endings',
          language: 'eng',
          games_count: 7100,
          image_background:
            'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
        },
      ],
      esrb_rating: {
        id: 4,
        name: 'Mature',
        slug: 'mature',
      },
      short_screenshots: [
        {
          id: -1,
          image:
            'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
        },
        {
          id: 30336,
          image:
            'https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg',
        },
        {
          id: 30337,
          image:
            'https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg',
        },
        {
          id: 30338,
          image:
            'https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg',
        },
        {
          id: 30339,
          image:
            'https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg',
        },
        {
          id: 30340,
          image:
            'https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg',
        },
        {
          id: 30342,
          image:
            'https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg',
        },
      ],
    },
  ],
  seo_title: 'All Games',
  seo_description: '',
  seo_keywords: '',
  seo_h1: 'All Games',
  noindex: false,
  nofollow: false,
  description: '',
  filters: {
    years: [
      {
        from: 2020,
        to: 2023,
        filter: '2020-01-01,2023-12-31',
        decade: 2020,
        years: [
          {
            year: 2023,
            count: 54469,
            nofollow: false,
          },
          {
            year: 2022,
            count: 167461,
            nofollow: false,
          },
          {
            year: 2021,
            count: 158151,
            nofollow: false,
          },
          {
            year: 2020,
            count: 119798,
            nofollow: false,
          },
        ],
        nofollow: true,
        count: 499879,
      },
      {
        from: 2010,
        to: 2019,
        filter: '2010-01-01,2019-12-31',
        decade: 2010,
        years: [
          {
            year: 2019,
            count: 73491,
            nofollow: false,
          },
          {
            year: 2018,
            count: 67917,
            nofollow: false,
          },
          {
            year: 2017,
            count: 54569,
            nofollow: true,
          },
          {
            year: 2016,
            count: 40226,
            nofollow: true,
          },
          {
            year: 2015,
            count: 25884,
            nofollow: true,
          },
          {
            year: 2014,
            count: 15343,
            nofollow: true,
          },
          {
            year: 2013,
            count: 6332,
            nofollow: true,
          },
          {
            year: 2012,
            count: 5383,
            nofollow: true,
          },
          {
            year: 2011,
            count: 4313,
            nofollow: true,
          },
          {
            year: 2010,
            count: 3883,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 297341,
      },
      {
        from: 2000,
        to: 2009,
        filter: '2000-01-01,2009-12-31',
        decade: 2000,
        years: [
          {
            year: 2009,
            count: 3107,
            nofollow: true,
          },
          {
            year: 2008,
            count: 2033,
            nofollow: true,
          },
          {
            year: 2007,
            count: 1562,
            nofollow: true,
          },
          {
            year: 2006,
            count: 1284,
            nofollow: true,
          },
          {
            year: 2005,
            count: 1166,
            nofollow: true,
          },
          {
            year: 2004,
            count: 1175,
            nofollow: true,
          },
          {
            year: 2003,
            count: 1142,
            nofollow: true,
          },
          {
            year: 2002,
            count: 993,
            nofollow: true,
          },
          {
            year: 2001,
            count: 1117,
            nofollow: true,
          },
          {
            year: 2000,
            count: 1010,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 14589,
      },
      {
        from: 1990,
        to: 1999,
        filter: '1990-01-01,1999-12-31',
        decade: 1990,
        years: [
          {
            year: 1999,
            count: 784,
            nofollow: true,
          },
          {
            year: 1998,
            count: 725,
            nofollow: true,
          },
          {
            year: 1997,
            count: 873,
            nofollow: true,
          },
          {
            year: 1996,
            count: 766,
            nofollow: true,
          },
          {
            year: 1995,
            count: 865,
            nofollow: true,
          },
          {
            year: 1994,
            count: 818,
            nofollow: true,
          },
          {
            year: 1993,
            count: 744,
            nofollow: true,
          },
          {
            year: 1992,
            count: 656,
            nofollow: true,
          },
          {
            year: 1991,
            count: 578,
            nofollow: true,
          },
          {
            year: 1990,
            count: 539,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 7348,
      },
      {
        from: 1980,
        to: 1989,
        filter: '1980-01-01,1989-12-31',
        decade: 1980,
        years: [
          {
            year: 1989,
            count: 434,
            nofollow: true,
          },
          {
            year: 1988,
            count: 317,
            nofollow: true,
          },
          {
            year: 1987,
            count: 342,
            nofollow: true,
          },
          {
            year: 1986,
            count: 249,
            nofollow: true,
          },
          {
            year: 1985,
            count: 230,
            nofollow: true,
          },
          {
            year: 1984,
            count: 185,
            nofollow: true,
          },
          {
            year: 1983,
            count: 206,
            nofollow: true,
          },
          {
            year: 1982,
            count: 148,
            nofollow: true,
          },
          {
            year: 1981,
            count: 65,
            nofollow: true,
          },
          {
            year: 1980,
            count: 35,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 2211,
      },
      {
        from: 1970,
        to: 1979,
        filter: '1970-01-01,1979-12-31',
        decade: 1970,
        years: [
          {
            year: 1979,
            count: 15,
            nofollow: true,
          },
          {
            year: 1978,
            count: 17,
            nofollow: true,
          },
          {
            year: 1977,
            count: 13,
            nofollow: true,
          },
          {
            year: 1976,
            count: 7,
            nofollow: true,
          },
          {
            year: 1975,
            count: 3,
            nofollow: true,
          },
          {
            year: 1974,
            count: 2,
            nofollow: true,
          },
          {
            year: 1973,
            count: 1,
            nofollow: true,
          },
          {
            year: 1972,
            count: 2,
            nofollow: true,
          },
          {
            year: 1971,
            count: 6,
            nofollow: true,
          },
          {
            year: 1970,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 67,
      },
      {
        from: 1960,
        to: 1969,
        filter: '1960-01-01,1969-12-31',
        decade: 1960,
        years: [
          {
            year: 1962,
            count: 1,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 1,
      },
      {
        from: 1950,
        to: 1959,
        filter: '1950-01-01,1959-12-31',
        decade: 1950,
        years: [
          {
            year: 1958,
            count: 1,
            nofollow: true,
          },
          {
            year: 1954,
            count: 2,
            nofollow: true,
          },
        ],
        nofollow: true,
        count: 3,
      },
    ],
  },
  nofollow_collections: ['stores'],
};

//? One Game by ID:
const date2 = {
  id: 3498,
  slug: 'grand-theft-auto-v',
  name: 'Grand Theft Auto V',
  name_original: 'Grand Theft Auto V',
  description:
    '<p>Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. <br />\nSimultaneous storytelling from three unique perspectives: <br />\nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. <br />\nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.</p>\n<p>Español<br />\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.<br />\nNarración simultánea desde tres perspectivas únicas:<br />\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.<br />\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.</p>',
  metacritic: 92,
  metacritic_platforms: [
    {
      metascore: 79,
      url: 'https://www.metacritic.com/game/xbox-series-x/grand-theft-auto-v',
      platform: {
        platform: 186,
        name: 'Xbox Series S/X',
        slug: 'xbox-series-x',
      },
    },
    {
      metascore: 97,
      url: 'https://www.metacritic.com/game/xbox-one/grand-theft-auto-v',
      platform: {
        platform: 1,
        name: 'Xbox One',
        slug: 'xbox-one',
      },
    },
    {
      metascore: 97,
      url: 'https://www.metacritic.com/game/xbox-360/grand-theft-auto-v',
      platform: {
        platform: 14,
        name: 'Xbox 360',
        slug: 'xbox360',
      },
    },
    {
      metascore: 81,
      url: 'https://www.metacritic.com/game/playstation-5/grand-theft-auto-v',
      platform: {
        platform: 187,
        name: 'PlayStation 5',
        slug: 'playstation5',
      },
    },
    {
      metascore: 97,
      url: 'https://www.metacritic.com/game/playstation-4/grand-theft-auto-v',
      platform: {
        platform: 18,
        name: 'PlayStation 4',
        slug: 'playstation4',
      },
    },
    {
      metascore: 97,
      url: 'https://www.metacritic.com/game/playstation-3/grand-theft-auto-v',
      platform: {
        platform: 16,
        name: 'PlayStation 3',
        slug: 'playstation3',
      },
    },
    {
      metascore: 96,
      url: 'https://www.metacritic.com/game/pc/grand-theft-auto-v',
      platform: {
        platform: 4,
        name: 'PC',
        slug: 'pc',
      },
    },
  ],
  released: '2013-09-17',
  tba: false,
  updated: '2023-06-19T17:53:02',
  background_image:
    'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
  background_image_additional:
    'https://media.rawg.io/media/screenshots/5f5/5f5a38a222252d996b18962806eed707.jpg',
  website: 'http://www.rockstargames.com/V/',
  rating: 4.47,
  rating_top: 5,
  ratings: [
    {
      id: 5,
      title: 'exceptional',
      count: 3809,
      percent: 58.95,
    },
    {
      id: 4,
      title: 'recommended',
      count: 2124,
      percent: 32.87,
    },
    {
      id: 3,
      title: 'meh',
      count: 410,
      percent: 6.35,
    },
    {
      id: 1,
      title: 'skip',
      count: 118,
      percent: 1.83,
    },
  ],
  reactions: {
    1: 29,
    2: 8,
    3: 36,
    4: 18,
    5: 13,
    6: 9,
    7: 17,
    8: 22,
    9: 2,
    10: 10,
    11: 19,
    12: 15,
    14: 3,
    15: 2,
    16: 6,
    18: 4,
    20: 1,
    21: 2,
  },
  added: 19488,
  added_by_status: {
    yet: 502,
    owned: 11234,
    beaten: 5457,
    toplay: 576,
    dropped: 1021,
    playing: 698,
  },
  playtime: 73,
  screenshots_count: 57,
  movies_count: 8,
  creators_count: 11,
  achievements_count: 539,
  parent_achievements_count: 75,
  reddit_url: 'https://www.reddit.com/r/GrandTheftAutoV/',
  reddit_name: '/r/GrandTheftAutoV',
  reddit_description:
    "/r/GrandTheftAutoV - the subreddit for all GTA V related news, content, and discussions revolving around Rockstar's critically acclaimed single player release and the ongoing multiplayer expansion of Grand Theft Auto Online.",
  reddit_logo: '',
  reddit_count: 5159,
  twitch_count: 125,
  youtube_count: 1000000,
  reviews_text_count: 92,
  ratings_count: 6369,
  suggestions_count: 421,
  alternative_names: ['GTA 5', 'GTA V', 'GTA5', 'GTAV'],
  metacritic_url: 'https://www.metacritic.com/game/pc/grand-theft-auto-v',
  parents_count: 0,
  additions_count: 3,
  game_series_count: 10,
  user_game: null,
  reviews_count: 6461,
  saturated_color: '0f0f0f',
  dominant_color: '0f0f0f',
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: 'PC',
        slug: 'pc',
      },
    },
    {
      platform: {
        id: 2,
        name: 'PlayStation',
        slug: 'playstation',
      },
    },
    {
      platform: {
        id: 3,
        name: 'Xbox',
        slug: 'xbox',
      },
    },
  ],
  platforms: [
    {
      platform: {
        id: 187,
        name: 'PlayStation 5',
        slug: 'playstation5',
        image: null,
        year_end: null,
        year_start: 2020,
        games_count: 887,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
    {
      platform: {
        id: 186,
        name: 'Xbox Series S/X',
        slug: 'xbox-series-x',
        image: null,
        year_end: null,
        year_start: 2020,
        games_count: 768,
        image_background:
          'https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
    {
      platform: {
        id: 18,
        name: 'PlayStation 4',
        slug: 'playstation4',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 6642,
        image_background:
          'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
    {
      platform: {
        id: 4,
        name: 'PC',
        slug: 'pc',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 513343,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      released_at: '2013-09-17',
      requirements: {
        minimum:
          'Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.',
        recommended:
          'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
      },
    },
    {
      platform: {
        id: 16,
        name: 'PlayStation 3',
        slug: 'playstation3',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 3181,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
    {
      platform: {
        id: 14,
        name: 'Xbox 360',
        slug: 'xbox360',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 2774,
        image_background:
          'https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
    {
      platform: {
        id: 1,
        name: 'Xbox One',
        slug: 'xbox-one',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 5517,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      released_at: '2013-09-17',
      requirements: {},
    },
  ],
  stores: [
    {
      id: 290375,
      url: '',
      store: {
        id: 3,
        name: 'PlayStation Store',
        slug: 'playstation-store',
        domain: 'store.playstation.com',
        games_count: 7819,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
    },
    {
      id: 438095,
      url: '',
      store: {
        id: 11,
        name: 'Epic Games',
        slug: 'epic-games',
        domain: 'epicgames.com',
        games_count: 1245,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
      },
    },
    {
      id: 290376,
      url: '',
      store: {
        id: 1,
        name: 'Steam',
        slug: 'steam',
        domain: 'store.steampowered.com',
        games_count: 76203,
        image_background:
          'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
      },
    },
    {
      id: 290377,
      url: '',
      store: {
        id: 7,
        name: 'Xbox 360 Store',
        slug: 'xbox360',
        domain: 'marketplace.xbox.com',
        games_count: 1912,
        image_background:
          'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
      },
    },
    {
      id: 290378,
      url: '',
      store: {
        id: 2,
        name: 'Xbox Store',
        slug: 'xbox-store',
        domain: 'microsoft.com',
        games_count: 4760,
        image_background:
          'https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg',
      },
    },
  ],
  developers: [
    {
      id: 3524,
      name: 'Rockstar North',
      slug: 'rockstar-north',
      games_count: 29,
      image_background:
        'https://media.rawg.io/media/screenshots/b98/b98adb52b2123a14d1c88e828a6b49f3.jpg',
    },
    {
      id: 10,
      name: 'Rockstar Games',
      slug: 'rockstar-games',
      games_count: 26,
      image_background:
        'https://media.rawg.io/media/games/769/769b7f0f609f44bac86f2c791fee21dd.jpg',
    },
  ],
  genres: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
      games_count: 172946,
      image_background:
        'https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg',
    },
    {
      id: 3,
      name: 'Adventure',
      slug: 'adventure',
      games_count: 132715,
      image_background:
        'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
    },
  ],
  tags: [
    {
      id: 31,
      name: 'Singleplayer',
      slug: 'singleplayer',
      language: 'eng',
      games_count: 206004,
      image_background:
        'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
    },
    {
      id: 40847,
      name: 'Steam Achievements',
      slug: 'steam-achievements',
      language: 'eng',
      games_count: 30619,
      image_background:
        'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
    },
    {
      id: 7,
      name: 'Multiplayer',
      slug: 'multiplayer',
      language: 'eng',
      games_count: 35015,
      image_background:
        'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
    },
    {
      id: 40836,
      name: 'Full controller support',
      slug: 'full-controller-support',
      language: 'eng',
      games_count: 14358,
      image_background:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
    },
    {
      id: 13,
      name: 'Atmospheric',
      slug: 'atmospheric',
      language: 'eng',
      games_count: 29520,
      image_background:
        'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
    },
    {
      id: 42,
      name: 'Great Soundtrack',
      slug: 'great-soundtrack',
      language: 'eng',
      games_count: 3239,
      image_background:
        'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
    },
    {
      id: 24,
      name: 'RPG',
      slug: 'rpg',
      language: 'eng',
      games_count: 17300,
      image_background:
        'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
    },
    {
      id: 18,
      name: 'Co-op',
      slug: 'co-op',
      language: 'eng',
      games_count: 9836,
      image_background:
        'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
    },
    {
      id: 36,
      name: 'Open World',
      slug: 'open-world',
      language: 'eng',
      games_count: 6284,
      image_background:
        'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
    },
    {
      id: 411,
      name: 'cooperative',
      slug: 'cooperative',
      language: 'eng',
      games_count: 4079,
      image_background:
        'https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg',
    },
    {
      id: 8,
      name: 'First-Person',
      slug: 'first-person',
      language: 'eng',
      games_count: 28568,
      image_background:
        'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
    },
    {
      id: 149,
      name: 'Third Person',
      slug: 'third-person',
      language: 'eng',
      games_count: 9441,
      image_background:
        'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
    },
    {
      id: 4,
      name: 'Funny',
      slug: 'funny',
      language: 'eng',
      games_count: 22529,
      image_background:
        'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
    },
    {
      id: 37,
      name: 'Sandbox',
      slug: 'sandbox',
      language: 'eng',
      games_count: 5921,
      image_background:
        'https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg',
    },
    {
      id: 123,
      name: 'Comedy',
      slug: 'comedy',
      language: 'eng',
      games_count: 10882,
      image_background:
        'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
    },
    {
      id: 150,
      name: 'Third-Person Shooter',
      slug: 'third-person-shooter',
      language: 'eng',
      games_count: 2896,
      image_background:
        'https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg',
    },
    {
      id: 62,
      name: 'Moddable',
      slug: 'moddable',
      language: 'eng',
      games_count: 773,
      image_background:
        'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
    },
    {
      id: 144,
      name: 'Crime',
      slug: 'crime',
      language: 'eng',
      games_count: 2548,
      image_background:
        'https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg',
    },
    {
      id: 62349,
      name: 'vr mod',
      slug: 'vr-mod',
      language: 'eng',
      games_count: 17,
      image_background:
        'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
    },
  ],
  publishers: [
    {
      id: 2155,
      name: 'Rockstar Games',
      slug: 'rockstar-games',
      games_count: 79,
      image_background:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    },
  ],
  esrb_rating: {
    id: 4,
    name: 'Mature',
    slug: 'mature',
  },
  clip: null,
  description_raw:
    'Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. \nSimultaneous storytelling from three unique perspectives: \nFollow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. \nGTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.\n\nEspañol\nRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.\nNarración simultánea desde tres perspectivas únicas:\nSigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.\nGTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.',
};
