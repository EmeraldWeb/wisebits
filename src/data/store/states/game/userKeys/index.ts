import { GAME_PUSH_USER_KEY, GameInput } from '../types';

export const pushNewUserKey = (newKey: GameInput) => {
    return <const>{
        type: GAME_PUSH_USER_KEY,
        payload: {
            userKey: newKey,
        },
    };
};
