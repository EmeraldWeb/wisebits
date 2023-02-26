import { act } from 'react-dom/test-utils';
import { getTaskKeys } from '../../states/game/selectors';
import { getLastLog } from '../../states/logs/selectors';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_START } from '../../states/game/types';
import { logText } from './watchStart';

test('saga/game/watchStart', async () => {
    const { store } = renderWithProviders(<div />);

    expect(getTaskKeys(store?.getState()).length).toBe(0);

    await act(async () => {
        await store?.dispatch({ type: GAME_START });
    });

    expect(getTaskKeys(store?.getState()).length).toBe(1);
    expect(getLastLog(store?.getState())?.text).toBe(logText);
});
