import { Log, Actions, LOG_NEW } from './types';

const initialState: Log[] = [];

export const logs = (state: Log[] = initialState, action: Actions) => {
    switch (action.type) {
    case LOG_NEW: {
        const newArr = [...state];
        newArr.push(action.payload);
        return newArr;
    }
    default:
        return state;
    }
};
