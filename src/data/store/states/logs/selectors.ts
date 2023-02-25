import { RootState } from '../../index';
import { Log } from './types';

export const getLogs = (state: RootState): Log[] => state.logs;
