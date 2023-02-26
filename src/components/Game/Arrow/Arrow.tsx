import { ReactElement } from 'react';
import { GameInput } from '../../../data/store/states/game/types';

type Props = {
    type: GameInput,
    className?: string,
}

export const arrowsDict: Record<GameInput, string> = {
    ArrowLeft: '⬅️',
    ArrowUp: '⬆️',
    ArrowRight: '➡️',
    ArrowDown: '⬇️',
};

export function Arrow({ type, className }: Props): ReactElement {
    return (
        <div
            className={className}
            role="img"
            aria-label={type}
        >
            {arrowsDict[type]}
        </div>
    );
}
