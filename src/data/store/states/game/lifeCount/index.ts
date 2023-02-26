import { GAME_LIFE_MINUS, GAME_LIFE_PLUS, GAME_LIFE_SET } from '../types';

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
