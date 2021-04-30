import { Flight, Location } from './api/entities';

export type PossibleDate = Date | null;

export interface RangeDate {
  start: PossibleDate;
  end: PossibleDate;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface State {
  locations: Location[];
  currentLocation?: Coordinates;
  from: Location | undefined;
  to: Location | undefined;
  departureDates: RangeDate;
  returnDates: RangeDate;
  flights: {
    pending: boolean;
    data: Flight[];
  };
  error: string;
}
