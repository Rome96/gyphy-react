import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // emular llamado al hook useFetchGifs :)

describe('Testing in component <GifGrid/>', () => {
  const category = 'Goku';

  test('Render component  <GifGrid/>', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot()
  });

  test('Render <GifGridItem/> when images are loaded of hook useFetchGifs', () => {
    const gifs = [{
      id: '1',
      title: 'Naruto',
      urlImg: 'https://localhost/data/naruto.gif'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

});
