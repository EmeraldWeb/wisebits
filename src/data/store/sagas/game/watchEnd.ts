import { takeEvery, put, select } from '@redux-saga/core/effects';

import { GAME_END } from '../../states/game/types';
import { pushLog } from '../../states/logs/actions';
import { getProgress } from '../../states/game/selectors';

export function* watchEnd() {
    yield takeEvery(GAME_END, workGameIsEnd);
}

export const logText = (progress: string | number) =>
    `Your progress: ${progress}. Thanks for playing!`;

function* workGameIsEnd() {
    const progress: number = yield select(getProgress);

    yield put(pushLog(logText(progress)));
}

