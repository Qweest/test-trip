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
