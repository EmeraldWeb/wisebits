import { ReactElement } from 'react';
import styles from './Layout.scss';

type Props = {
    header: ReactElement | string,
    children: ReactElement | string,
}

export function Layout({ header, children }: Props): ReactElement {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                {header}
            </header>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
