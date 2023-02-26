import {
    Actions,
    GAME_PUSH_TASK_KEY,
} from '../types';

const initialState = {
    taskKeys: [],
};

export const taskKeys = (state = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_PUSH_TASK_KEY:
        return {
            ...state,
            taskKeys: [...state.taskKeys, action.payload.taskKey],
        };
    default:
        return state;
    }
};
