import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../../../../../utils/testRender';
import { getProgress, getWinThreshold } from '../selectors';
import { defaultWinThreshold } from '../const';
import { setProgress, plusProgress } from './index';

test('game/progress', async () => {
    const { store } = renderWithProviders(<div />);

    expect(getProgress(store?.getState())).toBe(0);

    await act(async () => {
        await store?.dispatch(plusProgress());
    });
    expect(getProgress(store?.getState())).toBe(1);

    await act(async () => {
        await store?.dispatch(setProgress(2));
    });
    expect(getProgress(store?.getState())).toBe(2);

    const winThreshold = getWinThreshold(store?.getState());
    expect(winThreshold).toBe(defaultWinThreshold);

    const winProgress = 99;
    if (winProgress >= winThreshold) {
        await act(async () => {
            await store?.dispatch(setProgress(winProgress));
        });
        expect(getProgress(store?.getState())).toBe(0);
    }
});
