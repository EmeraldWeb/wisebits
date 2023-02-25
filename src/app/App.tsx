import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { getLogs } from '../data/store/states/logs/selectors';
import { defaultLifeAmount } from '../data/store/states/game/const';

import { Layout } from '../components/Layout';
import { Game } from '../components/Game';

export function App(): ReactElement {
    const logs = useSelector(getLogs);
    let logMessage = `Welcome! Game rules: press the arrow buttons → ↑ ← ↓ 
    when the corresponding arrow is displayed on the screen, you have only ${defaultLifeAmount} tries.`;

    if (logs[0]) {
        const lastLog = logs[logs.length - 1];
        const date = new Date(lastLog.timestamp);

        logMessage = `(${date.getHours()}:${date.getMinutes()}) ${lastLog.text}`;
    }

    return (
        <Layout
            header={logMessage}
        >
            <Game />
        </Layout>
    );
}
