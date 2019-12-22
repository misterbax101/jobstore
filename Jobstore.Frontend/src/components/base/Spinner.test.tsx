import React from 'react';
import { shallow } from 'enzyme';
import { Spinner as StrapSpinner  } from 'reactstrap';

import Spinner from './Spinner';

describe('<Spinner />', () => {

    it ('should render empty <Spinner />', () => {

         let wrapper =  shallow(<Spinner loading={false}/>)

         expect(wrapper.getElements()).toMatchSnapshot();
    });

    it ('should render <Spinner />', () => {

        let wrapper =  shallow(<Spinner loading={true}/>)

        expect(wrapper.getElements()).toMatchSnapshot();
        expect(wrapper.find(StrapSpinner).length).toBe(1);
   });
});
