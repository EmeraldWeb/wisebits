import {
    MiddlewareAPI,
    isRejectedWithValue,
    Middleware,
} from '@reduxjs/toolkit';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const errorsHandling: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action) && !action.meta.shouldSkip) {
        console.error(action);
    }

    return next(action);
};
