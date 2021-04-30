import { AxiosResponse } from 'axios';

import apiService from '../../../api';
import { Coordinates } from '../entities';
import {
  FlightsRequest,
  FlightsResponse,
  LocationsRequest,
  LocationsResponse,
} from './entities';
import { FLIGHTS, LOCATIONS, RADIUS_LOCATIONS } from './constants';

export const getLocations = async (
  data: LocationsRequest,
): Promise<AxiosResponse<LocationsResponse>> => {
  return await apiService.get(LOCATIONS(data));
};

export const getRadiusLocations = async (
  data: Coordinates,
): Promise<AxiosResponse<LocationsResponse>> => {
  return await apiService.get(RADIUS_LOCATIONS(data));
};

export const getFlights = async (
  data: FlightsRequest,
): Promise<AxiosResponse<FlightsResponse>> => {
  return await apiService.get(FLIGHTS(data));
};
