import { combineReducers } from '@reduxjs/toolkit';
import { game } from './game/reducers';
import { logs } from './logs/reducers';

export const rootReducer = combineReducers({
    game,
    logs,
});
