import React from 'react';
import {
  useGetGamesByGenreQuery,
  useGetGameByIDQuery,
  useGetGameScreenShotsQuery,
  useGetGameSeriesQuery,
  useGetGamesQuery,
  useGetGamesByPlatformsQuery,
  useGetGameTrailersQuery,
  useGetGameAdditionsQuery,
  useGetGameDevTeamQuery,
} from '../services/getGamesApi';

const Welcome = () => {
  // const { data, isFetching } = useGetGamesQuery();
  // const { data, isFetching } = useGetGameByIDQuery(3498);

  // const { data, isFetching } = useGetGameSeriesQuery(3498);

  // const { data, isFetching } = useGetGameByGenreQuery(15);
  // const { data, isFetching } = useGetGamesByPlatformsQuery(1);

  // const { data, isFetching } = useGetGameTrailersQuery(3498);
  // const { data, isFetching } = useGetGameAdditionsQuery(3498);
  // const { data, isFetching } = useGetGameDevTeamQuery(3498);
  // if (isFetching) return;

  // console.log(data);

  return <div>Welcome</div>;
};

export default Welcome;
