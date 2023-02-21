import React, { ReactElement } from 'react';
import styles from './App.scss';

type Props = {
    children: ReactElement | string,
}

export function App({ children }: Props): ReactElement {
    return (
        <main className={styles.background}>
            {children}
        </main>
    );
}
