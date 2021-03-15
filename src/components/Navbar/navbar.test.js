import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarSearch from './index';
import routerStubs from './navbar.stub';

jest.mock('react-router-dom', () => {
  const _routerStubs = require('./navbar.stub');
  return {
    useHistory: () => ({
      push: _routerStubs.routerPush
    })
  }
});

describe('NavbarSearch Component', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('renders input change', () => {
    const textProduct = 'carro';
    const setTextProduct = jest.fn();
    const { getByPlaceholderText } = render(<NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct} />);
    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, {
      target: {
        value: 'auto'
      }
    });
    expect(setTextProduct).toHaveBeenCalled();
  });

  test('renders click button with text', () => {
    const textProduct = 'carro';
    const setTextProduct = jest.fn();
    const { container } = render(<NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct} />);
    const button = container.querySelector('.btn_search');
    fireEvent.click(button);
    expect(routerStubs.routerPush).toHaveBeenCalled();
  });

  test('renders click button', () => {
    const textProduct = null;
    const setTextProduct = jest.fn();
    const { container } = render(<NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct} />);
    const button = container.querySelector('.btn_search');
    fireEvent.click(button);
  });

  test('renders key press enter', () => {
    const textProduct = 'carro';
    const setTextProduct = jest.fn();
    const { getByPlaceholderText } = render(<NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct} />);
    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    expect(routerStubs.routerPush).toHaveBeenCalled();
  });

  test('renders key press No enter', () => {
    const textProduct = 'carro';
    const setTextProduct = jest.fn();
    const { getByPlaceholderText } = render(<NavbarSearch textProduct={textProduct} setTextProduct={setTextProduct} />);
    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.keyPress(input, { key: "NoEnter", code: 13, charCode: 13 });
  });



})
