import { GAME_END, GAME_START } from '../types';

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
