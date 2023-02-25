import { takeEvery, put } from '@redux-saga/core/effects';

import { GAME_PUSH_TASK_KEY } from '../../states/game/types';
import { defaultLastTime } from '../../states/game/const';
import { updateTime } from '../../states/game/actions';

export function* watchNewTask() {
    yield takeEvery(GAME_PUSH_TASK_KEY, workTimestart);
}

function* workTimestart() {
    yield put(updateTime(defaultLastTime));
}
