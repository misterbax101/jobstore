import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
    let wrapper: ShallowWrapper<Footer>;
    beforeEach( () => {
        wrapper =  shallow(<Footer />)
    }) 

    it('should render footer', () => {
        expect(wrapper.getElements()).toMatchSnapshot()
    });
});
