import { Count, Actions, COUNT_INCREMENT, COUNT_DECREMENT } from './types';

const initialState: Count = 0;

export const count = (state: Count = initialState, action: Actions) => {
    switch (action.type) {
    case COUNT_INCREMENT:
        return state + 1;
    case COUNT_DECREMENT:
        return state - 1;
    default:
        return state;
    }
};
