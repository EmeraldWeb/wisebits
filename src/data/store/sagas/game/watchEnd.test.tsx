import { act } from 'react-dom/test-utils';
import { getLastLog } from '../../states/logs/selectors';
import { getProgress } from '../../states/game/selectors';
import { renderWithProviders } from '../../../../utils/testRender';
import { GAME_END } from '../../states/game/types';
import { logText } from './watchEnd';

test('saga/game/watchEnd', async () => {
    const { store } = renderWithProviders(<div />);

    const lastLog = getLastLog(store?.getState())?.text;

    await act(async () => {
        store?.dispatch({ type: GAME_END });
    });

    const progressLog = getLastLog(store?.getState())?.text;
    expect(lastLog).not.toBe(progressLog);

    const progress = getProgress(store?.getState());
    expect(progressLog).toBe(logText(progress));
});
