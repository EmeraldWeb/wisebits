import { fork } from '@redux-saga/core/effects';

import { watchStart } from './watchStart';
import { watchEnd } from './watchEnd';
import { watchLife } from './watchLife';
import { watchUserInput } from './watchUserInput';
import { watchProgress } from './watchProgress';
import { watchNewTask } from './watchNewTask';
import { watchTime } from './watchTime';

export function* gameSaga() {
    yield fork(watchStart);
    yield fork(watchEnd);
    yield fork(watchLife);
    yield fork(watchUserInput);
    yield fork(watchProgress);
    yield fork(watchNewTask);
    yield fork(watchTime);
}
