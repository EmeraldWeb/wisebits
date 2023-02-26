import { screen, render } from '@testing-library/react';
import { Layout } from './Layout';

test('Layout', () => {
    const testHeaderText = 'foobar-baz-boo';
    const testMainText = 'HELLO';
    const testMainNode = <a href={`/${testHeaderText}`}>{testMainText}</a>;

    render(
        <Layout header={testHeaderText}>
            {testMainNode}
        </Layout>
    );

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toContainHTML(testHeaderText);

    const main = screen.getByRole('main');
    const link = screen.getByRole('link', { name: testMainText });
    expect(main).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/${testHeaderText}`);
    expect(main).toContainElement(link);
});
