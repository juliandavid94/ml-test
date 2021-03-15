import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './index';

describe('Spinner Component',()=>{
  test('renders', () => {
    
    const {container} = render(<Spinner />);
    const foo = container.querySelector('.Loader')
    expect(foo.children.length).toEqual(4);
  });

})
