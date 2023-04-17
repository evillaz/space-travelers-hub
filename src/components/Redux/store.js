import { configureStore } from '@reduxjs/toolkit';

import rocketReducer from './RocketsSlice/RocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
