import { RootState } from '../../index';
import { Game, GameInput } from './types';

export const getIsGamePlay = (state: RootState): Game['isPlay'] => ((state.game as Game) as Game).isPlay;

export const getTaskKeys = (state: RootState): Game['taskKeys'] => ((state.game as Game) as Game).taskKeys;
export const getLastTaskKey = (state: RootState): GameInput | undefined => {
    return (state.game as Game).taskKeys.at(-1);
};

export const getUserKeys = (state: RootState): Game['userKeys'] => ((state.game as Game) as Game).userKeys;
export const getLastUserKey = (state: RootState): GameInput | undefined => {
    return (state.game as Game).userKeys.at(-1);
};

export const getLifeCount = (state: RootState): Game['lifeCount'] => (state.game as Game).lifeCount;
export const getProgress = (state: RootState): Game['progress'] => (state.game as Game).progress;
export const getWinThreshold = (state: RootState): Game['winThreshold'] => (state.game as Game).winThreshold;
export const getLastTime = (state: RootState): Game['lastTime'] => (state.game as Game).lastTime;
