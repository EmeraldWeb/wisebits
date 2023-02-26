import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Game } from './Game';
import { renderWithProviders } from '../../utils/testRender';
import { defaultLifeAmount } from '../../data/store/states/game/const';
import { pushNewTaskKey } from '../../data/store/states/game/actions';

test('Game', async () => {
    const { store } = renderWithProviders(
        <Game />
    );

    const newGameBtn = screen.getByRole('button', { name: 'New Game' });
    expect(newGameBtn).toBeInTheDocument();

    const noLifeImages = screen.queryByRole('img', { name: 'Life symbol' });
    expect(noLifeImages).not.toBeInTheDocument();

    const noTimer = screen.queryByRole('timer');
    expect(noTimer).not.toBeInTheDocument();

    await act(async () => {
        await newGameBtn.click();
    });

    expect(newGameBtn).not.toBeInTheDocument();

    const lifeImages = screen.getAllByRole('img', { name: 'Life symbol' });
    expect(lifeImages.length).toEqual(defaultLifeAmount);

    const timer = screen.getByRole('timer');
    expect(timer).toBeInTheDocument();

    const testArrow = 'ArrowLeft';

    await act(async () => {
        await store?.dispatch(pushNewTaskKey(testArrow));
    });

    const arrowLeft = screen.queryByRole('img', { name: testArrow });
    expect(arrowLeft).toBeInTheDocument();
});
