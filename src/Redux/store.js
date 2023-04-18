import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './RocketsSlice/RocketSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
