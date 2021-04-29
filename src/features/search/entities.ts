import { Location } from './api/entities';

export interface State {
  locations: Location[];
  error: string;
}
