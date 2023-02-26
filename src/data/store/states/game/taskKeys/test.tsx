import { renderWithProviders } from '../../../../../utils/testRender';
import { getLastTaskKey } from '../selectors';
import { act } from 'react-dom/test-utils';
import { pushNewTaskKey } from './index';


test('game/lastTaskKey', async () => {
    const testKey = 'ArrowUp';
    const { store } = renderWithProviders(<div />);

    expect(getLastTaskKey(store?.getState())).toBe(undefined);

    await act(async () => {
        await store?.dispatch(pushNewTaskKey(testKey));
    });
    expect(getLastTaskKey(store?.getState())).toBe(testKey);
});
