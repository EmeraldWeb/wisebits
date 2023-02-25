import { screen} from '@testing-library/react';
import { App } from './App';
import { renderWithProviders} from "../utils/testRender";

test('App', () => {
    renderWithProviders(
        <App />
    );

    const app = screen.getByRole('main');
    expect(app).toBeInTheDocument();
});
