import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const key = import.meta.env.VITE_GAMES_API_KEY;

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api/' }),
  endpoints: builder => ({
    getGames: builder.query({
      query: page => `games?key=${key}&page=1&page_size=20`,
    }),
    getGameByID: builder.query({
      query: id => `games/${id}?key=${key}`,
    }),
    getGameTrailers: builder.query({
      query: id => `games/${id}/movies?key=${key}`,
    }),
    getGameScreenShots: builder.query({
      query: game_pk => `games/${game_pk}/screenshots?key=${key}&page=1`,
    }),
    getGameAdditions: builder.query({
      query: game_pk => `games/${game_pk}/additions?key=${key}&page=1`,
    }),
    getGameDevTeam: builder.query({
      query: game_pk =>
        `games/${game_pk}/development-team?key=${key}&page=1&page_size=20`,
    }),
    // getGameSellingStores: builder.query({
    //   query: game_pk => `games/${game_pk}/stores?key=${key}`,
    // }),
    getGameSeries: builder.query({
      query: game_pk => `games/${game_pk}/game-series?key=${key}&page=1`,
    }),
    getGamesByGenre: builder.query({
      query: ({ genre, page }) =>
        `games?key=${key}&page=${page}&genres=${genre}`,
    }),
    // getGameGenres: builder.query({
    //   query: () => `genres?key=${key}&page=1&page_size=20`,
    // }),
    // getGameParentPlatforms: builder.query({
    //   query: () => `platforms/lists/parents?key=${key}&page=1&page_size=20`,
    // }),
    getGamesByPlatforms: builder.query({
      query: platform => `games?key=${key}&page=1&parent_platforms=${platform}`,
    }),
    getSearchGames: builder.query({
      query: term =>
        `games?key=${key}&page=1&page_size=50&search=${term}&search_precise=true`,
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameByIDQuery,
  useGetGameScreenShotsQuery,
  useGetGameSeriesQuery,
  // useGetGameGenresQuery,
  useGetGamesByGenreQuery,
  // useGetGameParentPlatformsQuery,
  useGetGamesByPlatformsQuery,
  useGetGameTrailersQuery,
  // useGetGameSellingStoresQuery,
  useGetGameAdditionsQuery,
  useGetGameDevTeamQuery,
  useGetSearchGamesQuery,
} = gamesApi;
