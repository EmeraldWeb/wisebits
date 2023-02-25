import { LOG_NEW, Log } from './types';
import { v4 as uuidv4 } from 'uuid';

export const pushLog = (text: string) => {
    const log: Log = {
        id: uuidv4(),
        timestamp: new Date().getTime(),
        text: text,
    };

    return <const>{
        type: LOG_NEW,
        payload: log,
    };
};
