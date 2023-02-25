import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gameStart, pushNewUserKey } from '../../data/store/states/game/actions';
import { getIsGamePlay, getLastTaskKey, getLastTime, getLifeCount } from '../../data/store/states/game/selectors';
import { inputsCodes } from '../../data/store/states/game/const';
import { useInputsListener } from '../../hooks/useInputsListener';

import { LifeCounter } from './LifeCounter';
import { NewGameButton } from './NewGameButton';
import { Arrow } from './Arrow';

import { GameInput } from '../../data/store/states/game/types';
import styles from './Game.scss';

export function Game(): ReactElement {
    const isPlay = useSelector(getIsGamePlay);
    const lifeCount = useSelector(getLifeCount);
    const lastKey = useSelector(getLastTaskKey);
    const lastTime = useSelector(getLastTime);
    const dispatch = useDispatch();

    useInputsListener({
        isEnable: isPlay,
        allowedInputs: inputsCodes,
        callback: (eventKey: string) => {
            dispatch(pushNewUserKey(eventKey as GameInput));
        },
    });

    function Content() {
        if (isPlay) {
            return lastKey
                ? <Arrow className={styles.showKey} type={lastKey} />
                : <div className={styles.waiting}>Waiting...</div>;
        } else {
            const onClick = () => {
                dispatch(gameStart());
            };

            return <NewGameButton onClick={onClick} />;
        }
    }

    function Menu() {
        if (isPlay) {
            return (
                <div className={styles.menu}>
                    <div className={styles.timer}>
                        Seconds left: {new Date(lastTime).getSeconds()}
                    </div>

                    <LifeCounter amount={lifeCount} />
                </div>
            );
        }

        return null;
    }

    return (
        <div className={styles.game}>
            <Menu />

            <div className={styles.content}>
                <Content />
            </div>
        </div>
    );
}
