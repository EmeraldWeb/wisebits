import { GAME_PUSH_TASK_KEY, GameInput } from '../types';
import { inputsCodes } from '../const';

export const pushNewTaskKey = (key?: GameInput) => {
    const newKey = key ?? inputsCodes[Math.floor(Math.random() * inputsCodes.length)];
    return <const>{
        type: GAME_PUSH_TASK_KEY,
        payload: {
            taskKey: newKey,
        },
    };
};

