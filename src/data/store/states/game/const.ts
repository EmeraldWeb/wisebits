import { GameInput } from './types';

export const inputsCodes: readonly [GameInput, GameInput, GameInput, GameInput] =
    ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];

export const defaultLifeAmount = 3;
export const defaultWinThreshold = 3;
export const defaultLastTime = 5000;
