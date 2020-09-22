import React from 'react'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import '@testing-library/jest-dom'
describe('testing component <GifExpertApp/>', () => {

	test('return component <GifExpertApp/>', () => {
		const wrapper = shallow(<GifExpertApp/>)
		expect(wrapper).toMatchSnapshot()
	});
});