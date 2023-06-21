import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from '../services/getGamesApi';

export default configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gamesApi.middleware),
});
