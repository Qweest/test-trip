import axios from 'axios';

import { BASE_URL } from './constants';

const apiService = axios.create({
  baseURL: `${BASE_URL}`,
});

export default apiService;
