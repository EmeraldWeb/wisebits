import {
    Actions,
    GAME_LIFE_SET,
    GAME_LIFE_PLUS,
    GAME_LIFE_MINUS,
} from '../types';
import { defaultLifeAmount } from '../const';

const initialState = {
    lifeCount: defaultLifeAmount,
};

export const lifeCount = (state = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_LIFE_SET:
        return {
            ...state,
            lifeCount: action.payload.lifeCount,
        };
    case GAME_LIFE_PLUS:
        return {
            ...state,
            lifeCount: state.lifeCount + 1,
        };
    case GAME_LIFE_MINUS:
        return {
            ...state,
            lifeCount: state.lifeCount - 1,
        };

    default:
        return state;
    }
};
