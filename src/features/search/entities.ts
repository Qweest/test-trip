import { Flight, Location } from './api/entities';

export type PossibleDate = Date | null;

export interface RangeDate {
  start: PossibleDate;
  end: PossibleDate;
}

export interface State {
  locations: Location[];
  from: Location | undefined;
  to: Location | undefined;
  departureDates: RangeDate;
  returnDates: RangeDate;
  flights: Flight[];
  error: string;
}
