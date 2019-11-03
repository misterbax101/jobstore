import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from 'reactstrap';

import LoginButton from "./LoginButton";

interface HeaderProps {
    isAuthenticated: boolean,
    userName: string | null
    logout(): void;
}

class Header extends React.Component<HeaderProps, {}>{
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">Jobstore</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/vacancies">Vacancies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contacts">Contacts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                    </NavItem>
                    <LoginButton {...this.props} />
                </Nav>
            </Navbar>
        );
    }
}

export default Header;