import qs from 'qs';

import { Coordinates } from '../entities';
import { FlightsRequest, LocationsRequest } from './entities';

export const LOCATIONS = ({ term }: LocationsRequest): string =>
  `locations?term=${term}&location_types=airport`;

export const RADIUS_LOCATIONS = (request: Coordinates): string =>
  `locations?type=radius&location_types=airport&${qs.stringify(request, {
    encode: false,
  })}`;

export const FLIGHTS = (request: FlightsRequest): string => {
  return `flights?v=3&partner=skypicker&locale=en&limit=50&${qs.stringify(
    request,
    { encode: false },
  )}`;
};
