import { GameInput } from '../../data/store/states/game/types';

type Props = {
    type: GameInput,
    className?: string,
}

export function Arrow({ type, className }: Props) {
    const dict = {
        ArrowLeft: '⬅️',
        ArrowUp: '⬆️',
        ArrowRight: '➡️',
        ArrowDown: '⬇️',
    };

    return (
        <div className={className}>{dict[type]}</div>
    );
}
