import { act } from 'react-dom/test-utils';
import { getTaskKeys, getIsGamePlay } from '../../states/game/selectors';
import { getLastLog } from '../../states/logs/selectors';
import { defaultWinThreshold } from '../../states/game/const';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_START, GAME_PROGRESS_SET } from '../../states/game/types';
import { logText } from './watchProgress';

test('saga/game/watchProgress', async () => {
    const { store } = renderWithProviders(<div />);

    await act(async () => {
        await store?.dispatch({ type: GAME_START });
        const taskKeys = getTaskKeys(store?.getState());

        await store?.dispatch({ type: GAME_PROGRESS_SET, payload: { progress: 1 } });
        expect(getTaskKeys(store?.getState()).length).toBe(taskKeys.length + 1);

        await store?.dispatch({ type: GAME_PROGRESS_SET, payload: { progress: defaultWinThreshold } });
        expect(getIsGamePlay(store?.getState())).toBe(false);
        expect(getLastLog(store?.getState())?.text).toBe(logText);
    });
});
