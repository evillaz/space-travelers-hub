import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
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
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return {
        ...state,
        missions: newState,
      };
    },
    leaveMission: (state, action) => {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return {
        ...state,
        missions: newState,
      };
    },
  },
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

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
