import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/entities';
import { Flight, Location } from './api/entities';
import { RangeDate, State } from './entities';

export const initialState: State = {
  locations: [],
  currentLocation: undefined,
  from: undefined,
  to: undefined,
  departureDates: { start: null, end: null },
  returnDates: { start: null, end: null },
  flights: {
    data: [],
    pending: false,
  },
  error: '',
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getLocationsSuccess(state, action: PayloadAction<Location[]>) {
      state.locations = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setCurrentLocation(
      state,
      action: PayloadAction<{ lon: number; lat: number }>,
    ) {
      state.currentLocation = action.payload;
    },
    setFromLocation(state, action: PayloadAction<Location | undefined>) {
      state.from = action.payload;
    },
    setToLocation(state, action: PayloadAction<Location | undefined>) {
      state.to = action.payload;
    },
    setDepartureDates(state, action: PayloadAction<RangeDate>) {
      state.departureDates = action.payload;
    },
    setReturnDates(state, action: PayloadAction<RangeDate>) {
      state.returnDates = action.payload;
    },
    getFlightsPending(state) {
      state.flights.pending = true;
    },
    getFlightsSuccess(state, action: PayloadAction<Flight[]>) {
      state.flights.data = action.payload;
      state.flights.pending = false;
    },
    getFlightsError(state, action: PayloadAction<string>) {
      state.flights.pending = false;
      state.error = action.payload;
    },
  },
});

export const searchSelector = (state: RootState): State => state.search;

export const { actions } = slice;

export default slice.reducer;
