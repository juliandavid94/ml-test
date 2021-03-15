import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Breadcrumbs from './index';

describe('Breadcrumbs Component',()=>{
  
    test('renders', () => {  
    const categories = ['Hola', 'mundo'];
    const {container} = render(<Breadcrumbs categories={categories}/>);
    expect(container.textContent).toEqual('Hola > mundo');
  });

})
