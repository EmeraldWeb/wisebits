import { combineReducers } from '@reduxjs/toolkit';
import { count } from './count/reducers';

export const rootReducer = combineReducers({
    count,
});
