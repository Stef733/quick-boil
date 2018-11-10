import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders', () => {
	const wrapper = shallow(<App />);

	expect(wrapper.text()).toContain('hello from React');
});
