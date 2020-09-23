import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid';

describe('Testing in component <GifGrid/>', () => {
  const category = 'Goku';
  let wrapper = shallow(<GifGrid category={category} />);

  beforeEach(() => {
    wrapper = shallow(<GifGrid category={category} />);
  });

  test('Render component  <GifGrid/>', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});
