import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, UncontrolledDropdown, DropdownToggle } from 'reactstrap';


import TestLoginButton, { LoginButtonProps } from './LoginButton';

let defaultProps: LoginButtonProps = {
    isAuthenticated: false,
    userName: null,
    logout: () => { }
}

const LoginButton = (props: any) => (
    <BrowserRouter>
        <TestLoginButton  {...defaultProps} {...props} />
    </BrowserRouter>);

describe('<LoginButton />', () => {

    it('should render login button', () => {
        let wrapper = mount(<LoginButton />)

        expect(wrapper.find(NavLink).length).toBe(1);
        expect(wrapper.find(NavLink).text()).toBe("Login");
    });

    it('should render user dropdown', () => {

        let props = {
            isAuthenticated: true,
            userName: "Test"
        }

        let wrapper = mount(<LoginButton {...props} />)

        expect(wrapper.find(UncontrolledDropdown).length).toBe(1);
    });

    it('should passes user name', () => {

        let props = {
            isAuthenticated: true,
            userName: "Test"
        }

        let wrapper = mount(<LoginButton {...props} />)

        expect(wrapper.find(DropdownToggle).first().text()).toBe(`Hi ${props.userName}`);
    });

    it('should call logout', () => {

        let logoutCallback = jest.fn(() => { });

        let props = {
            isAuthenticated: true,
            userName: "Test",
            logout: logoutCallback
        }

        let wrapper = mount(<LoginButton {...props} />)

        wrapper
            .find(NavLink)
            .last()
            .simulate('click');

        expect(logoutCallback.mock.calls.length).toBe(1);
    });

});
