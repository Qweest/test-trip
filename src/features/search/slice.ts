import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/entities';
import { Location } from './api/entities';
import { State } from './entities';

export const initialState: State = {
  locations: [],
  error: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getLocationsSuccess(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload;
    },
    getLocationsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const searchSelector = (state: RootState): State => state.search;

export const { actions } = slice;

export default slice.reducer;
