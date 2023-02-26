import { GAME_PROGRESS_PLUS, GAME_PROGRESS_SET } from '../types';

export const setProgress = (progress: number) => {
    return <const>{
        type: GAME_PROGRESS_SET,
        payload: {
            progress,
        },
    };
};

export const plusProgress = () => {
    return <const>{
        type: GAME_PROGRESS_PLUS,
    };
};
