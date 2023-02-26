import { act } from 'react-dom/test-utils';
import { getLastTime } from '../../states/game/selectors';
import { defaultLastTime } from '../../states/game/const';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_START, GAME_PUSH_TASK_KEY, GAME_UPDATE_TIME } from '../../states/game/types';

test('saga/game/watchNewTask', async () => {
    const { store } = renderWithProviders(<div />);

    expect(getLastTime(store?.getState())).toBe(defaultLastTime);

    const testNewTime = 333333333;

    await act(async () => {
        await store?.dispatch({ type: GAME_START });
        await store?.dispatch({ type: GAME_UPDATE_TIME, payload: { lastTime: testNewTime } });

        expect(getLastTime(store?.getState())).toBe(testNewTime);

        await store?.dispatch({ type: GAME_PUSH_TASK_KEY, payload: { taskKey: 'ArrowUp' } });
    });

    expect(getLastTime(store?.getState())).toBe(defaultLastTime);
});
