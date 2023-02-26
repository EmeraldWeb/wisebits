import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/testRender';
import { useInputsListener } from './useInputsListener';

test('useInputsListener', async () => {
    const testFirstKey = 'ArrowLeft';
    const testSecondKey = 'Enter';
    const keyArr: string[] = [];
    function Component() {
        useInputsListener({
            isEnable: true,
            allowedInputs: [testFirstKey, testSecondKey],
            callback: (eventLKey) => {
                keyArr.push(eventLKey);
            },
        });
        return <main />;
    }

    renderWithProviders(<Component />);

    const main = screen.getByRole('main');

    await fireEvent.keyDown(main, { key: testFirstKey, code: testFirstKey });
    expect(keyArr.at(-1)).toBe(testFirstKey);

    await fireEvent.keyDown(main, { key: testSecondKey, code: testSecondKey });
    expect(keyArr.at(-1)).toBe(testSecondKey);
});
