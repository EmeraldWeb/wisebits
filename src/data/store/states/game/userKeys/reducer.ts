import {
    Actions,
    GAME_PUSH_USER_KEY,
} from '../types';

const initialState = {
    userKeys: [],
};

export const userKeys = (state = initialState, action: Actions) => {
    switch (action.type) {
    case GAME_PUSH_USER_KEY:
        return {
            ...state,
            userKeys: [...state.userKeys, action.payload.userKey],
        };

    default:
        return state;
    }
};
