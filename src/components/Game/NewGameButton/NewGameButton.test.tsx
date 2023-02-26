import { render, screen } from '@testing-library/react';
import { NewGameButton } from './NewGameButton';

test('NewGameButton', () => {
    let testClick = false;
    const testClass = 'bbbb';
    render(
        <NewGameButton
            className={testClass}
            onClick={() => {
                testClick = !testClick;
            }}
        />
    );

    const button = screen.getByRole('button', { name: 'New Game' });
    expect(button).toBeInTheDocument();

    button.click();
    expect(testClick).toEqual(true);

    button.click();
    expect(testClick).toEqual(false);

    expect(button).toHaveClass(testClass);
});
