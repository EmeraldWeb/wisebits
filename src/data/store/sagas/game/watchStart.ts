import { takeEvery, put } from '@redux-saga/core/effects';

import { GAME_START } from '../../states/game/types';
import { pushNewTaskKey } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchStart() {
    yield takeEvery(GAME_START, workGameIsStart);
}

function* workGameIsStart() {
    yield put(pushLog(`The game has begun! 🍀 Good luck! 🍀`));
    yield put(pushNewTaskKey());
}
