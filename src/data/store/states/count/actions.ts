import { COUNT_INCREMENT, COUNT_DECREMENT } from './types';

export const increment = () => {
    return <const>{
        type: COUNT_INCREMENT,
    };
};

export const decrement = () => {
    return <const>{
        type: COUNT_DECREMENT,
    };
};
