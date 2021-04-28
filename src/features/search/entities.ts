import { Location } from './api/entities';

export interface State {
  locations: Location[];
  from: Location | null;
  to: Location | null;
  error: string;
}
