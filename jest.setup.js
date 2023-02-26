import '@testing-library/jest-dom';

global.structuredClone = (object) => {
    return JSON.parse(JSON.stringify(object));
}
