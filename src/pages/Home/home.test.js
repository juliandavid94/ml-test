import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

describe('Home Component',()=>{
  test('renders', () => {
    
    const {container} = render(<Home />);
    expect(container).toMatchSnapshot();
  });

})
