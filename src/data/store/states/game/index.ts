// @ts-ignore
import concatenateReducers from 'redux-concatenate-reducers';

import { isPlay } from './isPlay/reducer';
import { taskKeys } from './taskKeys/reducer';
import { userKeys } from './userKeys/reducer';
import { lifeCount } from './lifeCount/reducer';
import { progress } from './progress/reducer';
import { lastTime } from './lastTime/reducer';

export const game = concatenateReducers([
    isPlay,
    taskKeys,
    userKeys,
    lifeCount,
    progress,
    lastTime,
]);
