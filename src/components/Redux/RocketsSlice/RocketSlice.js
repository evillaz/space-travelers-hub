import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
/* import data from '../../TempRocketData'; */

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  RocketDatile: [],
  loading: false,
  error: null,
};

export const rocketItems = createAsyncThunk('rocket', async () => {
  const response = await fetch(url);
  const result = response.json();
  return result;
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  extraReducers: {
    [rocketItems.pending]: (state) => {
      state.loading = true;
    },
    [rocketItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.RocketDatile = action.payload;
    },
    [rocketItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  },
});

export default rocketSlice.reducer;
