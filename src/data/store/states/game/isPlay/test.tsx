import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../../../../../utils/testRender';
import { getIsGamePlay } from '../selectors';
import { gameEnd, gameStart } from './index';


test('game/isPlay', async () => {
    const { store } = renderWithProviders(<div></div>);

    expect(getIsGamePlay(store?.getState())).toBe(false);

    await act(async () => {
        await store?.dispatch(gameStart());
    });
    expect(getIsGamePlay(store?.getState())).toBe(true);

    await act(async () => {
        store?.dispatch(gameEnd());
    });
    expect(getIsGamePlay(store?.getState())).toBe(false);
});
