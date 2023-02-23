import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../data/store/states/count/actions';
import { getCount } from '../data/store/states/count/selectors';

import styles from './App.scss';

type Props = {
    children: ReactElement | string,
}

export function App({ children }: Props): ReactElement {
    const dispatch = useDispatch();
    const count = useSelector(getCount);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <main className={styles.background}>
            <div>
                <button onClick={() => {
                    handleIncrement();
                }}>+ smthg</button>
                <button onClick={() => {
                    handleDecrement();
                }}>- smthg</button>
                <div>
                    {count}
                </div>
            </div>

            {children}
        </main>
    );
}
