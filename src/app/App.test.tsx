import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { App } from './App';
import { renderWithProviders } from '../utils/testRender';
import { pushLog } from '../data/store/states/logs/actions';

test('App', async () => {
    const { store } = renderWithProviders(
        <App />
    );

    const main = screen.getByRole('main');
    const header = screen.getByRole('banner');
    const newGameButton = screen.getByRole('button', { name: 'New Game' });

    expect(main).toBeInTheDocument();
    expect(newGameButton).toBeInTheDocument();
    expect(main).toContainElement(newGameButton);

    expect(header).toBeInTheDocument();
    expect(header).toContainHTML('Welcome!');
    expect(header).toContainHTML('Game rules');

    const testTextLog = 'test-foo-zap-zip';
    await act(async () => {
        await store?.dispatch(pushLog(testTextLog));
    });

    expect(header).toContainHTML(testTextLog);
});
