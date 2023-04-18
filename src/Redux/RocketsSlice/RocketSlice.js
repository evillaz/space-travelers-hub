import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const rocketItems = createAsyncThunk('rocket', async () => {
  const response = await fetch(url);
  const result = await response.json();

  // Extract only the required fields from the JSON data
  const rocketData = result.map((item) => ({
    id: item.rocket_id,
    name: item.rocket_name,
    description: item.description,
    image: item.flickr_images[0],
  }));

  return rocketData;
});

const initialState = {
  RocketDatile: [],
  loading: false,
  error: null,
  buttonText: 'reserve rocket',
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(rocketItems.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(rocketItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        RocketDatile: action.payload,
      }))
      .addCase(rocketItems.rejected, (state) => ({
        ...state,
        loading: true,
      }));
  },
});

export default rocketSlice.reducer;
