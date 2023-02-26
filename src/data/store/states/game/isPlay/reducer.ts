import {
    Game,
    Actions,
    GAME_START,
    GAME_END,
} from '../types';
import { defaultLifeAmount, defaultWinThreshold, defaultLastTime } from '../const';

const initialState: Game = {
    isPlay: false,
    lifeCount: defaultLifeAmount,
    taskKeys: [],
    userKeys: [],
    progress: 0,
    winThreshold: defaultWinThreshold,
    lastTime: defaultLastTime,
};

export const isPlay = (state: Game = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_START:
        return {
            ...state,
            isPlay: true,
        };
    case GAME_END: return structuredClone(initialState);

    default:
        return state;
    }
};
