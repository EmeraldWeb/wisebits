import { RootState } from '../../index';
import { Game, GameInput } from './types';

export const getIsGamePlay = (state: RootState): Game['isPlay'] => state.game.isPlay;

export const getLastTaskKey = (state: RootState): GameInput | undefined => {
    return state.game.taskKeys.at(-1);
};

export const getLastUserKey = (state: RootState): GameInput | undefined => {
    return state.game.userKeys.at(-1);
};

export const getLifeCount = (state: RootState): Game['lifeCount'] => state.game.lifeCount;
export const getProgress = (state: RootState): Game['progress'] => state.game.progress;
export const getWinThreshold = (state: RootState): Game['winThreshold'] => state.game.winThreshold;
export const getLastTime = (state: RootState): Game['lastTime'] => state.game.lastTime;
