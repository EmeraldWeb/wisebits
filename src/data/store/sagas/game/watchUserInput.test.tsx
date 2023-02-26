import { act } from 'react-dom/test-utils';
import { getLastTaskKey, getTaskKeys, getLifeCount, getProgress, getLastUserKey } from '../../states/game/selectors';
import { defaultLifeAmount } from '../../states/game/const';
import { getLastLog } from '../../states/logs/selectors';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_PUSH_USER_KEY, GAME_START } from '../../states/game/types';
import { logTextRight, logTextWrong } from './watchUserInput';

test('saga/game/watchUserInput', async () => {
    const { store } = renderWithProviders(<div />);

    await act(async () => {
        await store?.dispatch({ type: GAME_START });
        const lastTask = getLastTaskKey(store?.getState());

        await store?.dispatch({ type: GAME_PUSH_USER_KEY, payload: { userKey: lastTask } });
        expect(getLastUserKey(store?.getState())).toBe(lastTask);
        expect(getProgress(store?.getState())).toBe(1);
        expect(getLastLog(store?.getState())?.text).toBe(logTextRight);

        await store?.dispatch({ type: GAME_PUSH_USER_KEY, payload: 'Enter' });
        expect(getLifeCount(store?.getState())).toBe(defaultLifeAmount - 1);
        expect(getTaskKeys(store?.getState()).length).toBe(3);
        expect(getLastLog(store?.getState())?.text).toBe(logTextWrong);
    });
});
