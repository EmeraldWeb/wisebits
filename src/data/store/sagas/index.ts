import { take, takeEvery } from '@redux-saga/core/effects';
import { COUNT_DECREMENT, COUNT_INCREMENT } from '../states/count/types';

export function* watcher() {
    yield take(COUNT_INCREMENT);
    console.log('First increment');
    yield take(COUNT_DECREMENT);
    console.log('Then decrement');

    yield takeEvery(COUNT_INCREMENT, worker);
}

export function* worker() {
    console.log('every +');
    yield;
}

export function* rootSaga() {
    yield watcher();
}
