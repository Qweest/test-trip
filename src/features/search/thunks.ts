import { AppThunk } from '../../store';
import { LocationsRequest } from './api/entities';
import { getLocations } from './api';
import { actions } from './slice';

export const getLocationsAction = (
  locationsRequest: LocationsRequest,
): AppThunk => async (dispatch) => {
  try {
    const { data } = await getLocations(locationsRequest);

    dispatch(actions.getLocationsSuccess(data.locations));
  } catch (e) {
    dispatch(actions.getLocationsFailure(e.message));
    throw e;
  }
};
