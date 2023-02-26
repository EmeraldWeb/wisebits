import { render, screen } from '@testing-library/react';
import { LifeCounter } from './LifeCounter';

test('LifeCounter', () => {
    const testAmount = 7;
    const testIcon = '🍀';
    render(
        <LifeCounter
            amount={testAmount}
            icon={testIcon}
        />
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItem = screen.getAllByRole('listitem');
    const images = screen.getAllByRole('img');

    expect(listItem.length).toEqual(testAmount);
    expect(images.length).toEqual(testAmount);

    expect(list).toContainElement(listItem[0]);
    expect(listItem[0]).toContainHTML(testIcon);
});
