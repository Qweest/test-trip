export interface LocationsRequest {
  term: string;
}

export interface Location {
  id: string;
  code: string;
  name: string;
  city: {
    id: string;
    name: string;
    country?: {
      id: string;
      name: string;
    };
  };
  country?: {
    id: string;
    name: string;
  };
}

export interface LocationsResponse {
  locations: Location[];
}

export interface FlightsRequest {
  fly_from: string;
  fly_to?: string;
  date_from: string;
  date_to: string;
  return_from?: string;
  return_to?: string;
}

export interface Route {
  aTimeUTC: number;
  dTimeUTC: number;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityTo: string;
}

export interface Flight {
  id: string;
  flyFrom: string;
  flyTo: string;
  cityFrom: string;
  cityTo: string;
  cityCodeFrom: string;
  cityCodeTo: string;
  countryFrom: {
    code: string;
    name: string;
  };
  countryTo: {
    code: string;
    name: string;
  };
  price: number;
  fly_duration: string;
  return_duration: string;
  dTime: number;
  dTimeUTC: number;
  aTime: number;
  aTimeUTC: number;
  route: Route[];
}

export interface FlightsResponse {
  id: string;
  data: Flight[];
}
