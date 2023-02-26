import { takeEvery, select, put } from '@redux-saga/core/effects';

import { GAME_UPDATE_TIME } from '../../states/game/types';
import { getLastTime, getIsGamePlay, getLifeCount } from '../../states/game/selectors';
import { minusLife, updateTime, pushNewTaskKey } from '../../states/game/actions';
import { pushLog } from '../../states/logs/actions';

export function* watchTime() {
    yield takeEvery(GAME_UPDATE_TIME, workTimeout);
}

let timer: null | ReturnType<typeof setTimeout> = null;

export const logText = `⏱️ TIMEOUT! ⏱️ You lose life!`;

function* workTimeout() {
    const isPlay: boolean = yield select(getIsGamePlay);

    if (isPlay) {
        const tick = 1000;

        const smartDelay = (time: number) => new Promise((resolve) => {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(resolve, time);
            return timer;
        });

        yield smartDelay(tick);

        const currentTime: number = yield select(getLastTime);
        const delta = currentTime - tick;

        if (delta <= 0) {
            yield put(minusLife());

            const lifeCount: number = yield select(getLifeCount);
            if (lifeCount > 0) {
                yield put(pushNewTaskKey());
                yield put(pushLog(logText));
            }
        } else {
            yield put(updateTime(delta));
        }
    }
}
