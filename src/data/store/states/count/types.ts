import { InferValueTypes } from '../../../../utils/inferTypes';
import * as actions from './actions';

export type Count = number;
export type Actions = ReturnType<InferValueTypes<typeof actions>>;

export const COUNT_INCREMENT = 'COUNT_INCREMENT';
export const COUNT_DECREMENT = 'COUNT_DECREMENT';
