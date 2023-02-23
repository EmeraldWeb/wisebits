// origin: https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function

import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import type { AppStore, RootState } from '../data/store';
// As a basic setup, import your same slice reducers
import { rootReducer } from '../data/store/states';
import { rootSaga } from '../data/store/sagas';
import { errorsHandling } from '../data/store/middlewares/errorsHandling';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

const sagaMiddleware = createSagaMiddleware();

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: rootReducer,
            preloadedState,
            middleware: (getDefaultMiddleware) => [
                ...getDefaultMiddleware(),
                sagaMiddleware,
                errorsHandling,
            ],
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    sagaMiddleware.run(rootSaga);

    function Wrapper({ children }: PropsWithChildren<Record<string, any>>): JSX.Element {
        return <Provider store={store}>{children}</Provider>;
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
