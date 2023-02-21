import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './index.html';
import './styles';

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <App>
                Hello
            </App>
        </React.StrictMode>
    );
} else {
    console.error('App container not found.');
}
