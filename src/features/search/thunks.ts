import { AppThunk } from '../../store';
import { FlightsRequest, LocationsRequest } from './api/entities';
import { getFlights, getLocations } from './api';
import { actions } from './slice';

export const getLocationsAction = (
  locationsRequest: LocationsRequest,
): AppThunk => async (dispatch) => {
  try {
    const { data } = await getLocations(locationsRequest);

    dispatch(actions.getLocationsSuccess(data.locations));
  } catch (e) {
    dispatch(actions.setError(e.message));
    throw e;
  }
};

export const getFlightsAction = (
  flightsRequest: FlightsRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.getFlightsPending());
    const { data } = await getFlights(flightsRequest);
    dispatch(actions.getFlightsSuccess(data.data));
  } catch (e) {
    dispatch(actions.getFlightsError(e.message));
    throw e;
  }
};
