import { Link } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';
jest.mock('react-router-dom', () =>{
    return {
        Link: ({children, onClick}) => <a data-testid="link" onClick={onClick}>{children}</a>
    }
})

jest.mock('../Navbar',() => {
    return {
        __esModule: true,
        default: ({textProduct,setTextProduct})  => <input data-testid="navbar" type="text" value={textProduct} onChange={event => setTextProduct(event.target.value)}></input>
    }
});

describe('Header Component',()=>{
    
  
    test('renders header without props', () => { 
        const { container } = render(<Header />);
        const foo = container.querySelector('a')
        expect(foo.firstChild.nodeName).toEqual('IMG')
    });

    test('renders header without props clicked', () => { 
        const { container, getByTestId } = render(<Header />);
        const link = getByTestId('link')
        const textSearch = getByTestId('navbar');
        fireEvent.change(textSearch,{
            target:{
                value:'carro'
            }
        });
        expect(textSearch.value).toEqual('carro');
        fireEvent.click(link);
        expect(textSearch.value).toEqual('');
    });

})

