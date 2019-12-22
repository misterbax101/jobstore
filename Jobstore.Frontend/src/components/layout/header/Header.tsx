import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import { routes } from './../../../constants';
import LoginButton from '../LoginButton/LoginButton';
import logo from  '../../../assert/images/logo.svg';
import './Header.css'

interface HeaderProps {
    isAuthenticated: boolean,
    userName: string | null,
    logout:() => any;
}

class Header extends React.Component<HeaderProps, {}>{
    render() {
        return (
            <header className="bg-light">
                <Container>
                    <Navbar light expand="md">
                        <NavbarBrand tag={Link} to={routes.home}>
                            <img src={logo} alt=" " className='img-fluid logo'/>
                            Jobstore
                            </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to={routes.vacancies}>Vacancies</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={routes.contacts}>Contacts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={routes.about}>About</NavLink>
                            </NavItem>
                            <LoginButton {...this.props} userName={this.props.userName} />
                        </Nav>
                    </Navbar>
                </Container>
            </header>
        );
    }
}

export default Header;