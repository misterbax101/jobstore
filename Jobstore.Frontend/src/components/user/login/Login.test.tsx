import React from 'react';
import { mount, shallow } from 'enzyme';
import { Alert, Button } from 'reactstrap';
import { Router } from 'react-router-dom';

import Login, { LoginProps } from './Login'
import ButtonSpinner from '../../base/ButtonSpinner';

import { routerTestProps } from './../../../untils/routerHelper';

const { history, location, match } = routerTestProps('/', {});

const defaultProps: LoginProps = {
    isAuthenticated: false,
    error: undefined,
    onLogin: () => { return new Promise<boolean>(() => true) },
    resetForm: () => { },
    loading: false,
    history: history,
    location: location,
    match: match
}

describe('<Login />', () => {
    it('should render', () => {

        let wrapper = shallow(<Login {...defaultProps} />);

        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it('should calls reset', () => {

        const resetMock = jest.fn(() => { });
        mount(
            <Router history={history}>
                <Login {...defaultProps} resetForm={resetMock} />
            </Router>);

        expect(resetMock).toBeCalled();
    });

    it('should redirects to home', () => {

        const redirectUrl = '/test';
        location.state = { from: redirectUrl };

        shallow<Login>(<Login {...defaultProps}
            isAuthenticated={true} />);

        expect(history.location.pathname).toBe(redirectUrl);
    });

    it('should shows error', () => {

        const errorMsg = "test error";
        const wrapper = mount(
            <Router history={history}>
                <Login {...defaultProps}
                    error={errorMsg} />
            </Router>);

        const alertWrapper = wrapper.find(Alert).first();

        expect(alertWrapper).toBeDefined();
        expect(alertWrapper.text()).toBe(errorMsg);
    });

    it('should shows loader', () => {

        const wrapper = mount(
            <Router history={history}>
                <Login {...defaultProps}
                    loading={true} />
            </Router>);

        const spinnerWrapper = wrapper.find(ButtonSpinner).first();
        expect(spinnerWrapper.props().loading).toBeTruthy();
    });


    it('should shows validation errors', () => {

        const wrapper = mount(
            <Router history={history}>
                <Login {...defaultProps}
                    loading={true} />
            </Router>);

        wrapper
            .find(Button)
            .simulate('click');
        

    });

});