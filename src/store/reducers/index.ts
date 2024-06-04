import { combineReducers } from '@reduxjs/toolkit';

import paginationReducer from './pagination.reducer';
import sidebarReducer from './sidebar.reducer';

const rootReducer = combineReducers({
  pagination: paginationReducer,
  sidebar: sidebarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
