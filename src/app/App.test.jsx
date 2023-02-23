import { screen} from '@testing-library/react';
import { App } from './App';
import { renderWithProviders} from "../utils/testRender";

test('App', () => {
    const childrenNode = <a data-check="test" href="/test">Foobar</a>;

    renderWithProviders(
        <App>
            {childrenNode}
        </App>
    );

    const app = screen.getByRole('main');
    const child = app.querySelector('a[data-check=test]');

    expect(app).toBeInTheDocument();
    expect(child).toBeInTheDocument();
});
