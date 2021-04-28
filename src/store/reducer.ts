import { combineReducers } from '@reduxjs/toolkit';

import { searchSlice } from '../features/search';

export default combineReducers({
  search: searchSlice,
});
