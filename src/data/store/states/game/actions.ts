import {
    GameInput,
    GAME_START,
    GAME_END,
    GAME_PUSH_TASK_KEY,
    GAME_PUSH_USER_KEY,
    GAME_LIFE_SET,
    GAME_LIFE_PLUS,
    GAME_LIFE_MINUS,
    GAME_PROGRESS_SET,
    GAME_PROGRESS_PLUS, GAME_UPDATE_TIME,
} from './types';
import { inputsCodes } from './const';

export const gameStart = () => {
    return <const>{
        type: GAME_START,
    };
};

export const gameEnd = () => {
    return <const>{
        type: GAME_END,
    };
};

export const pushNewTaskKey = (key?: GameInput) => {
    const newKey = key ?? inputsCodes[Math.floor(Math.random() * inputsCodes.length)];
    return <const>{
        type: GAME_PUSH_TASK_KEY,
        payload: {
            taskKey: newKey,
        },
    };
};

export const pushNewUserKey = (newKey: GameInput) => {
    return <const>{
        type: GAME_PUSH_USER_KEY,
        payload: {
            userKey: newKey,
        },
    };
};

export const setLife = (newlifeCount: number) => {
    return <const>{
        type: GAME_LIFE_SET,
        payload: {
            lifeCount: newlifeCount,
        },
    };
};

export const plusLife = () => {
    return <const>{
        type: GAME_LIFE_PLUS,
    };
};

export const minusLife = () => {
    return <const>{
        type: GAME_LIFE_MINUS,
    };
};

export const setProgress = (newProgress: number) => {
    return <const>{
        type: GAME_PROGRESS_SET,
        payload: {
            progress: newProgress,
        },
    };
};

export const plusProgress = () => {
    return <const>{
        type: GAME_PROGRESS_PLUS,
    };
};

export const updateTime = (lastTime: number) => {
    return <const>{
        type: GAME_UPDATE_TIME,
        payload: {
            lastTime,
        },
    };
};
