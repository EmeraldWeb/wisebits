import { fork } from '@redux-saga/core/effects';

import { gameSaga } from './game';

export function* rootSaga() {
    yield fork(gameSaga);
}
