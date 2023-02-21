import { render, screen } from '@testing-library/react';
import { App } from './App';

test('App', () => {
    const childrenNode = <a data-check="test">Foobar</a>;

    render(<App>{childrenNode}</App>);

    const app = screen.getByRole('main');
    const child = app.querySelector('a[data-check=test]');

    expect(app).toBeInTheDocument();
    expect(child).toBeInTheDocument();
});
