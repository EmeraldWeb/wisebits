import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../../../../../utils/testRender';
import { getLastUserKey } from '../selectors';
import { pushNewUserKey } from './index';


test('game/lastUserKey', async () => {
    const testKey = 'ArrowDown';
    const { store } = renderWithProviders(<div />);

    expect(getLastUserKey(store?.getState())).toBe(undefined);

    await act(async () => {
        await store?.dispatch(pushNewUserKey(testKey));
    });
    expect(getLastUserKey(store?.getState())).toBe(testKey);
});
