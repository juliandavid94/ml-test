import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({
    url: 'hola'
  }),
  Link: ({ children, ...rest }) => <a data-testid="link" {...rest} >{children}</a>
}));

describe('Item Component', () => {
  test('renders', () => {
    const props = {
      currency: 'COP',
      idProduct: 'MA124512',
      urlImg: 'url',
      amount: '1000',
      title: 'hola',
      address: 'Buenos Aires',
    }
    const { container } = render(<Item {...props} />);
    expect(container).toMatchSnapshot();
  });

})
