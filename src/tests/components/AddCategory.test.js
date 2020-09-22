import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe("Testing in components <AddCategory/>", () => {
  const setCategories = () => {};
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  
  test("Render component <AddCategory />", () => {
    expect(wrapper).toMatchSnapshot()
  });
});
