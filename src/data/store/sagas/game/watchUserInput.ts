import { takeEvery, select, put } from '@redux-saga/core/effects';

import { GAME_PUSH_USER_KEY } from '../../states/game/types';
import { getLastTaskKey, getLastUserKey, getLifeCount } from '../../states/game/selectors';
import { minusLife, plusProgress, pushNewTaskKey } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchUserInput() {
    yield takeEvery(GAME_PUSH_USER_KEY, workUserKey);
}

function* workUserKey() {
    const lastTaskKey: string = yield select(getLastTaskKey);
    const lastUserKey: string = yield select(getLastUserKey);

    if (lastUserKey === lastTaskKey) {
        yield put(plusProgress());
        yield put(pushLog(`👍 GREAT! 👍 Keep going!`));
    } else {
        yield put(minusLife());

        const lifeCount: number = yield select(getLifeCount);
        if (lifeCount > 0) {
            yield put(pushNewTaskKey());
            yield put(pushLog(`💥 WRONG! 💥️ You lose life!`));
        }
    }
}
