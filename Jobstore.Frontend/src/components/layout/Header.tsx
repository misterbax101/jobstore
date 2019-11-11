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

import LoginButton from "./LoginButton";
import logo from  '../../assert/images/logo.svg';

interface HeaderProps {
    isAuthenticated: boolean,
    userName: string | null
    logout(): void;
}

const logoStyles: React.CSSProperties = {
    width: '2em',
    padding: '0 5px'
} 

class Header extends React.Component<HeaderProps, {}>{
    render() {
        return (
            <header className="bg-light">
                <Container >
                    <Navbar light expand="md">
                        <NavbarBrand tag={Link} to="/">
                            <img src={logo} alt=" " className='img-fluid' style= {logoStyles}/>
                            Jobstore
                            </NavbarBrand>
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
                </Container>
            </header>
        );
    }
}

export default Header;