import { takeEvery, put, select } from '@redux-saga/core/effects';

import { GAME_END } from '../../states/game/types';
import { pushLog } from '../../states/logs/actions';
import { getProgress } from '../../states/game/selectors';

export function* watchEnd() {
    yield takeEvery(GAME_END, workGameIsEnd);
}

function* workGameIsEnd() {
    const progress: number = yield select(getProgress);

    yield put(pushLog(`Your progress: ${progress}. Thanks for playing!`));
}
