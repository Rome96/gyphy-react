import React from 'react'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import '@testing-library/jest-dom'
describe('testing component <GifExpertApp/>', () => {

	test('return component <GifExpertApp/>', () => {
		const wrapper = shallow(<GifExpertApp/>)
		expect(wrapper).toMatchSnapshot()
	});

	test('Render array of categories', () => {
		const categories = ['Naruto', 'Gokú']
		const wrapper = shallow(<GifExpertApp defaulCategories={categories} />);
		const gifGrid = wrapper.find('GifGrid').length;
		expect(wrapper).toMatchSnapshot();
		expect(gifGrid).toBe(categories.length)
	});
});