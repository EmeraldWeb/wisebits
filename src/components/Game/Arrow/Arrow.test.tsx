import { render, screen } from '@testing-library/react';
import { Arrow, arrowsDict } from './Arrow';
import { inputsCodes } from '../../../data/store/states/game/const';

test('Arrow', () => {
    const type = inputsCodes[Math.floor(Math.random() * inputsCodes.length)];
    render(<Arrow type={type} />);

    const icon = screen.getByRole('img', { name: type });
    expect(icon).toBeInTheDocument();
    expect(icon).toContainHTML(arrowsDict[type]);
});
