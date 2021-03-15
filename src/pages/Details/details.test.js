import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Details from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () =>({id:'MVAF65'})
}));

describe('Details Component', () => {
  test('renders', () => {
    const { asFragment  } = render(<Details />);
    expect(asFragment()).toMatchSnapshot();
  });

})
