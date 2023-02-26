import {
    Actions,
    GAME_PROGRESS_SET,
    GAME_PROGRESS_PLUS,
} from '../types';
import { defaultWinThreshold } from '../const';

const initialState = {
    progress: 0,
    winThreshold: defaultWinThreshold,
};

export const progress = (state = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_PROGRESS_SET:
        return {
            ...state,
            progress: action.payload.progress,
        };
    case GAME_PROGRESS_PLUS:
        return {
            ...state,
            progress: state.progress + 1,
        };
    default:
        return state;
    }
};
