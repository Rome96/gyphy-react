import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe("Testing in components <AddCategory/>", () => {

  const setCategories = jest.fn();  
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks(); // limpiar cualquier simulacion
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  
  test("Render component <AddCategory />", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('onChange input search', () => {
    const value = 'Hello World';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
  });

  test("You should not send the information with Onsubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

});
