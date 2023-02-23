import { RootState } from '../../index';
import { Count } from './types';

export const getCount = (state: RootState): Count => state.count;
