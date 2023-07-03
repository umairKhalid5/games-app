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

// ? Game Youtube Trailers:
export const yTGTrailers = [
  {
    kind: 'youtube#searchResult',
    id: {
      kind: 'youtube#video',
      videoId: 'QkkoHAzjnUs',
    },
    snippet: {
      publishedAt: '2011-11-02T13:37:55Z',
      channelId: 'UC6VcWc1rAoWdBCM0JxrRQ3A',
      title: 'Grand Theft Auto V Trailer',
      description: 'Grand Theft Auto V Trailer.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/QkkoHAzjnUs/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/QkkoHAzjnUs/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/QkkoHAzjnUs/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Rockstar Games',
      liveBroadcastContent: 'none',
      publishTime: '2011-11-02T13:37:55Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    id: {
      kind: 'youtube#video',
      videoId: 'hvoD7ehZPcM',
    },
    snippet: {
      publishedAt: '2013-08-29T14:58:39Z',
      channelId: 'UC6VcWc1rAoWdBCM0JxrRQ3A',
      title: 'Grand Theft Auto V: The Official Trailer',
      description:
        'Grand Theft Auto V is coming September 17, 2013. Pre-order now and visit www.rockstargames.com/V for more details.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hvoD7ehZPcM/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hvoD7ehZPcM/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/hvoD7ehZPcM/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Rockstar Games',
      liveBroadcastContent: 'none',
      publishTime: '2013-08-29T14:58:39Z',
    },
  },
];

// ? API Game Vids:
export const gameVids = {
  count: 8,
  next: null,
  previous: null,
  results: [
    {
      id: 16228,
      name: "GTA Online: Smuggler's Run Trailer",
      preview:
        'https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4',
      },
    },
    {
      id: 16227,
      name: 'GTA Online: Gunrunning Trailer',
      preview:
        'https://media.rawg.io/media/movies/80c/80c2eeb2478d31291dfb5a5fd5a45f2e.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256686767/movie_max.mp4',
      },
    },
    {
      id: 16226,
      name: 'GTA Online: Tiny Racers Trailer',
      preview:
        'https://media.rawg.io/media/movies/7c9/7c9f84f3ec31106944a04128287fdd6a.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256683844/movie_max.mp4',
      },
    },
    {
      id: 16225,
      name: 'GTA Online Cunning Stunts: Special Vehicle Circuit Trailer',
      preview:
        'https://media.rawg.io/media/movies/d6e/d6e1deb16c4275e8f5769528780e03ac.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256681415/movie_max.mp4',
      },
    },
    {
      id: 16224,
      name: 'GTA Online: Import/Export',
      preview:
        'https://media.rawg.io/media/movies/1c1/1c1429a6557185326c1d8c03a6f325c0.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256676519/movie_max.mp4',
      },
    },
    {
      id: 16223,
      name: 'GTA Online: Deadline',
      preview:
        'https://media.rawg.io/media/movies/f80/f8051b0eb479fa1785c1e04c8e54e322.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256674210/movie_max.mp4',
      },
    },
    {
      id: 16222,
      name: 'GTA Online: Bikers Trailer',
      preview:
        'https://media.rawg.io/media/movies/955/9556607dec02bf324c87aa33bba2ed8e.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256672028/movie_max.mp4',
      },
    },
    {
      id: 16221,
      name: 'GTA Online: Cunning Stunts Trailer',
      preview:
        'https://media.rawg.io/media/movies/66e/66e78864cf57faa2a52cfab4eb6830a4.jpg',
      data: {
        480: 'https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie480.mp4',
        max: 'https://steamcdn-a.akamaihd.net/steam/apps/256666646/movie_max.mp4',
      },
    },
  ],
};

