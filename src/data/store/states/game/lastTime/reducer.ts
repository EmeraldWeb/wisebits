import {
    Actions,
    GAME_UPDATE_TIME,
} from '../types';
import { defaultLastTime } from '../const';

const initialState = {
    lastTime: defaultLastTime,
};

export const lastTime = (state = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_UPDATE_TIME:
        return {
            ...state,
            lastTime: action.payload.lastTime,
        };

    default:
        return state;
    }
};
