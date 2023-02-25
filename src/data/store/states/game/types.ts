import { InferValueTypes } from '../../../../utils/inferTypes';
import * as actions from './actions';
export type Actions = ReturnType<InferValueTypes<typeof actions>>;

export type GameInput = 'ArrowLeft' | 'ArrowUp' | 'ArrowRight' | 'ArrowDown';
// keyCodes are deprecated
// left 37 → / up 38 ↑ / right 39 / ← down ↓ 40

export type Game = {
    isPlay: boolean,
    lifeCount: number,
    taskKeys: GameInput[],
    userKeys: GameInput[],
    progress: number,
    winThreshold: number,
    lastTime: number,
}

export const GAME_START = 'GAME_START';
export const GAME_END = 'GAME_END';

export const GAME_PUSH_TASK_KEY = 'GAME_PUSH_TASK_KEY';
export const GAME_PUSH_USER_KEY = 'GAME_PUSH_USER_KEY';

export const GAME_LIFE_SET = 'GAME_LIFE_SET';
export const GAME_LIFE_PLUS = 'GAME_LIFE_PLUS';
export const GAME_LIFE_MINUS = 'GAME_LIFE_MINUS';

export const GAME_PROGRESS_SET = 'GAME_PROGRESS_SET';
export const GAME_PROGRESS_PLUS = 'GAME_PROGRESS_PLUS';

export const GAME_UPDATE_TIME = 'GAME_UPDATE_TIME';
