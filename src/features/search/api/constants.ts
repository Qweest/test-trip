import qs from 'qs';

import { FlightsRequest, LocationsRequest } from './entities';

export const LOCATIONS = ({ term }: LocationsRequest): string =>
  `locations?term=${term}&location_types=airport`;

export const FLIGHTS = (request: FlightsRequest): string => {
  return `flights?v=3&partner=skypicker&locale=en&limit=50&${qs.stringify(
    request,
    { encode: false },
  )}`;
};