// //? API Game Screenshots:
export const gameSs = [
  {
    id: 1827221,
    image:
      'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1827222,
    image:
      'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1827223,
    image:
      'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1827225,
    image:
      'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1827226,
    image:
      'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
  {
    id: 1827227,
    image:
      'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
    width: 1920,
    height: 1080,
    is_deleted: false,
  },
];

//? All Games:
export const data1 = {
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
export const singleGame = {
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

export const allGames = [
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
        count: 3816,
        percent: 58.97,
      },
      {
        id: 4,
        title: 'recommended',
        count: 2126,
        percent: 32.85,
      },
      {
        id: 3,
        title: 'meh',
        count: 410,
        percent: 6.34,
      },
      {
        id: 1,
        title: 'skip',
        count: 119,
        percent: 1.84,
      },
    ],
    ratings_count: 6379,
    reviews_text_count: 52,
    added: 19501,
    added_by_status: {
      yet: 503,
      owned: 11237,
      beaten: 5462,
      toplay: 578,
      dropped: 1023,
      playing: 698,
    },
    metacritic: 92,
    playtime: 73,
    suggestions_count: 421,
    updated: '2023-06-23T05:11:22',
    user_game: null,
    reviews_count: 6471,
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
        count: 4784,
        percent: 77.4,
      },
      {
        id: 4,
        title: 'recommended',
        count: 990,
        percent: 16.02,
      },
      {
        id: 3,
        title: 'meh',
        count: 253,
        percent: 4.09,
      },
      {
        id: 1,
        title: 'skip',
        count: 154,
        percent: 2.49,
      },
    ],
    ratings_count: 6085,
    reviews_text_count: 66,
    added: 18681,
    added_by_status: {
      yet: 1067,
      owned: 10757,
      beaten: 4434,
      toplay: 736,
      dropped: 848,
      playing: 839,
    },
    metacritic: 92,
    playtime: 46,
    suggestions_count: 665,
    updated: '2023-06-23T05:10:39',
    user_game: null,
    reviews_count: 6181,
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
  {
    id: 4200,
    slug: 'portal-2',
    name: 'Portal 2',
    released: '2011-04-18',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
    rating: 4.61,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 3764,
        percent: 70.37,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1329,
        percent: 24.85,
      },
      {
        id: 3,
        title: 'meh',
        count: 143,
        percent: 2.67,
      },
      {
        id: 1,
        title: 'skip',
        count: 113,
        percent: 2.11,
      },
    ],
    ratings_count: 5300,
    reviews_text_count: 32,
    added: 17584,
    added_by_status: {
      yet: 587,
      owned: 10832,
      beaten: 5131,
      toplay: 345,
      dropped: 541,
      playing: 148,
    },
    metacritic: 95,
    playtime: 11,
    suggestions_count: 542,
    updated: '2023-06-22T19:07:15',
    user_game: null,
    reviews_count: 5349,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2011-04-19',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2011-04-19',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: null,
        requirements_en: null,
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
        released_at: '2011-04-19',
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
        released_at: null,
        requirements_en: null,
        requirements_ru: {
          minimum:
            'Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение',
          recommended:
            'Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение',
        },
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
        released_at: '2011-04-18',
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
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
        },
      },
    ],
    genres: [
      {
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
      {
        id: 7,
        name: 'Puzzle',
        slug: 'puzzle',
        games_count: 97101,
        image_background:
          'https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg',
      },
    ],
    stores: [
      {
        id: 465889,
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
        id: 13134,
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
        id: 4526,
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
        id: 33916,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 118,
        name: 'Story Rich',
        slug: 'story-rich',
        language: 'eng',
        games_count: 18228,
        image_background:
          'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
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
        id: 189,
        name: 'Female Protagonist',
        slug: 'female-protagonist',
        language: 'eng',
        games_count: 10560,
        image_background:
          'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
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
        id: 75,
        name: 'Local Co-Op',
        slug: 'local-co-op',
        language: 'eng',
        games_count: 4972,
        image_background:
          'https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg',
      },
      {
        id: 11669,
        name: 'stats',
        slug: 'stats',
        language: 'eng',
        games_count: 4488,
        image_background:
          'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
      },
      {
        id: 40852,
        name: 'Steam Workshop',
        slug: 'steam-workshop',
        language: 'eng',
        games_count: 1316,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 25,
        name: 'Space',
        slug: 'space',
        language: 'eng',
        games_count: 41778,
        image_background:
          'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
      },
      {
        id: 40838,
        name: 'Includes level editor',
        slug: 'includes-level-editor',
        language: 'eng',
        games_count: 1641,
        image_background:
          'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
      },
      {
        id: 40833,
        name: 'Captions available',
        slug: 'captions-available',
        language: 'eng',
        games_count: 1236,
        image_background:
          'https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg',
      },
      {
        id: 40834,
        name: 'Commentary available',
        slug: 'commentary-available',
        language: 'eng',
        games_count: 254,
        image_background:
          'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
      },
      {
        id: 87,
        name: 'Science',
        slug: 'science',
        language: 'eng',
        games_count: 1512,
        image_background:
          'https://media.rawg.io/media/screenshots/0b4/0b442f231e0594a22c79981a7d1ab785.jpg',
      },
    ],
    esrb_rating: {
      id: 2,
      name: 'Everyone 10+',
      slug: 'everyone-10-plus',
    },
    short_screenshots: [
      {
        id: -1,
        image:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 99018,
        image:
          'https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg',
      },
      {
        id: 99019,
        image:
          'https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg',
      },
      {
        id: 99020,
        image:
          'https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg',
      },
      {
        id: 99021,
        image:
          'https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg',
      },
      {
        id: 99022,
        image:
          'https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg',
      },
      {
        id: 99023,
        image:
          'https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg',
      },
    ],
  },
  {
    id: 5286,
    slug: 'tomb-raider',
    name: 'Tomb Raider (2013)',
    released: '2013-03-05',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
    rating: 4.05,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 2237,
        percent: 60.22,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 950,
        percent: 25.57,
      },
      {
        id: 3,
        title: 'meh',
        count: 413,
        percent: 11.12,
      },
      {
        id: 1,
        title: 'skip',
        count: 115,
        percent: 3.1,
      },
    ],
    ratings_count: 3689,
    reviews_text_count: 12,
    added: 15359,
    added_by_status: {
      yet: 639,
      owned: 9926,
      beaten: 3947,
      toplay: 244,
      dropped: 499,
      playing: 104,
    },
    metacritic: 86,
    playtime: 10,
    suggestions_count: 637,
    updated: '2023-06-20T14:31:38',
    user_game: null,
    reviews_count: 3715,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2013-03-05',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2013-03-05',
        requirements_en: {
          minimum:
            'Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB',
        },
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
        released_at: '2013-03-05',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>',
        },
        requirements_ru: {
          minimum: 'i486-100, 8 Мб',
          recommended: 'Pentium 166, 16 Мб',
        },
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
        released_at: '2013-03-05',
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
        released_at: '2013-03-05',
        requirements_en: null,
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
        released_at: '2013-03-05',
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
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
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
        id: 33824,
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
        id: 13151,
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
        id: 5640,
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
        id: 218233,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      },
      {
        id: 79036,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
      },
      {
        id: 713685,
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
        id: 24,
        name: 'RPG',
        slug: 'rpg',
        language: 'eng',
        games_count: 17300,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
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
        id: 193,
        name: 'Classic',
        slug: 'classic',
        language: 'eng',
        games_count: 1728,
        image_background:
          'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
      },
      {
        id: 6,
        name: 'Exploration',
        slug: 'exploration',
        language: 'eng',
        games_count: 19405,
        image_background:
          'https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg',
      },
      {
        id: 189,
        name: 'Female Protagonist',
        slug: 'female-protagonist',
        language: 'eng',
        games_count: 10560,
        image_background:
          'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
      },
      {
        id: 15,
        name: 'Stealth',
        slug: 'stealth',
        language: 'eng',
        games_count: 5718,
        image_background:
          'https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg',
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
        id: 69,
        name: 'Action-Adventure',
        slug: 'action-adventure',
        language: 'eng',
        games_count: 13526,
        image_background:
          'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      },
      {
        id: 74,
        name: 'Retro',
        slug: 'retro',
        language: 'eng',
        games_count: 39616,
        image_background:
          'https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg',
      },
      {
        id: 110,
        name: 'Cinematic',
        slug: 'cinematic',
        language: 'eng',
        games_count: 1413,
        image_background:
          'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
      },
      {
        id: 269,
        name: 'Quick-Time Events',
        slug: 'quick-time-events',
        language: 'eng',
        games_count: 418,
        image_background:
          'https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg',
      },
      {
        id: 126,
        name: 'Dinosaurs',
        slug: 'dinosaurs',
        language: 'eng',
        games_count: 1630,
        image_background:
          'https://media.rawg.io/media/games/5f4/5f44810c864fa054da5e0b84dc16267d.jpg',
      },
      {
        id: 306,
        name: 'Lara Croft',
        slug: 'lara-croft',
        language: 'eng',
        games_count: 14,
        image_background:
          'https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg',
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
          'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg',
      },
      {
        id: 99160,
        image:
          'https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg',
      },
      {
        id: 99161,
        image:
          'https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg',
      },
      {
        id: 99162,
        image:
          'https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg',
      },
      {
        id: 99163,
        image:
          'https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg',
      },
      {
        id: 99164,
        image:
          'https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg',
      },
      {
        id: 99165,
        image:
          'https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg',
      },
    ],
  },
  {
    id: 4291,
    slug: 'counter-strike-global-offensive',
    name: 'Counter-Strike: Global Offensive',
    released: '2012-08-21',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    rating: 3.57,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1549,
        percent: 47.01,
      },
      {
        id: 3,
        title: 'meh',
        count: 849,
        percent: 25.77,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 529,
        percent: 16.05,
      },
      {
        id: 1,
        title: 'skip',
        count: 368,
        percent: 11.17,
      },
    ],
    ratings_count: 3263,
    reviews_text_count: 23,
    added: 15242,
    added_by_status: {
      yet: 243,
      owned: 11525,
      beaten: 928,
      toplay: 74,
      dropped: 1843,
      playing: 629,
    },
    metacritic: 81,
    playtime: 65,
    suggestions_count: 587,
    updated: '2023-06-22T19:01:34',
    user_game: null,
    reviews_count: 3295,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2012-08-21',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение',
          recommended:
            'Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение',
        },
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
        released_at: '2012-08-21',
        requirements_en: null,
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
        released_at: '2012-08-21',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 4619,
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
        id: 11489,
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
        id: 49169,
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
    ],
    clip: null,
    tags: [
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
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 80,
        name: 'Tactical',
        slug: 'tactical',
        language: 'eng',
        games_count: 4123,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
      },
      {
        id: 11669,
        name: 'stats',
        slug: 'stats',
        language: 'eng',
        games_count: 4488,
        image_background:
          'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
      },
      {
        id: 40852,
        name: 'Steam Workshop',
        slug: 'steam-workshop',
        language: 'eng',
        games_count: 1316,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 157,
        name: 'PvP',
        slug: 'pvp',
        language: 'eng',
        games_count: 7262,
        image_background:
          'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
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
        id: 70,
        name: 'War',
        slug: 'war',
        language: 'eng',
        games_count: 8671,
        image_background:
          'https://media.rawg.io/media/games/9af/9af24c1886e2c7b52a4a2c65aa874638.jpg',
      },
      {
        id: 40837,
        name: 'In-App Purchases',
        slug: 'in-app-purchases',
        language: 'eng',
        games_count: 2098,
        image_background:
          'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
      },
      {
        id: 11,
        name: 'Team-Based',
        slug: 'team-based',
        language: 'eng',
        games_count: 1280,
        image_background:
          'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
      },
      {
        id: 77,
        name: 'Realistic',
        slug: 'realistic',
        language: 'eng',
        games_count: 3871,
        image_background:
          'https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg',
      },
      {
        id: 131,
        name: 'Fast-Paced',
        slug: 'fast-paced',
        language: 'eng',
        games_count: 10269,
        image_background:
          'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
      },
      {
        id: 81,
        name: 'Military',
        slug: 'military',
        language: 'eng',
        games_count: 1385,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      {
        id: 170,
        name: 'Competitive',
        slug: 'competitive',
        language: 'eng',
        games_count: 1023,
        image_background:
          'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
      },
      {
        id: 40856,
        name: 'Valve Anti-Cheat enabled',
        slug: 'valve-anti-cheat-enabled',
        language: 'eng',
        games_count: 104,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      {
        id: 73,
        name: 'e-sports',
        slug: 'e-sports',
        language: 'eng',
        games_count: 80,
        image_background:
          'https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg',
      },
      {
        id: 245,
        name: 'Trading',
        slug: 'trading',
        language: 'eng',
        games_count: 983,
        image_background:
          'https://media.rawg.io/media/games/2bd/2bd7c117057e74c03b6ea9577ae8e4c1.jpg',
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
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      {
        id: 81644,
        image:
          'https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg',
      },
      {
        id: 81645,
        image:
          'https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg',
      },
      {
        id: 81646,
        image:
          'https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg',
      },
      {
        id: 81647,
        image:
          'https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg',
      },
      {
        id: 81648,
        image:
          'https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg',
      },
      {
        id: 81649,
        image:
          'https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg',
      },
    ],
  },
  {
    id: 13536,
    slug: 'portal',
    name: 'Portal',
    released: '2007-10-09',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
    rating: 4.51,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 2723,
        percent: 61.03,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1477,
        percent: 33.1,
      },
      {
        id: 3,
        title: 'meh',
        count: 172,
        percent: 3.85,
      },
      {
        id: 1,
        title: 'skip',
        count: 90,
        percent: 2.02,
      },
    ],
    ratings_count: 4425,
    reviews_text_count: 24,
    added: 14938,
    added_by_status: {
      yet: 412,
      owned: 9195,
      beaten: 4662,
      toplay: 244,
      dropped: 350,
      playing: 75,
    },
    metacritic: 90,
    playtime: 4,
    suggestions_count: 282,
    updated: '2023-06-22T19:07:08',
    user_game: null,
    reviews_count: 4462,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
      {
        platform: {
          id: 21,
          name: 'Android',
          slug: 'android',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52229,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        released_at: '2007-10-09',
        requirements_en: {
          minimum: '4.4 and up',
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
        released_at: '2007-10-09',
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
        released_at: '2007-10-09',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2007-10-09',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2007-10-09',
        requirements_en: {
          minimum:
            '<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection',
        },
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
        released_at: '2007-10-09',
        requirements_en: {
          minimum:
            '<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>',
        },
        requirements_ru: {
          minimum:
            'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
          recommended:
            'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
        },
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
        released_at: '2007-10-09',
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
          id: 8,
          name: 'Android',
          slug: 'android',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 3,
        name: 'Adventure',
        slug: 'adventure',
        games_count: 132715,
        image_background:
          'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
      },
      {
        id: 7,
        name: 'Puzzle',
        slug: 'puzzle',
        games_count: 97101,
        image_background:
          'https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg',
      },
    ],
    stores: [
      {
        id: 14890,
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
        id: 40973,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
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
        id: 118,
        name: 'Story Rich',
        slug: 'story-rich',
        language: 'eng',
        games_count: 18228,
        image_background:
          'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
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
        id: 193,
        name: 'Classic',
        slug: 'classic',
        language: 'eng',
        games_count: 1728,
        image_background:
          'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
      },
      {
        id: 189,
        name: 'Female Protagonist',
        slug: 'female-protagonist',
        language: 'eng',
        games_count: 10560,
        image_background:
          'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
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
        id: 40838,
        name: 'Includes level editor',
        slug: 'includes-level-editor',
        language: 'eng',
        games_count: 1641,
        image_background:
          'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
      },
      {
        id: 40833,
        name: 'Captions available',
        slug: 'captions-available',
        language: 'eng',
        games_count: 1236,
        image_background:
          'https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg',
      },
      {
        id: 111,
        name: 'Short',
        slug: 'short',
        language: 'eng',
        games_count: 57467,
        image_background:
          'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
      },
      {
        id: 114,
        name: 'Physics',
        slug: 'physics',
        language: 'eng',
        games_count: 17772,
        image_background:
          'https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg',
      },
      {
        id: 148,
        name: 'Dark Humor',
        slug: 'dark-humor',
        language: 'eng',
        games_count: 2465,
        image_background:
          'https://media.rawg.io/media/screenshots/b3d/b3d76daf8412a4902f288926699cb7f6.jpg',
      },
      {
        id: 40834,
        name: 'Commentary available',
        slug: 'commentary-available',
        language: 'eng',
        games_count: 254,
        image_background:
          'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
      },
      {
        id: 40839,
        name: 'Includes Source SDK',
        slug: 'includes-source-sdk',
        language: 'eng',
        games_count: 60,
        image_background:
          'https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg',
      },
      {
        id: 87,
        name: 'Science',
        slug: 'science',
        language: 'eng',
        games_count: 1512,
        image_background:
          'https://media.rawg.io/media/screenshots/0b4/0b442f231e0594a22c79981a7d1ab785.jpg',
      },
    ],
    esrb_rating: {
      id: 3,
      name: 'Teen',
      slug: 'teen',
    },
    short_screenshots: [
      {
        id: -1,
        image:
          'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
      },
      {
        id: 115793,
        image:
          'https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg',
      },
      {
        id: 115794,
        image:
          'https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg',
      },
      {
        id: 115795,
        image:
          'https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg',
      },
      {
        id: 115796,
        image:
          'https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg',
      },
      {
        id: 115797,
        image:
          'https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg',
      },
      {
        id: 115798,
        image:
          'https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg',
      },
    ],
  },
  {
    id: 12020,
    slug: 'left-4-dead-2',
    name: 'Left 4 Dead 2',
    released: '2009-11-17',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
    rating: 4.09,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1647,
        percent: 53.2,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 980,
        percent: 31.65,
      },
      {
        id: 3,
        title: 'meh',
        count: 355,
        percent: 11.47,
      },
      {
        id: 1,
        title: 'skip',
        count: 114,
        percent: 3.68,
      },
    ],
    ratings_count: 3078,
    reviews_text_count: 9,
    added: 14875,
    added_by_status: {
      yet: 357,
      owned: 10852,
      beaten: 2331,
      toplay: 103,
      dropped: 1092,
      playing: 140,
    },
    metacritic: 89,
    playtime: 9,
    suggestions_count: 584,
    updated: '2023-06-23T00:18:45',
    user_game: null,
    reviews_count: 3096,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2009-11-17',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2009-11-17',
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
        released_at: '2009-11-17',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере',
          recommended:
            'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере',
        },
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
        released_at: '2009-11-17',
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
          id: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 13208,
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
        id: 34000,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 16,
        name: 'Horror',
        slug: 'horror',
        language: 'eng',
        games_count: 41908,
        image_background:
          'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 26,
        name: 'Gore',
        slug: 'gore',
        language: 'eng',
        games_count: 5056,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 1,
        name: 'Survival',
        slug: 'survival',
        language: 'eng',
        games_count: 7229,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 75,
        name: 'Local Co-Op',
        slug: 'local-co-op',
        language: 'eng',
        games_count: 4972,
        image_background:
          'https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg',
      },
      {
        id: 80,
        name: 'Tactical',
        slug: 'tactical',
        language: 'eng',
        games_count: 4123,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
      },
      {
        id: 11669,
        name: 'stats',
        slug: 'stats',
        language: 'eng',
        games_count: 4488,
        image_background:
          'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
      },
      {
        id: 40852,
        name: 'Steam Workshop',
        slug: 'steam-workshop',
        language: 'eng',
        games_count: 1316,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 63,
        name: 'Zombies',
        slug: 'zombies',
        language: 'eng',
        games_count: 9661,
        image_background:
          'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
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
        id: 43,
        name: 'Post-apocalyptic',
        slug: 'post-apocalyptic',
        language: 'eng',
        games_count: 3328,
        image_background:
          'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
      },
      {
        id: 17,
        name: 'Survival Horror',
        slug: 'survival-horror',
        language: 'eng',
        games_count: 7588,
        image_background:
          'https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg',
      },
      {
        id: 40833,
        name: 'Captions available',
        slug: 'captions-available',
        language: 'eng',
        games_count: 1236,
        image_background:
          'https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg',
      },
      {
        id: 5,
        name: 'Replay Value',
        slug: 'replay-value',
        language: 'eng',
        games_count: 1294,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 11,
        name: 'Team-Based',
        slug: 'team-based',
        language: 'eng',
        games_count: 1280,
        image_background:
          'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
      },
      {
        id: 40856,
        name: 'Valve Anti-Cheat enabled',
        slug: 'valve-anti-cheat-enabled',
        language: 'eng',
        games_count: 104,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      {
        id: 40834,
        name: 'Commentary available',
        slug: 'commentary-available',
        language: 'eng',
        games_count: 254,
        image_background:
          'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
      },
      {
        id: 40839,
        name: 'Includes Source SDK',
        slug: 'includes-source-sdk',
        language: 'eng',
        games_count: 60,
        image_background:
          'https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg',
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
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      },
      {
        id: 99748,
        image:
          'https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg',
      },
      {
        id: 99749,
        image:
          'https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg',
      },
      {
        id: 99750,
        image:
          'https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg',
      },
      {
        id: 99751,
        image:
          'https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg',
      },
      {
        id: 99752,
        image:
          'https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg',
      },
      {
        id: 99753,
        image:
          'https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg',
      },
    ],
  },
  {
    id: 5679,
    slug: 'the-elder-scrolls-v-skyrim',
    name: 'The Elder Scrolls V: Skyrim',
    released: '2011-11-11',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
    rating: 4.42,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 2527,
        percent: 57.31,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1393,
        percent: 31.59,
      },
      {
        id: 3,
        title: 'meh',
        count: 394,
        percent: 8.94,
      },
      {
        id: 1,
        title: 'skip',
        count: 95,
        percent: 2.15,
      },
    ],
    ratings_count: 4364,
    reviews_text_count: 31,
    added: 14731,
    added_by_status: {
      yet: 474,
      owned: 8775,
      beaten: 3503,
      toplay: 382,
      dropped: 1224,
      playing: 373,
    },
    metacritic: 94,
    playtime: 46,
    suggestions_count: 593,
    updated: '2023-06-23T05:13:55',
    user_game: null,
    reviews_count: 4409,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2011-11-11',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере',
          recommended:
            'Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере',
        },
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
        released_at: '2011-11-11',
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
        released_at: '2011-11-11',
        requirements_en: null,
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
        released_at: '2011-11-11',
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
        id: 6037,
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
        id: 15144,
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
        id: 32919,
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
      {
        id: 49792,
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
        id: 13,
        name: 'Atmospheric',
        slug: 'atmospheric',
        language: 'eng',
        games_count: 29520,
        image_background:
          'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
      },
      {
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
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
        id: 40852,
        name: 'Steam Workshop',
        slug: 'steam-workshop',
        language: 'eng',
        games_count: 1316,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 468,
        name: 'role-playing',
        slug: 'role-playing',
        language: 'eng',
        games_count: 1489,
        image_background:
          'https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg',
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
        id: 121,
        name: 'Character Customization',
        slug: 'character-customization',
        language: 'eng',
        games_count: 3520,
        image_background:
          'https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg',
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
        id: 205,
        name: 'Lore-Rich',
        slug: 'lore-rich',
        language: 'eng',
        games_count: 819,
        image_background:
          'https://media.rawg.io/media/games/dfe/dfe14d30ed6fccd9db4ae79d3be51d54.jpg',
      },
      {
        id: 215,
        name: 'Dragons',
        slug: 'dragons',
        language: 'eng',
        games_count: 2409,
        image_background:
          'https://media.rawg.io/media/games/e58/e58c97f607ceafe069b80a769d021ae2.jpg',
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
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 118307,
        image:
          'https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg',
      },
      {
        id: 118308,
        image:
          'https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg',
      },
      {
        id: 118309,
        image:
          'https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg',
      },
      {
        id: 118310,
        image:
          'https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg',
      },
      {
        id: 118311,
        image:
          'https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg',
      },
      {
        id: 118312,
        image:
          'https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg',
      },
    ],
  },
  {
    id: 4062,
    slug: 'bioshock-infinite',
    name: 'BioShock Infinite',
    released: '2013-03-26',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
    rating: 4.39,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 2137,
        percent: 55.42,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1279,
        percent: 33.17,
      },
      {
        id: 3,
        title: 'meh',
        count: 336,
        percent: 8.71,
      },
      {
        id: 1,
        title: 'skip',
        count: 104,
        percent: 2.7,
      },
    ],
    ratings_count: 3818,
    reviews_text_count: 22,
    added: 14216,
    added_by_status: {
      yet: 779,
      owned: 8453,
      beaten: 4062,
      toplay: 373,
      dropped: 451,
      playing: 98,
    },
    metacritic: 94,
    playtime: 12,
    suggestions_count: 591,
    updated: '2023-06-22T19:05:18',
    user_game: null,
    reviews_count: 3856,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2013-03-26',
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
        released_at: '2013-03-26',
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
        released_at: '2013-03-26',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2013-03-26',
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
        released_at: '2013-03-26',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD',
          recommended:
            'Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD',
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
        released_at: '2013-03-26',
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
        released_at: '2013-03-26',
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
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 828870,
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
        id: 71727,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
      },
      {
        id: 440409,
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
        id: 461035,
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
      {
        id: 4382,
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
        id: 13084,
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
        id: 33810,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 8,
        name: 'First-Person',
        slug: 'first-person',
        language: 'eng',
        games_count: 28568,
        image_background:
          'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      },
      {
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
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
        id: 26,
        name: 'Gore',
        slug: 'gore',
        language: 'eng',
        games_count: 5056,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 115,
        name: 'Controller',
        slug: 'controller',
        language: 'eng',
        games_count: 9447,
        image_background:
          'https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg',
      },
      {
        id: 119,
        name: 'Dystopian',
        slug: 'dystopian',
        language: 'eng',
        games_count: 1788,
        image_background:
          'https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg',
      },
      {
        id: 154,
        name: 'Steampunk',
        slug: 'steampunk',
        language: 'eng',
        games_count: 1114,
        image_background:
          'https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg',
      },
      {
        id: 305,
        name: 'Linear',
        slug: 'linear',
        language: 'eng',
        games_count: 3945,
        image_background:
          'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      },
      {
        id: 208,
        name: 'Alternate History',
        slug: 'alternate-history',
        language: 'eng',
        games_count: 1464,
        image_background:
          'https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg',
      },
      {
        id: 317,
        name: 'Time Travel',
        slug: 'time-travel',
        language: 'eng',
        games_count: 1687,
        image_background:
          'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
      },
      {
        id: 287,
        name: 'Political',
        slug: 'political',
        language: 'eng',
        games_count: 500,
        image_background:
          'https://media.rawg.io/media/screenshots/7f7/7f7159db791f6423da090c1359cd672d.jpg',
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
          'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
      },
      {
        id: 98549,
        image:
          'https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg',
      },
      {
        id: 98550,
        image:
          'https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg',
      },
      {
        id: 98551,
        image:
          'https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg',
      },
      {
        id: 98552,
        image:
          'https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg',
      },
      {
        id: 98553,
        image:
          'https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg',
      },
      {
        id: 98554,
        image:
          'https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg',
      },
    ],
  },
  {
    id: 28,
    slug: 'red-dead-redemption-2',
    name: 'Red Dead Redemption 2',
    released: '2018-10-26',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    rating: 4.59,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 3423,
        percent: 73.33,
      },
      {
        id: 4,
        title: 'recommended',
        count: 850,
        percent: 18.21,
      },
      {
        id: 3,
        title: 'meh',
        count: 260,
        percent: 5.57,
      },
      {
        id: 1,
        title: 'skip',
        count: 135,
        percent: 2.89,
      },
    ],
    ratings_count: 4573,
    reviews_text_count: 69,
    added: 14162,
    added_by_status: {
      yet: 865,
      owned: 7412,
      beaten: 2849,
      toplay: 1554,
      dropped: 600,
      playing: 882,
    },
    metacritic: 96,
    playtime: 19,
    suggestions_count: 602,
    updated: '2023-06-23T05:10:48',
    user_game: null,
    reviews_count: 4668,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2018-10-26',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>',
        },
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
        released_at: '2018-10-26',
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
        released_at: '2018-10-26',
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
        id: 257732,
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
        id: 374316,
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
        id: 384218,
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
        id: 48782,
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
        id: 7,
        name: 'Multiplayer',
        slug: 'multiplayer',
        language: 'eng',
        games_count: 35015,
        image_background:
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
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
        id: 18,
        name: 'Co-op',
        slug: 'co-op',
        language: 'eng',
        games_count: 9836,
        image_background:
          'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
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
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 26,
        name: 'Gore',
        slug: 'gore',
        language: 'eng',
        games_count: 5056,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 6,
        name: 'Exploration',
        slug: 'exploration',
        language: 'eng',
        games_count: 19405,
        image_background:
          'https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg',
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
        id: 34,
        name: 'Violent',
        slug: 'violent',
        language: 'eng',
        games_count: 5894,
        image_background:
          'https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg',
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
        id: 157,
        name: 'PvP',
        slug: 'pvp',
        language: 'eng',
        games_count: 7262,
        image_background:
          'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
      },
      {
        id: 40837,
        name: 'In-App Purchases',
        slug: 'in-app-purchases',
        language: 'eng',
        games_count: 2098,
        image_background:
          'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
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
        id: 89,
        name: 'Historical',
        slug: 'historical',
        language: 'eng',
        games_count: 2589,
        image_background:
          'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
      },
      {
        id: 110,
        name: 'Cinematic',
        slug: 'cinematic',
        language: 'eng',
        games_count: 1413,
        image_background:
          'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
      },
      {
        id: 77,
        name: 'Realistic',
        slug: 'realistic',
        language: 'eng',
        games_count: 3871,
        image_background:
          'https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg',
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
        id: 478,
        name: '3rd-Person Perspective',
        slug: '3rd-person-perspective',
        language: 'eng',
        games_count: 85,
        image_background:
          'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
      },
      {
        id: 45878,
        name: 'Online PvP',
        slug: 'online-pvp',
        language: 'eng',
        games_count: 3192,
        image_background:
          'https://media.rawg.io/media/games/a4b/a4bb55f42fe837ae7bf1307e7b41cc85.jpg',
      },
      {
        id: 270,
        name: 'Blood',
        slug: 'blood',
        language: 'eng',
        games_count: 1945,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 78,
        name: 'America',
        slug: 'america',
        language: 'eng',
        games_count: 463,
        image_background:
          'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
      },
      {
        id: 578,
        name: 'Masterpiece',
        slug: 'masterpiece',
        language: 'eng',
        games_count: 279,
        image_background:
          'https://media.rawg.io/media/games/855/8552c056d729f34c951c30f3cfef9da8.jpg',
      },
      {
        id: 577,
        name: 'Beautiful',
        slug: 'beautiful',
        language: 'eng',
        games_count: 1805,
        image_background:
          'https://media.rawg.io/media/games/a52/a52908e971191d326caba0bf9857b856.jpg',
      },
      {
        id: 181,
        name: 'Hunting',
        slug: 'hunting',
        language: 'eng',
        games_count: 838,
        image_background:
          'https://media.rawg.io/media/screenshots/327/327e3b77e7a89ce5b6da47fb9c4588cd.jpg',
      },
      {
        id: 152,
        name: 'Western',
        slug: 'western',
        language: 'eng',
        games_count: 1210,
        image_background:
          'https://media.rawg.io/media/games/32a/32a1a382602c31015e6a6828c82e10be.jpg',
      },
      {
        id: 5452,
        name: '3rd-person',
        slug: '3rd-person',
        language: 'eng',
        games_count: 97,
        image_background:
          'https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg',
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
          'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
      },
      {
        id: 778173,
        image:
          'https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg',
      },
      {
        id: 778174,
        image:
          'https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg',
      },
      {
        id: 778175,
        image:
          'https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg',
      },
      {
        id: 778176,
        image:
          'https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg',
      },
      {
        id: 778177,
        image:
          'https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg',
      },
      {
        id: 778178,
        image:
          'https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg',
      },
    ],
  },
  {
    id: 802,
    slug: 'borderlands-2',
    name: 'Borderlands 2',
    released: '2012-09-18',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
    rating: 4.02,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1470,
        percent: 47.88,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 954,
        percent: 31.07,
      },
      {
        id: 3,
        title: 'meh',
        count: 518,
        percent: 16.87,
      },
      {
        id: 1,
        title: 'skip',
        count: 128,
        percent: 4.17,
      },
    ],
    ratings_count: 3050,
    reviews_text_count: 12,
    added: 14041,
    added_by_status: {
      yet: 579,
      owned: 9673,
      beaten: 2162,
      toplay: 217,
      dropped: 1198,
      playing: 212,
    },
    metacritic: 89,
    playtime: 10,
    suggestions_count: 677,
    updated: '2023-06-22T19:04:20',
    user_game: null,
    reviews_count: 3070,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2012-09-18',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2012-09-18',
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
        released_at: '2012-09-18',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение',
          recommended:
            'Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение',
        },
      },
      {
        platform: {
          id: 21,
          name: 'Android',
          slug: 'android',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52229,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        released_at: '2012-09-18',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2012-09-18',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 19,
          name: 'PS Vita',
          slug: 'ps-vita',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 1450,
          image_background:
            'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
        },
        released_at: '2012-09-18',
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
        released_at: '2012-09-18',
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
          id: 8,
          name: 'Android',
          slug: 'android',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
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
        id: 4000,
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
        id: 213037,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      },
      {
        id: 11088,
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
        id: 34042,
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
        id: 71617,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
      },
      {
        id: 817,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
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
        id: 123,
        name: 'Comedy',
        slug: 'comedy',
        language: 'eng',
        games_count: 10882,
        image_background:
          'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
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
        id: 167,
        name: 'Futuristic',
        slug: 'futuristic',
        language: 'eng',
        games_count: 4340,
        image_background:
          'https://media.rawg.io/media/games/90f/90fd5e569bc4c4a666c588a732124908.jpg',
      },
      {
        id: 120,
        name: 'Memes',
        slug: 'memes',
        language: 'eng',
        games_count: 1563,
        image_background:
          'https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg',
      },
      {
        id: 148,
        name: 'Dark Humor',
        slug: 'dark-humor',
        language: 'eng',
        games_count: 2465,
        image_background:
          'https://media.rawg.io/media/screenshots/b3d/b3d76daf8412a4902f288926699cb7f6.jpg',
      },
      {
        id: 98,
        name: 'Loot',
        slug: 'loot',
        language: 'eng',
        games_count: 1923,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      },
      {
        id: 166,
        name: 'Stylized',
        slug: 'stylized',
        language: 'eng',
        games_count: 4337,
        image_background:
          'https://media.rawg.io/media/games/33b/33b8837b3f396612d458414798524897.jpg',
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
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      },
      {
        id: 7041,
        image:
          'https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg',
      },
      {
        id: 7062,
        image:
          'https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg',
      },
      {
        id: 7070,
        image:
          'https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg',
      },
      {
        id: 7072,
        image:
          'https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg',
      },
      {
        id: 7081,
        image:
          'https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg',
      },
      {
        id: 7088,
        image:
          'https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg',
      },
    ],
  },
  {
    id: 3439,
    slug: 'life-is-strange-episode-1-2',
    name: 'Life is Strange',
    released: '2015-01-29',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
    rating: 4.11,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 1525,
        percent: 43.63,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1277,
        percent: 36.54,
      },
      {
        id: 3,
        title: 'meh',
        count: 468,
        percent: 13.39,
      },
      {
        id: 1,
        title: 'skip',
        count: 225,
        percent: 6.44,
      },
    ],
    ratings_count: 3451,
    reviews_text_count: 27,
    added: 14040,
    added_by_status: {
      yet: 747,
      owned: 9014,
      beaten: 3201,
      toplay: 333,
      dropped: 600,
      playing: 145,
    },
    metacritic: 83,
    playtime: 7,
    suggestions_count: 530,
    updated: '2023-06-22T19:07:01',
    user_game: null,
    reviews_count: 3495,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2015-01-29',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2015-01-29',
        requirements_en: null,
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
        released_at: '2015-01-29',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2015-01-29',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 3,
          name: 'iOS',
          slug: 'ios',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 76901,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        released_at: '2015-01-29',
        requirements_en: {
          minimum:
            'iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen',
        },
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
        released_at: '2015-01-29',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: 'Android',
          slug: 'android',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52229,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        released_at: '2015-01-29',
        requirements_en: {
          minimum: '6.0 and up',
        },
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
        released_at: '2015-01-29',
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
        released_at: '2015-01-29',
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
          id: 4,
          name: 'iOS',
          slug: 'ios',
        },
      },
      {
        platform: {
          id: 8,
          name: 'Android',
          slug: 'android',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
        },
      },
    ],
    genres: [
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
        id: 451321,
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
        id: 3702,
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
        id: 35603,
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
        id: 35602,
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
        id: 217695,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      },
      {
        id: 245823,
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
        id: 44714,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
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
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 118,
        name: 'Story Rich',
        slug: 'story-rich',
        language: 'eng',
        games_count: 18228,
        image_background:
          'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
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
        id: 189,
        name: 'Female Protagonist',
        slug: 'female-protagonist',
        language: 'eng',
        games_count: 10560,
        image_background:
          'https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg',
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
        id: 141,
        name: 'Point & Click',
        slug: 'point-click',
        language: 'eng',
        games_count: 11724,
        image_background:
          'https://media.rawg.io/media/screenshots/e70/e7009d889b38df2a16f78859a7343308.jpg',
      },
      {
        id: 111,
        name: 'Short',
        slug: 'short',
        language: 'eng',
        games_count: 57467,
        image_background:
          'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
      },
      {
        id: 117,
        name: 'Mystery',
        slug: 'mystery',
        language: 'eng',
        games_count: 11882,
        image_background:
          'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
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
        id: 120,
        name: 'Memes',
        slug: 'memes',
        language: 'eng',
        games_count: 1563,
        image_background:
          'https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg',
      },
      {
        id: 91,
        name: 'Walking Simulator',
        slug: 'walking-simulator',
        language: 'eng',
        games_count: 6262,
        image_background:
          'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
      },
      {
        id: 406,
        name: 'Story',
        slug: 'story',
        language: 'eng',
        games_count: 11219,
        image_background:
          'https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg',
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
      {
        id: 232,
        name: 'Episodic',
        slug: 'episodic',
        language: 'eng',
        games_count: 430,
        image_background:
          'https://media.rawg.io/media/screenshots/25d/25df88db8714961a93e5ae1ecaa50e45.jpg',
      },
      {
        id: 295,
        name: 'Soundtrack',
        slug: 'soundtrack',
        language: 'eng',
        games_count: 2782,
        image_background:
          'https://media.rawg.io/media/games/ed0/ed05e3f2303b644e3b95b409a7909f5a.jpg',
      },
      {
        id: 317,
        name: 'Time Travel',
        slug: 'time-travel',
        language: 'eng',
        games_count: 1687,
        image_background:
          'https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg',
      },
      {
        id: 302,
        name: 'Time Manipulation',
        slug: 'time-manipulation',
        language: 'eng',
        games_count: 399,
        image_background:
          'https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg',
      },
      {
        id: 992,
        name: 'student',
        slug: 'student',
        language: 'eng',
        games_count: 1515,
        image_background:
          'https://media.rawg.io/media/screenshots/04f/04f147a13d2c62f11183dd831a9daf5e_LLtHcj6.jpg',
      },
      {
        id: 2682,
        name: 'strange',
        slug: 'strange',
        language: 'eng',
        games_count: 360,
        image_background:
          'https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg',
      },
      {
        id: 3197,
        name: 'photography',
        slug: 'photography',
        language: 'eng',
        games_count: 203,
        image_background:
          'https://media.rawg.io/media/screenshots/c22/c22e3dfc119300f50b7fd0748eb9b41c.jpg',
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
          'https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg',
      },
      {
        id: 1826487,
        image:
          'https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg',
      },
      {
        id: 1826488,
        image:
          'https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg',
      },
      {
        id: 1826489,
        image:
          'https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg',
      },
      {
        id: 1826490,
        image:
          'https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg',
      },
      {
        id: 1826491,
        image:
          'https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg',
      },
      {
        id: 1826492,
        image:
          'https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg',
      },
    ],
  },
  {
    id: 13537,
    slug: 'half-life-2',
    name: 'Half-Life 2',
    released: '2004-11-16',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
    rating: 4.49,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 2322,
        percent: 63.9,
      },
      {
        id: 4,
        title: 'recommended',
        count: 993,
        percent: 27.33,
      },
      {
        id: 3,
        title: 'meh',
        count: 210,
        percent: 5.78,
      },
      {
        id: 1,
        title: 'skip',
        count: 109,
        percent: 3,
      },
    ],
    ratings_count: 3611,
    reviews_text_count: 17,
    added: 13298,
    added_by_status: {
      yet: 617,
      owned: 8347,
      beaten: 3447,
      toplay: 282,
      dropped: 515,
      playing: 90,
    },
    metacritic: 96,
    playtime: 7,
    suggestions_count: 550,
    updated: '2023-06-23T05:10:56',
    user_game: null,
    reviews_count: 3634,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2004-11-16',
        requirements_en: {
          minimum:
            'Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space',
        },
        requirements_ru: {
          minimum:
            'Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет',
          recommended:
            'Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет',
        },
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2004-11-16',
        requirements_en: {
          minimum:
            'Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher',
        },
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
        released_at: '2004-11-16',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2004-11-16',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 80,
          name: 'Xbox',
          slug: 'xbox-old',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 722,
          image_background:
            'https://media.rawg.io/media/games/e60/e601c02ec49ef4f1d5ef147994b3935f.jpg',
        },
        released_at: '2004-11-16',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: 'Android',
          slug: 'android',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52229,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        released_at: '2004-11-16',
        requirements_en: {
          minimum: '4.4 and up',
        },
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
          id: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
      },
      {
        platform: {
          id: 8,
          name: 'Android',
          slug: 'android',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 14891,
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
        id: 41441,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
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
        id: 13,
        name: 'Atmospheric',
        slug: 'atmospheric',
        language: 'eng',
        games_count: 29520,
        image_background:
          'https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg',
      },
      {
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
      },
      {
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 118,
        name: 'Story Rich',
        slug: 'story-rich',
        language: 'eng',
        games_count: 18228,
        image_background:
          'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 16,
        name: 'Horror',
        slug: 'horror',
        language: 'eng',
        games_count: 41908,
        image_background:
          'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 193,
        name: 'Classic',
        slug: 'classic',
        language: 'eng',
        games_count: 1728,
        image_background:
          'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
      },
      {
        id: 63,
        name: 'Zombies',
        slug: 'zombies',
        language: 'eng',
        games_count: 9661,
        image_background:
          'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
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
        id: 40833,
        name: 'Captions available',
        slug: 'captions-available',
        language: 'eng',
        games_count: 1236,
        image_background:
          'https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg',
      },
      {
        id: 114,
        name: 'Physics',
        slug: 'physics',
        language: 'eng',
        games_count: 17772,
        image_background:
          'https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg',
      },
      {
        id: 172,
        name: 'Aliens',
        slug: 'aliens',
        language: 'eng',
        games_count: 6253,
        image_background:
          'https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg',
      },
      {
        id: 119,
        name: 'Dystopian',
        slug: 'dystopian',
        language: 'eng',
        games_count: 1788,
        image_background:
          'https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg',
      },
      {
        id: 40839,
        name: 'Includes Source SDK',
        slug: 'includes-source-sdk',
        language: 'eng',
        games_count: 60,
        image_background:
          'https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg',
      },
      {
        id: 319,
        name: 'Silent Protagonist',
        slug: 'silent-protagonist',
        language: 'eng',
        games_count: 80,
        image_background:
          'https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg',
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
          'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      },
      {
        id: 115804,
        image:
          'https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg',
      },
      {
        id: 115805,
        image:
          'https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg',
      },
      {
        id: 115806,
        image:
          'https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg',
      },
      {
        id: 115807,
        image:
          'https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg',
      },
      {
        id: 115808,
        image:
          'https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg',
      },
      {
        id: 115809,
        image:
          'https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg',
      },
    ],
  },
  {
    id: 4286,
    slug: 'bioshock',
    name: 'BioShock',
    released: '2007-08-21',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
    rating: 4.36,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 1664,
        percent: 52.99,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1144,
        percent: 36.43,
      },
      {
        id: 3,
        title: 'meh',
        count: 231,
        percent: 7.36,
      },
      {
        id: 1,
        title: 'skip',
        count: 101,
        percent: 3.22,
      },
    ],
    ratings_count: 3101,
    reviews_text_count: 24,
    added: 12913,
    added_by_status: {
      yet: 595,
      owned: 8237,
      beaten: 2983,
      toplay: 313,
      dropped: 675,
      playing: 110,
    },
    metacritic: 96,
    playtime: 3,
    suggestions_count: 637,
    updated: '2023-06-20T14:53:03',
    user_game: null,
    reviews_count: 3140,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2007-08-21',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2007-08-21',
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
        released_at: '2007-08-21',
        requirements_en: {
          minimum:
            '<h2 class="bb_tag"><strong>Minimum: </strong></h2><ul class="bb_ul"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>',
          recommended:
            '<h2 class="bb_tag"><strong>Recommended: </strong></h2><ul class="bb_ul"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение',
          recommended:
            'Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение',
        },
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
        released_at: '2007-08-21',
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
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 4614,
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
        id: 79531,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
      },
      {
        id: 440407,
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
        id: 20580,
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
        id: 33844,
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
        id: 8,
        name: 'First-Person',
        slug: 'first-person',
        language: 'eng',
        games_count: 28568,
        image_background:
          'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      },
      {
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 16,
        name: 'Horror',
        slug: 'horror',
        language: 'eng',
        games_count: 41908,
        image_background:
          'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 193,
        name: 'Classic',
        slug: 'classic',
        language: 'eng',
        games_count: 1728,
        image_background:
          'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
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
        id: 119,
        name: 'Dystopian',
        slug: 'dystopian',
        language: 'eng',
        games_count: 1788,
        image_background:
          'https://media.rawg.io/media/games/257/257c497aa4060f4a697ccbf5e99ec230.jpg',
      },
      {
        id: 154,
        name: 'Steampunk',
        slug: 'steampunk',
        language: 'eng',
        games_count: 1114,
        image_background:
          'https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg',
      },
      {
        id: 208,
        name: 'Alternate History',
        slug: 'alternate-history',
        language: 'eng',
        games_count: 1464,
        image_background:
          'https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg',
      },
      {
        id: 287,
        name: 'Political',
        slug: 'political',
        language: 'eng',
        games_count: 500,
        image_background:
          'https://media.rawg.io/media/screenshots/7f7/7f7159db791f6423da090c1359cd672d.jpg',
      },
      {
        id: 250,
        name: 'Underwater',
        slug: 'underwater',
        language: 'eng',
        games_count: 1980,
        image_background:
          'https://media.rawg.io/media/games/63b/63b82317c6eedcbf182206c9a5bafe81.jpg',
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
          'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
      },
      {
        id: 170993,
        image:
          'https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg',
      },
      {
        id: 170994,
        image:
          'https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg',
      },
      {
        id: 170995,
        image:
          'https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg',
      },
      {
        id: 170996,
        image:
          'https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg',
      },
      {
        id: 170997,
        image:
          'https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg',
      },
      {
        id: 170998,
        image:
          'https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg',
      },
    ],
  },
  {
    id: 1030,
    slug: 'limbo',
    name: 'Limbo',
    released: '2010-07-21',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
    rating: 4.15,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1633,
        percent: 52.09,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 1086,
        percent: 34.64,
      },
      {
        id: 3,
        title: 'meh',
        count: 313,
        percent: 9.98,
      },
      {
        id: 1,
        title: 'skip',
        count: 103,
        percent: 3.29,
      },
    ],
    ratings_count: 3099,
    reviews_text_count: 24,
    added: 12526,
    added_by_status: {
      yet: 530,
      owned: 7942,
      beaten: 3009,
      toplay: 290,
      dropped: 665,
      playing: 90,
    },
    metacritic: 88,
    playtime: 3,
    suggestions_count: 186,
    updated: '2023-06-22T19:07:03',
    user_game: null,
    reviews_count: 3135,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2010-07-21',
        requirements_en: {
          minimum:
            '<ul class="bb_ul"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 19,
          name: 'PS Vita',
          slug: 'ps-vita',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 1450,
          image_background:
            'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
        },
        released_at: '2010-07-21',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 21,
          name: 'Android',
          slug: 'android',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 52229,
          image_background:
            'https://media.rawg.io/media/games/be0/be084b850302abe81675bc4ffc08a0d0.jpg',
        },
        released_at: '2010-07-21',
        requirements_en: {
          minimum: '4.4 and up',
        },
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
        released_at: '2010-07-21',
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
        released_at: '2010-07-21',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 3,
          name: 'iOS',
          slug: 'ios',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 76901,
          image_background:
            'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
        },
        released_at: '2010-07-21',
        requirements_en: {
          minimum:
            'iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen',
        },
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
        released_at: '2010-07-21',
        requirements_en: {
          minimum:
            '<ul class="bb_ul"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере',
          recommended:
            'Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере',
        },
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2010-07-21',
        requirements_en: {
          minimum:
            'Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>',
        },
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
        released_at: '2010-07-21',
        requirements_en: null,
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
        released_at: '2010-07-21',
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
        released_at: '2010-07-21',
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
          id: 4,
          name: 'iOS',
          slug: 'ios',
        },
      },
      {
        platform: {
          id: 8,
          name: 'Android',
          slug: 'android',
        },
      },
      {
        platform: {
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 3,
        name: 'Adventure',
        slug: 'adventure',
        games_count: 132715,
        image_background:
          'https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg',
      },
      {
        id: 51,
        name: 'Indie',
        slug: 'indie',
        games_count: 53320,
        image_background:
          'https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg',
      },
      {
        id: 7,
        name: 'Puzzle',
        slug: 'puzzle',
        games_count: 97101,
        image_background:
          'https://media.rawg.io/media/games/1fb/1fb1c5f7a71d771f440b27ce7f71e7eb.jpg',
      },
      {
        id: 83,
        name: 'Platformer',
        slug: 'platformer',
        games_count: 100589,
        image_background:
          'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
      },
    ],
    stores: [
      {
        id: 1054,
        store: {
          id: 4,
          name: 'App Store',
          slug: 'apple-appstore',
          domain: 'apps.apple.com',
          games_count: 75138,
          image_background:
            'https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg',
        },
      },
      {
        id: 3679,
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
        id: 7493,
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
        id: 10311,
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
        id: 26852,
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
        id: 33137,
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
        id: 49142,
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
      {
        id: 40035,
        store: {
          id: 8,
          name: 'Google Play',
          slug: 'google-play',
          domain: 'play.google.com',
          games_count: 17045,
          image_background:
            'https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg',
        },
      },
      {
        id: 335541,
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
        id: 45,
        name: '2D',
        slug: '2d',
        language: 'eng',
        games_count: 187992,
        image_background:
          'https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg',
      },
      {
        id: 16,
        name: 'Horror',
        slug: 'horror',
        language: 'eng',
        games_count: 41908,
        image_background:
          'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
      },
      {
        id: 49,
        name: 'Difficult',
        slug: 'difficult',
        language: 'eng',
        games_count: 12459,
        image_background:
          'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
      },
      {
        id: 115,
        name: 'Controller',
        slug: 'controller',
        language: 'eng',
        games_count: 9447,
        image_background:
          'https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg',
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
        id: 336,
        name: 'controller support',
        slug: 'controller-support',
        language: 'eng',
        games_count: 293,
        image_background:
          'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
      },
      {
        id: 111,
        name: 'Short',
        slug: 'short',
        language: 'eng',
        games_count: 57467,
        image_background:
          'https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg',
      },
      {
        id: 113,
        name: 'Side Scroller',
        slug: 'side-scroller',
        language: 'eng',
        games_count: 9440,
        image_background:
          'https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg',
      },
      {
        id: 114,
        name: 'Physics',
        slug: 'physics',
        language: 'eng',
        games_count: 17772,
        image_background:
          'https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg',
      },
      {
        id: 110,
        name: 'Cinematic',
        slug: 'cinematic',
        language: 'eng',
        games_count: 1413,
        image_background:
          'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
      },
      {
        id: 46,
        name: 'Surreal',
        slug: 'surreal',
        language: 'eng',
        games_count: 4541,
        image_background:
          'https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg',
      },
      {
        id: 83,
        name: 'Puzzle-Platformer',
        slug: 'puzzle-platformer',
        language: 'eng',
        games_count: 9498,
        image_background:
          'https://media.rawg.io/media/games/0fc/0fc933e3dfbbf4306840ef429d73fa9a.jpg',
      },
      {
        id: 112,
        name: 'Minimalist',
        slug: 'minimalist',
        language: 'eng',
        games_count: 13738,
        image_background:
          'https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg',
      },
    ],
    esrb_rating: {
      id: 3,
      name: 'Teen',
      slug: 'teen',
    },
    short_screenshots: [
      {
        id: -1,
        image:
          'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
      },
      {
        id: 30985,
        image:
          'https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg',
      },
      {
        id: 30986,
        image:
          'https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg',
      },
      {
        id: 30987,
        image:
          'https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg',
      },
      {
        id: 30988,
        image:
          'https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg',
      },
      {
        id: 30989,
        image:
          'https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg',
      },
      {
        id: 30991,
        image:
          'https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg',
      },
    ],
  },
  {
    id: 58175,
    slug: 'god-of-war-2',
    name: 'God of War (2018)',
    released: '2018-04-20',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
    rating: 4.58,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 3245,
        percent: 71.98,
      },
      {
        id: 4,
        title: 'recommended',
        count: 918,
        percent: 20.36,
      },
      {
        id: 3,
        title: 'meh',
        count: 207,
        percent: 4.59,
      },
      {
        id: 1,
        title: 'skip',
        count: 138,
        percent: 3.06,
      },
    ],
    ratings_count: 4415,
    reviews_text_count: 68,
    added: 12460,
    added_by_status: {
      yet: 635,
      owned: 6363,
      beaten: 3669,
      toplay: 1098,
      dropped: 285,
      playing: 410,
    },
    metacritic: 94,
    playtime: 11,
    suggestions_count: 587,
    updated: '2023-06-23T05:10:52',
    user_game: null,
    reviews_count: 4508,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2018-04-20',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>',
        },
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
        released_at: '2018-04-20',
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
        id: 46917,
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
        id: 677451,
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
        id: 677452,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
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
        id: 26,
        name: 'Gore',
        slug: 'gore',
        language: 'eng',
        games_count: 5056,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 6,
        name: 'Exploration',
        slug: 'exploration',
        language: 'eng',
        games_count: 19405,
        image_background:
          'https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg',
      },
      {
        id: 34,
        name: 'Violent',
        slug: 'violent',
        language: 'eng',
        games_count: 5894,
        image_background:
          'https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg',
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
        id: 69,
        name: 'Action-Adventure',
        slug: 'action-adventure',
        language: 'eng',
        games_count: 13526,
        image_background:
          'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      },
      {
        id: 68,
        name: 'Hack and Slash',
        slug: 'hack-and-slash',
        language: 'eng',
        games_count: 3448,
        image_background:
          'https://media.rawg.io/media/games/ac2/ac25b5cef220bf5b8d052e0978451cab.jpg',
      },
      {
        id: 37796,
        name: 'exclusive',
        slug: 'exclusive',
        language: 'eng',
        games_count: 4506,
        image_background:
          'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
      },
      {
        id: 125,
        name: 'Crafting',
        slug: 'crafting',
        language: 'eng',
        games_count: 3372,
        image_background:
          'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
      },
      {
        id: 1465,
        name: 'combat',
        slug: 'combat',
        language: 'eng',
        games_count: 9430,
        image_background:
          'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
      },
      {
        id: 37797,
        name: 'true exclusive',
        slug: 'true-exclusive',
        language: 'eng',
        games_count: 3991,
        image_background:
          'https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg',
      },
      {
        id: 571,
        name: '3D',
        slug: '3d',
        language: 'eng',
        games_count: 77349,
        image_background:
          'https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg',
      },
      {
        id: 478,
        name: '3rd-Person Perspective',
        slug: '3rd-person-perspective',
        language: 'eng',
        games_count: 85,
        image_background:
          'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
      },
      {
        id: 270,
        name: 'Blood',
        slug: 'blood',
        language: 'eng',
        games_count: 1945,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 171,
        name: 'PvE',
        slug: 'pve',
        language: 'eng',
        games_count: 3139,
        image_background:
          'https://media.rawg.io/media/games/0d7/0d7b7a687bf665b61337904193c56855.jpg',
      },
      {
        id: 572,
        name: 'Emotional',
        slug: 'emotional',
        language: 'eng',
        games_count: 1812,
        image_background:
          'https://media.rawg.io/media/games/6a2/6a2e48933245e2cd3c92248c75c925e1.jpg',
      },
      {
        id: 108,
        name: 'Mythology',
        slug: 'mythology',
        language: 'eng',
        games_count: 1691,
        image_background:
          'https://media.rawg.io/media/games/032/0329db96e252aa41e672da2ba16f914c.jpg',
      },
      {
        id: 580,
        name: 'Souls-like',
        slug: 'souls-like',
        language: 'eng',
        games_count: 1058,
        image_background:
          'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
      },
      {
        id: 43374,
        name: 'Remote Play on TV',
        slug: 'remote-play-on-tv',
        language: 'eng',
        games_count: 322,
        image_background:
          'https://media.rawg.io/media/screenshots/80b/80bc73e3df6e55f554dc66ebf2fc57e5.jpg',
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
          'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      },
      {
        id: 766263,
        image:
          'https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg',
      },
      {
        id: 766264,
        image:
          'https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg',
      },
      {
        id: 766265,
        image:
          'https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg',
      },
      {
        id: 766266,
        image:
          'https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg',
      },
      {
        id: 766267,
        image:
          'https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg',
      },
      {
        id: 766268,
        image:
          'https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg',
      },
    ],
  },
  {
    id: 32,
    slug: 'destiny-2',
    name: 'Destiny 2',
    released: '2017-09-06',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
    rating: 3.55,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1134,
        percent: 45.2,
      },
      {
        id: 3,
        title: 'meh',
        count: 798,
        percent: 31.81,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 349,
        percent: 13.91,
      },
      {
        id: 1,
        title: 'skip',
        count: 228,
        percent: 9.09,
      },
    ],
    ratings_count: 2483,
    reviews_text_count: 19,
    added: 12399,
    added_by_status: {
      yet: 397,
      owned: 9290,
      beaten: 750,
      toplay: 161,
      dropped: 1403,
      playing: 398,
    },
    metacritic: 82,
    playtime: 5,
    suggestions_count: 1201,
    updated: '2023-06-22T19:04:05',
    user_game: null,
    reviews_count: 2509,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2017-09-06',
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
        released_at: '2017-09-06',
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
        released_at: '2017-09-06',
        requirements_en: null,
        requirements_ru: null,
      },
      {
        platform: {
          id: 171,
          name: 'Web',
          slug: 'web',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 260094,
          image_background:
            'https://media.rawg.io/media/screenshots/c20/c201f665fc1d461719833ec1320935d6.jpg',
        },
        released_at: '2017-09-06',
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
        released_at: '2017-09-06',
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
        released_at: '2017-09-06',
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
          id: 14,
          name: 'Web',
          slug: 'web',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
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
        id: 59,
        name: 'Massively Multiplayer',
        slug: 'massively-multiplayer',
        games_count: 3246,
        image_background:
          'https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg',
      },
    ],
    stores: [
      {
        id: 837910,
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
        id: 32,
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
        id: 808,
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
        id: 326831,
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 6,
        name: 'Exploration',
        slug: 'exploration',
        language: 'eng',
        games_count: 19405,
        image_background:
          'https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg',
      },
      {
        id: 79,
        name: 'Free to Play',
        slug: 'free-to-play',
        language: 'eng',
        games_count: 5426,
        image_background:
          'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
      },
      {
        id: 397,
        name: 'Online multiplayer',
        slug: 'online-multiplayer',
        language: 'eng',
        games_count: 3805,
        image_background:
          'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
      },
      {
        id: 69,
        name: 'Action-Adventure',
        slug: 'action-adventure',
        language: 'eng',
        games_count: 13526,
        image_background:
          'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
      },
      {
        id: 25,
        name: 'Space',
        slug: 'space',
        language: 'eng',
        games_count: 41778,
        image_background:
          'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
      },
      {
        id: 157,
        name: 'PvP',
        slug: 'pvp',
        language: 'eng',
        games_count: 7262,
        image_background:
          'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
      },
      {
        id: 167,
        name: 'Futuristic',
        slug: 'futuristic',
        language: 'eng',
        games_count: 4340,
        image_background:
          'https://media.rawg.io/media/games/90f/90fd5e569bc4c4a666c588a732124908.jpg',
      },
      {
        id: 172,
        name: 'Aliens',
        slug: 'aliens',
        language: 'eng',
        games_count: 6253,
        image_background:
          'https://media.rawg.io/media/games/c24/c24f4434882ae9c2c8d9d38de82cb7a5.jpg',
      },
      {
        id: 1465,
        name: 'combat',
        slug: 'combat',
        language: 'eng',
        games_count: 9430,
        image_background:
          'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
      },
      {
        id: 406,
        name: 'Story',
        slug: 'story',
        language: 'eng',
        games_count: 11219,
        image_background:
          'https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg',
      },
      {
        id: 478,
        name: '3rd-Person Perspective',
        slug: '3rd-person-perspective',
        language: 'eng',
        games_count: 85,
        image_background:
          'https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg',
      },
      {
        id: 413,
        name: 'online',
        slug: 'online',
        language: 'eng',
        games_count: 6520,
        image_background:
          'https://media.rawg.io/media/games/d51/d51ada3b94bfd617bf91d4344ab81ce9.jpg',
      },
      {
        id: 158,
        name: 'MMORPG',
        slug: 'mmorpg',
        language: 'eng',
        games_count: 1271,
        image_background:
          'https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg',
      },
      {
        id: 98,
        name: 'Loot',
        slug: 'loot',
        language: 'eng',
        games_count: 1923,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
      },
      {
        id: 171,
        name: 'PvE',
        slug: 'pve',
        language: 'eng',
        games_count: 3139,
        image_background:
          'https://media.rawg.io/media/games/0d7/0d7b7a687bf665b61337904193c56855.jpg',
      },
      {
        id: 2030,
        name: 'city',
        slug: 'city',
        language: 'eng',
        games_count: 9154,
        image_background:
          'https://media.rawg.io/media/screenshots/7f8/7f8b58994fc420fefaa5fb9992335a11.jpg',
      },
      {
        id: 205,
        name: 'Lore-Rich',
        slug: 'lore-rich',
        language: 'eng',
        games_count: 819,
        image_background:
          'https://media.rawg.io/media/games/dfe/dfe14d30ed6fccd9db4ae79d3be51d54.jpg',
      },
      {
        id: 5816,
        name: 'console',
        slug: 'console',
        language: 'eng',
        games_count: 1387,
        image_background:
          'https://media.rawg.io/media/games/278/2784fe67065c5095411f0d4c85205143.jpg',
      },
      {
        id: 744,
        name: 'friends',
        slug: 'friends',
        language: 'eng',
        games_count: 15074,
        image_background:
          'https://media.rawg.io/media/games/bc3/bc3c433821089108642a41a3057f92c5.jpg',
      },
      {
        id: 578,
        name: 'Masterpiece',
        slug: 'masterpiece',
        language: 'eng',
        games_count: 279,
        image_background:
          'https://media.rawg.io/media/games/855/8552c056d729f34c951c30f3cfef9da8.jpg',
      },
      {
        id: 3109,
        name: 'weapons',
        slug: 'weapons',
        language: 'eng',
        games_count: 2171,
        image_background:
          'https://media.rawg.io/media/games/d39/d39681042f1ba444be99340c89db4528.jpg',
      },
      {
        id: 1484,
        name: 'skill',
        slug: 'skill',
        language: 'eng',
        games_count: 3492,
        image_background:
          'https://media.rawg.io/media/games/032/0322d8688637ff99a68e6cbed6b7e393.jpg',
      },
      {
        id: 3046,
        name: 'destroy',
        slug: 'destroy',
        language: 'eng',
        games_count: 4600,
        image_background:
          'https://media.rawg.io/media/games/55a/55a685051caa3d478836fa7c1d074694.jpg',
      },
      {
        id: 1743,
        name: 'collect',
        slug: 'collect',
        language: 'eng',
        games_count: 8042,
        image_background:
          'https://media.rawg.io/media/screenshots/833/833ed43c10cdcb03981b988c57786739.jpg',
      },
      {
        id: 2184,
        name: 'hunt',
        slug: 'hunt',
        language: 'eng',
        games_count: 2316,
        image_background:
          'https://media.rawg.io/media/games/313/3137f0b7fb36b53e34abcde6e7607909.jpg',
      },
      {
        id: 754,
        name: 'gun',
        slug: 'gun',
        language: 'eng',
        games_count: 3206,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 1527,
        name: 'rain',
        slug: 'rain',
        language: 'eng',
        games_count: 858,
        image_background:
          'https://media.rawg.io/media/screenshots/3ee/3eea6a5902e15c59c8b503d7f8cb07f6.jpg',
      },
      {
        id: 18426,
        name: 'enemy',
        slug: 'enemy',
        language: 'eng',
        games_count: 2523,
        image_background:
          'https://media.rawg.io/media/screenshots/128/1286f376596f7cdf7da6fc2708626cfa.jpg',
      },
      {
        id: 691,
        name: 'quick',
        slug: 'quick',
        language: 'eng',
        games_count: 928,
        image_background:
          'https://media.rawg.io/media/screenshots/952/9522f259c79b8139915765c621c2b4c9.jpg',
      },
      {
        id: 2863,
        name: 'darkness',
        slug: 'darkness',
        language: 'eng',
        games_count: 451,
        image_background:
          'https://media.rawg.io/media/screenshots/92c/92c15660f548971664fdcc66bf15e729.jpg',
      },
      {
        id: 6580,
        name: 'defender',
        slug: 'defender',
        language: 'eng',
        games_count: 181,
        image_background:
          'https://media.rawg.io/media/screenshots/296/296bfebf2214d9e7b5f54ddb7de85ca6_S7JIPnC.jpg',
      },
    ],
    esrb_rating: {
      id: 3,
      name: 'Teen',
      slug: 'teen',
    },
    short_screenshots: [
      {
        id: -1,
        image:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
      },
      {
        id: 2629150,
        image:
          'https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg',
      },
      {
        id: 2629151,
        image:
          'https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg',
      },
      {
        id: 2629152,
        image:
          'https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg',
      },
      {
        id: 2629153,
        image:
          'https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg',
      },
      {
        id: 2629154,
        image:
          'https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg',
      },
      {
        id: 2629155,
        image:
          'https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg',
      },
    ],
  },
  {
    id: 3070,
    slug: 'fallout-4',
    name: 'Fallout 4',
    released: '2015-11-09',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
    rating: 3.8,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1505,
        percent: 48.3,
      },
      {
        id: 3,
        title: 'meh',
        count: 814,
        percent: 26.12,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 644,
        percent: 20.67,
      },
      {
        id: 1,
        title: 'skip',
        count: 153,
        percent: 4.91,
      },
    ],
    ratings_count: 3089,
    reviews_text_count: 18,
    added: 12360,
    added_by_status: {
      yet: 593,
      owned: 7748,
      beaten: 2091,
      toplay: 394,
      dropped: 1239,
      playing: 295,
    },
    metacritic: 84,
    playtime: 41,
    suggestions_count: 448,
    updated: '2023-06-22T19:04:56',
    user_game: null,
    reviews_count: 3116,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2015-11-09',
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
        released_at: '2015-11-09',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>',
        },
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
        released_at: '2015-11-09',
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
        id: 3252,
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
        id: 9047,
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
        id: 13248,
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
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14232,
        image_background:
          'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 6,
        name: 'Exploration',
        slug: 'exploration',
        language: 'eng',
        games_count: 19405,
        image_background:
          'https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg',
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
        id: 1,
        name: 'Survival',
        slug: 'survival',
        language: 'eng',
        games_count: 7229,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
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
        id: 150,
        name: 'Third-Person Shooter',
        slug: 'third-person-shooter',
        language: 'eng',
        games_count: 2896,
        image_background:
          'https://media.rawg.io/media/games/974/974342a3959981a17bdbbff2fd7f97b0.jpg',
      },
      {
        id: 43,
        name: 'Post-apocalyptic',
        slug: 'post-apocalyptic',
        language: 'eng',
        games_count: 3328,
        image_background:
          'https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg',
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
          'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
      },
      {
        id: 27994,
        image:
          'https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg',
      },
      {
        id: 27996,
        image:
          'https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg',
      },
      {
        id: 28000,
        image:
          'https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg',
      },
      {
        id: 28002,
        image:
          'https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg',
      },
      {
        id: 28004,
        image:
          'https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg',
      },
      {
        id: 28006,
        image:
          'https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg',
      },
    ],
  },
  {
    id: 2454,
    slug: 'doom',
    name: 'DOOM (2016)',
    released: '2016-05-13',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
    rating: 4.38,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 1759,
        percent: 52.24,
      },
      {
        id: 4,
        title: 'recommended',
        count: 1277,
        percent: 37.93,
      },
      {
        id: 3,
        title: 'meh',
        count: 253,
        percent: 7.51,
      },
      {
        id: 1,
        title: 'skip',
        count: 78,
        percent: 2.32,
      },
    ],
    ratings_count: 3328,
    reviews_text_count: 29,
    added: 12354,
    added_by_status: {
      yet: 532,
      owned: 7705,
      beaten: 2649,
      toplay: 479,
      dropped: 693,
      playing: 296,
    },
    metacritic: 85,
    playtime: 10,
    suggestions_count: 652,
    updated: '2023-06-20T20:45:20',
    user_game: null,
    reviews_count: 3367,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2016-05-13',
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
        released_at: '2016-05-13',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>',
        },
        requirements_ru: {
          minimum: 'i386-33, 4 Мб',
          recommended: 'i486-40, 8 Мб',
        },
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
        released_at: '2016-05-13',
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
        released_at: '2016-05-13',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 355582,
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
        id: 2571,
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
        id: 38659,
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
      {
        id: 8223,
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
        id: 7,
        name: 'Multiplayer',
        slug: 'multiplayer',
        language: 'eng',
        games_count: 35015,
        image_background:
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
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
        id: 18,
        name: 'Co-op',
        slug: 'co-op',
        language: 'eng',
        games_count: 9836,
        image_background:
          'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
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
        id: 32,
        name: 'Sci-fi',
        slug: 'sci-fi',
        language: 'eng',
        games_count: 17177,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
      },
      {
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 16,
        name: 'Horror',
        slug: 'horror',
        language: 'eng',
        games_count: 41908,
        image_background:
          'https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 26,
        name: 'Gore',
        slug: 'gore',
        language: 'eng',
        games_count: 5056,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 49,
        name: 'Difficult',
        slug: 'difficult',
        language: 'eng',
        games_count: 12459,
        image_background:
          'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
      },
      {
        id: 193,
        name: 'Classic',
        slug: 'classic',
        language: 'eng',
        games_count: 1728,
        image_background:
          'https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg',
      },
      {
        id: 63,
        name: 'Zombies',
        slug: 'zombies',
        language: 'eng',
        games_count: 9661,
        image_background:
          'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
      },
      {
        id: 120,
        name: 'Memes',
        slug: 'memes',
        language: 'eng',
        games_count: 1563,
        image_background:
          'https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg',
      },
      {
        id: 131,
        name: 'Fast-Paced',
        slug: 'fast-paced',
        language: 'eng',
        games_count: 10269,
        image_background:
          'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
      },
      {
        id: 271,
        name: 'Remake',
        slug: 'remake',
        language: 'eng',
        games_count: 1663,
        image_background:
          'https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg',
      },
      {
        id: 270,
        name: 'Blood',
        slug: 'blood',
        language: 'eng',
        games_count: 1945,
        image_background:
          'https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg',
      },
      {
        id: 187,
        name: 'Demons',
        slug: 'demons',
        language: 'eng',
        games_count: 1986,
        image_background:
          'https://media.rawg.io/media/screenshots/a06/a06ad4fb44d5031dcfa262ffc1759b47.jpg',
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
          'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
      },
      {
        id: 22393,
        image:
          'https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg',
      },
      {
        id: 22394,
        image:
          'https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg',
      },
      {
        id: 22398,
        image:
          'https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg',
      },
      {
        id: 22400,
        image:
          'https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg',
      },
      {
        id: 22402,
        image:
          'https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg',
      },
      {
        id: 22404,
        image:
          'https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg',
      },
    ],
  },
  {
    id: 11859,
    slug: 'team-fortress-2',
    name: 'Team Fortress 2',
    released: '2007-10-10',
    tba: false,
    background_image:
      'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
    rating: 3.67,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: 'recommended',
        count: 1239,
        percent: 45.19,
      },
      {
        id: 3,
        title: 'meh',
        count: 673,
        percent: 24.54,
      },
      {
        id: 5,
        title: 'exceptional',
        count: 565,
        percent: 20.61,
      },
      {
        id: 1,
        title: 'skip',
        count: 265,
        percent: 9.66,
      },
    ],
    ratings_count: 2716,
    reviews_text_count: 18,
    added: 12072,
    added_by_status: {
      yet: 177,
      owned: 9253,
      beaten: 745,
      toplay: 44,
      dropped: 1692,
      playing: 161,
    },
    metacritic: 92,
    playtime: 9,
    suggestions_count: 514,
    updated: '2023-06-23T00:19:05',
    user_game: null,
    reviews_count: 2742,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    platforms: [
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
        released_at: '2007-10-10',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
          recommended:
            '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
        },
        requirements_ru: {
          minimum:
            'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
          recommended:
            'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
        },
      },
      {
        platform: {
          id: 5,
          name: 'macOS',
          slug: 'macos',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 101583,
          image_background:
            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
        },
        released_at: '2007-10-10',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
        },
        requirements_ru: null,
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 75188,
          image_background:
            'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
        },
        released_at: '2007-10-10',
        requirements_en: {
          minimum:
            '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
        },
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
          id: 5,
          name: 'Apple Macintosh',
          slug: 'mac',
        },
      },
      {
        platform: {
          id: 6,
          name: 'Linux',
          slug: 'linux',
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
        id: 2,
        name: 'Shooter',
        slug: 'shooter',
        games_count: 59312,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
    ],
    stores: [
      {
        id: 13018,
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
    ],
    clip: null,
    tags: [
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
        id: 7808,
        name: 'steam-trading-cards',
        slug: 'steam-trading-cards',
        language: 'eng',
        games_count: 7571,
        image_background:
          'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
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
        id: 40845,
        name: 'Partial Controller Support',
        slug: 'partial-controller-support',
        language: 'eng',
        games_count: 9809,
        image_background:
          'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
      },
      {
        id: 30,
        name: 'FPS',
        slug: 'fps',
        language: 'eng',
        games_count: 12112,
        image_background:
          'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
      },
      {
        id: 9,
        name: 'Online Co-Op',
        slug: 'online-co-op',
        language: 'eng',
        games_count: 4399,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
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
        id: 123,
        name: 'Comedy',
        slug: 'comedy',
        language: 'eng',
        games_count: 10882,
        image_background:
          'https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg',
      },
      {
        id: 79,
        name: 'Free to Play',
        slug: 'free-to-play',
        language: 'eng',
        games_count: 5426,
        image_background:
          'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
      },
      {
        id: 80,
        name: 'Tactical',
        slug: 'tactical',
        language: 'eng',
        games_count: 4123,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
      },
      {
        id: 11669,
        name: 'stats',
        slug: 'stats',
        language: 'eng',
        games_count: 4488,
        image_background:
          'https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg',
      },
      {
        id: 40852,
        name: 'Steam Workshop',
        slug: 'steam-workshop',
        language: 'eng',
        games_count: 1316,
        image_background:
          'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
      },
      {
        id: 40832,
        name: 'Cross-Platform Multiplayer',
        slug: 'cross-platform-multiplayer',
        language: 'eng',
        games_count: 2244,
        image_background:
          'https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg',
      },
      {
        id: 40838,
        name: 'Includes level editor',
        slug: 'includes-level-editor',
        language: 'eng',
        games_count: 1641,
        image_background:
          'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
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
        id: 40833,
        name: 'Captions available',
        slug: 'captions-available',
        language: 'eng',
        games_count: 1236,
        image_background:
          'https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg',
      },
      {
        id: 40837,
        name: 'In-App Purchases',
        slug: 'in-app-purchases',
        language: 'eng',
        games_count: 2098,
        image_background:
          'https://media.rawg.io/media/games/98c/98cd77a9f61b31a6ddab1670b079c841.jpg',
      },
      {
        id: 125,
        name: 'Crafting',
        slug: 'crafting',
        language: 'eng',
        games_count: 3372,
        image_background:
          'https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg',
      },
      {
        id: 11,
        name: 'Team-Based',
        slug: 'team-based',
        language: 'eng',
        games_count: 1280,
        image_background:
          'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
      },
      {
        id: 170,
        name: 'Competitive',
        slug: 'competitive',
        language: 'eng',
        games_count: 1023,
        image_background:
          'https://media.rawg.io/media/games/1a1/1a17e9b6286edb7e1f1e510110ccb0c0.jpg',
      },
      {
        id: 40856,
        name: 'Valve Anti-Cheat enabled',
        slug: 'valve-anti-cheat-enabled',
        language: 'eng',
        games_count: 104,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
      },
      {
        id: 197,
        name: 'Robots',
        slug: 'robots',
        language: 'eng',
        games_count: 7744,
        image_background:
          'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
      },
      {
        id: 40834,
        name: 'Commentary available',
        slug: 'commentary-available',
        language: 'eng',
        games_count: 254,
        image_background:
          'https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg',
      },
      {
        id: 164,
        name: 'Cartoony',
        slug: 'cartoony',
        language: 'eng',
        games_count: 3722,
        image_background:
          'https://media.rawg.io/media/screenshots/b8d/b8dea961327394025d64ddcd90abfe84.jpg',
      },
      {
        id: 179,
        name: 'Cartoon',
        slug: 'cartoon',
        language: 'eng',
        games_count: 4687,
        image_background:
          'https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg',
      },
      {
        id: 265,
        name: 'Class-Based',
        slug: 'class-based',
        language: 'eng',
        games_count: 407,
        image_background:
          'https://media.rawg.io/media/screenshots/9e4/9e490f54d07f99a1d893de96468a44df.jpg',
      },
      {
        id: 245,
        name: 'Trading',
        slug: 'trading',
        language: 'eng',
        games_count: 983,
        image_background:
          'https://media.rawg.io/media/games/2bd/2bd7c117057e74c03b6ea9577ae8e4c1.jpg',
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
          'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
      },
      {
        id: 97905,
        image:
          'https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg',
      },
      {
        id: 97906,
        image:
          'https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg',
      },
      {
        id: 97907,
        image:
          'https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg',
      },
      {
        id: 97908,
        image:
          'https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg',
      },
      {
        id: 97909,
        image:
          'https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg',
      },
      {
        id: 97910,
        image:
          'https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg',
      },
    ],
  },
];
