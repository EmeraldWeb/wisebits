import { act } from 'react-dom/test-utils';
import { getLastLog } from '../../states/logs/selectors';
import { getIsGamePlay } from '../../states/game/selectors';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_LIFE_SET, GAME_START } from '../../states/game/types';
import { logText } from './watchLife';

test('saga/game/watchLife', async () => {
    const { store } = renderWithProviders(<div />);

    await act(async () => {
        await store?.dispatch({ type: GAME_START });
        expect(getIsGamePlay(store?.getState())).toBe(true);

        await store?.dispatch({ type: GAME_LIFE_SET, payload: { lifeCount: 0 } });
    });

    expect(getIsGamePlay(store?.getState())).toBe(false);

    const lastLog = getLastLog(store?.getState())?.text;
    expect(lastLog).toBe(logText);
});
