import { takeEvery, select, put } from '@redux-saga/core/effects';

import { GAME_PROGRESS_PLUS, GAME_PROGRESS_SET } from '../../states/game/types';
import { getProgress, getWinThreshold } from '../../states/game/selectors';
import { gameEnd, pushNewTaskKey } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchProgress() {
    yield takeEvery(GAME_PROGRESS_PLUS, workCheckProgress);
    yield takeEvery(GAME_PROGRESS_SET, workCheckProgress);
}

export const logText = `✨ You WIN! ✨ Another try?`;

function* workCheckProgress() {
    const progress: number = yield select(getProgress);
    const winThreshold: number = yield select(getWinThreshold);

    if (progress >= winThreshold) {
        yield put(gameEnd());
        yield put(pushLog(logText));
    } else {
        yield put(pushNewTaskKey());
    }
}
