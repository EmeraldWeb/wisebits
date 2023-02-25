import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import store from './data/store';
import { App } from './app';
import './index.html';
import './styles';

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.error('App container not found.');
}
