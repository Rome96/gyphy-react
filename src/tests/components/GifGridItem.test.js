import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe("Testing component <GifGridItem/>", () => {
  test("return component GifGridItem/>", () => {
    const urlImg =
      "https://media4.giphy.com/media/jURBjTfNXLRKGzE042/giphy.gif?cid=42fdce0aa8mnyqbuz9c0ab1aksu9qf9vyogvabmdm6e2wx54&rid=giphy.gif";
    const wrapper = shallow(<GifGridItem urlImg={urlImg}/>);
    expect(wrapper).toMatchSnapshot()
  });
});
