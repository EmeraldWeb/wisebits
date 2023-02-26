import { act } from 'react-dom/test-utils';
import { pushLog } from './actions';
import { getLastLog, getLogs } from './selectors';
import { renderWithProviders } from '../../../../utils/testRender';

test('logs', async () => {
    const { store } = renderWithProviders(<div />);

    const testText = '131asdad1ecsfdwf';
    expect(getLogs(store?.getState()).length).toBe(0);

    await act(async () => {
        await store?.dispatch(pushLog(testText));
        expect(getLogs(store?.getState()).length).toBe(1);
        expect(getLastLog(store?.getState())?.text).toBe(testText);
    });
});
