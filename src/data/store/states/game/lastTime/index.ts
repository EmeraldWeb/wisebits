import { GAME_UPDATE_TIME } from '../types';

export const updateTime = (lastTime: number) => {
    return <const>{
        type: GAME_UPDATE_TIME,
        payload: {
            lastTime,
        },
    };
};
