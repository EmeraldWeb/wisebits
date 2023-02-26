import { RootState } from '../../index';
import { Log } from './types';

export const getLogs = (state: RootState): Log[] => state.logs;
export const getLastLog = (state: RootState): Log | undefined => state.logs.at(-1);
