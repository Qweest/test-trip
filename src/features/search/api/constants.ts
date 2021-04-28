import { LocationsRequest } from './entities';

export const LOCATIONS = ({ term }: LocationsRequest): string =>
  `locations?term=${term}&location_types=airport`;
