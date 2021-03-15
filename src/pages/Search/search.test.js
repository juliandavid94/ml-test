import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Search from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
}));

describe('Search Component', () => {
  test('renders', () => {
    const props = {
      location: {
        search: 'ML',
      },
    }
    const { container } = render(<Search {...props} />);
    expect(container).toMatchSnapshot();
  });

})
