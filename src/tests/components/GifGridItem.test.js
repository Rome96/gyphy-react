import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Testing component <GifGridItem/>', () => {
  const title = 'Gocku';
  const urlImg = `https://localhost/algo.gif`;
  let wrapper = shallow(<GifGridItem urlImg={urlImg} title={title} />);

   // se ejectuta antes de las evaluaciones - similar a un ciclo de vida de react
   beforeEach(() => {
     wrapper = shallow(<GifGridItem urlImg={urlImg} title={title} />);
   });

  test('return component GifGridItem/>', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Must have a paragraph with the title", () => {
    const p = wrapper.find('h4').text().trim();
    expect(p).toBe(title);
  });

  test('Must have the image equal to the url and alt of the props', () => {
    const img = wrapper.find('img');
    const url = img.prop('src');
    const alt = img.prop('alt');

    expect(url).toBe(urlImg);
    expect(alt).toBe(title);
  });

  test("Must have animate__backInLeft", () => {
    const div = wrapper.find('div')
    const classCss = div.prop("className").trim().includes('animate__backInLeft');
    expect(classCss).toBe(true)
  });
  
});
