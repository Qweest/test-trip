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

export interface Flight {
  id: string;
  cityFrom: string;
  cityTo: string;
  countryFrom: {
    name: string;
  };
  countryTo: {
    name: string;
  };
  price: string;
  fly_duration: string;
  dTime: string;
  dTimeUTC: string;
  aTime: string;
  aTimeUTC: string;
}

export interface FlightsResponse {
  id: string;
  data: Flight[];
}
