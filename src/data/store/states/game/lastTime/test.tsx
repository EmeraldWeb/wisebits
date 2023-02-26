import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../../../../../utils/testRender';
import { getLastTime } from '../selectors';
import { defaultLastTime } from '../const';
import { updateTime } from './index';

test('game/lastTime', async () => {
    const { store } = renderWithProviders(<div />);

    expect(getLastTime(store?.getState())).toBe(defaultLastTime);

    const testTime = 8000;
    await act(async () => {
        await store?.dispatch(updateTime(testTime));
    });
    expect(getLastTime(store?.getState())).toBe(testTime);
});
