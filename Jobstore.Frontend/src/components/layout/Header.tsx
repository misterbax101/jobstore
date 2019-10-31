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

class Header extends React.Component<{}, {}>{
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">Jobstore</NavbarBrand>
                <Nav className="ml-auti" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/vacancies">Vacancies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contacts">Contacts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/sign-up">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <LoginButton />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;