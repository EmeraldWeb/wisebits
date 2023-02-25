import { InferValueTypes } from '../../../../utils/inferTypes';
import * as actions from './actions';

export type Actions = ReturnType<InferValueTypes<typeof actions>>;
export type Log = { // for future: add key/type of log
    id: string | number,
    timestamp: number,
    text: string,
};

export const LOG_NEW = 'LOG_NEW';
