import { screen } from '@testing-library/react';

import { AnswerTimer } from './AnswerTimer';
import { renderWithProviders } from '../../../utils/testRender';
import { defaultLastTime } from '../../../data/store/states/game/const';

test('AnswerTimer default', () => {
    renderWithProviders(
        <AnswerTimer />
    );

    const timer = screen.getByRole('timer');
    expect(timer).toBeInTheDocument();
    expect(timer).toContainHTML(`Seconds left: ${defaultLastTime / 1000}`);
});

test('AnswerTimer with props', () => {
    const testClass = 'foobar-123';
    const testLabel = 'Some time';
    renderWithProviders(
        <AnswerTimer
            className={testClass}
            timeUnits={'minutes'}
            label={testLabel}
        />
    );

    const timer = screen.getByRole('timer');
    expect(timer).toBeInTheDocument();
    expect(timer).toHaveClass(testClass);
    expect(timer).toContainHTML(testLabel);
});
