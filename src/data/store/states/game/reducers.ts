import {
    Game,
    Actions,
    GAME_START,
    GAME_END,
    GAME_PUSH_TASK_KEY,
    GAME_LIFE_SET,
    GAME_LIFE_PLUS,
    GAME_LIFE_MINUS,
    GAME_PUSH_USER_KEY,
    GAME_PROGRESS_SET,
    GAME_PROGRESS_PLUS, GAME_UPDATE_TIME,
} from './types';
import { defaultLifeAmount, defaultWinThreshold, defaultLastTime } from './const';

const initialState: Game = {
    isPlay: false,
    lifeCount: defaultLifeAmount,
    taskKeys: [],
    userKeys: [],
    progress: 0,
    winThreshold: defaultWinThreshold,
    lastTime: defaultLastTime,
};

export const game = (state: Game = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_START:
        return {
            ...state,
            isPlay: true,
        };
    case GAME_END: return structuredClone(initialState);

    case GAME_PUSH_TASK_KEY:
        return {
            ...state,
            taskKeys: [...state.taskKeys, action.payload.taskKey],
        };
    case GAME_PUSH_USER_KEY:
        return {
            ...state,
            userKeys: [...state.userKeys, action.payload.userKey],
        };

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

    case GAME_UPDATE_TIME:
        return {
            ...state,
            lastTime: action.payload.lastTime,
        };

    default:
        return state;
    }
};
