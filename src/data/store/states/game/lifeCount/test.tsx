import { act } from 'react-dom/test-utils';
import { renderWithProviders } from '../../../../../utils/testRender';
import { getLifeCount } from '../selectors';
import { defaultLifeAmount } from '../const';
import { minusLife, plusLife, setLife } from './index';


test('game/lifeCount', async () => {
    const { store } = renderWithProviders(<div />);

    expect(getLifeCount(store?.getState())).toBe(defaultLifeAmount);

    let testLife = 10;
    await act(async () => {
        await store?.dispatch(setLife(testLife));
    });
    expect(getLifeCount(store?.getState())).toBe(testLife);

    await act(async () => {
        testLife += 1;
        await store?.dispatch(plusLife());
    });
    expect(getLifeCount(store?.getState())).toBe(testLife);

    await act(async () => {
        testLife -= 1;
        await store?.dispatch(minusLife());
    });
    expect(getLifeCount(store?.getState())).toBe(testLife);
});
