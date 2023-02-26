import { combineReducers } from '@reduxjs/toolkit';
import { game } from './game';
import { logs } from './logs/reducers';

export const rootReducer = combineReducers({
    game,
    logs,
});
