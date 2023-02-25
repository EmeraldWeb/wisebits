import React, { ReactElement, MouseEvent } from 'react';
import styles from './NewGameButton.scss';

type Props = {
    onClick: (event: MouseEvent | TouchEvent) => void,
    children?: string | ReactElement,
    className?: string,
}

export function NewGameButton({
    children = 'New Game?',
    onClick,
    className,
}: Props) {
    const handleClick = (event: MouseEvent | TouchEvent) => {
        onClick(event);
    };

    return (
        <button
            className={`${styles.button} ${className}`}
            type="button"
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
