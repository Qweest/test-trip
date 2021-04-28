import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { LocationsRequest, LocationsResponse } from './entities';
import { LOCATIONS } from './constants';

export const getLocations = async (
  data: LocationsRequest,
): Promise<AxiosResponse<LocationsResponse>> => {
  return await apiService.get(LOCATIONS(data));
};
