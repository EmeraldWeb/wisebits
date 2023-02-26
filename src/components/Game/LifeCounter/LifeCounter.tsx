import { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './LifeCounter.scss';

type Props = {
    amount?: number,
    icon?: string,
}

export function LifeCounter({ amount = 0, icon }: Props): ReactElement {
    function listItems() {
        const symbol = icon ?? '❤️';

        return [...Array(amount).keys()].map((value, index) => (
            <li
                key={`${index}-${uuidv4()}`}
                className={styles.item}
            >
                <span
                    role="img"
                    aria-label="Life symbol"
                >
                    {symbol}
                </span>
            </li>
        ));
    }

    return (
        <ul className={styles.list}>
            {listItems()}
        </ul>
    );
}
