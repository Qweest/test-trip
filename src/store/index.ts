import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { RootState } from './entities';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
