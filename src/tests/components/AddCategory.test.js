import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Testing in components <AddCategory/>', () => {

  const setCategories = jest.fn();  
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks(); // limpiar cualquier simulacion
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  
  test('Render component <AddCategory />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('onChange input search', () => {
    const value = 'Hello World';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
  });

  test('You should not send the information with Onsubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('you should call setCategories and clear input', () => {
    const value = 'Hello World';

    //1. simulate onChange of input
    wrapper.find('input').simulate('change', { target: { value } })

    //2. simulate onSubmit
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    //3. run setCategories
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) //evaluar que se haya llamado con un fn

    //4. value of input = ''
    const input = wrapper.find('input').prop('value');
    expect(input).toBe('');
  });
});
