import { takeEvery, select, put } from '@redux-saga/core/effects';

import { GAME_LIFE_MINUS, GAME_LIFE_SET } from '../../states/game/types';
import { getLifeCount } from '../../states/game/selectors';
import { gameEnd } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchLife() {
    yield takeEvery(GAME_LIFE_MINUS, workUserKey);
    yield takeEvery(GAME_LIFE_SET, workUserKey);
}

export const logText = `💧 You LOSE! 💧 Another try?`;

function* workUserKey() {
    const life: number = yield select(getLifeCount);
    if (life <= 0) {
        yield put(gameEnd());
        yield put(pushLog(logText));
    }
}
