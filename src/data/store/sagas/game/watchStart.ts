import { takeEvery, put } from '@redux-saga/core/effects';

import { GAME_START } from '../../states/game/types';
import { pushNewTaskKey } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchStart() {
    yield takeEvery(GAME_START, workGameIsStart);
}

export const logText = `The game has begun! 🍀 Good luck! 🍀`;

function* workGameIsStart() {
    yield put(pushLog(logText));
    yield put(pushNewTaskKey());
}
