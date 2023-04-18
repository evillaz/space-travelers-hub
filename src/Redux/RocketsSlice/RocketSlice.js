import { createSlice } from '@reduxjs/toolkit';
import data from '../../components/TempRocketData';

const initialState = {
  RocketDatile: data,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
});

export default rocketSlice.reducer;
