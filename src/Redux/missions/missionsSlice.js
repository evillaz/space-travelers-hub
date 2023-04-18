import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      const { data } = resp;
      const missionsArray = data.map((m) => (
        { mission_id: m.mission_id, mission_name: m.mission_name, description: m.description }
      ));
      return missionsArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  missions: [],
  isLoading: true,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload,
      }))
      .addCase(getMissions.rejected, (state) => ({
        ...state,
        isLoading: true,
      }));
  },
});

export default missionsSlice.reducer;
