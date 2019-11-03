import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink
} from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';


interface LoginButtonProps {
    isAuthenticated: boolean,
    userName: string | null
    logout(): void;
}

class LoginButton extends React.Component<LoginButtonProps, {}>{
    onLogoutClick = ():void => {
        this.props.logout();
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <NavLink tag={Link} to="/login">Login</NavLink>
        }

        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hi {this.props.userName}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink tag={Link} to="/">My Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <NavLink onClick={this.onLogoutClick}>Logout</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

export default LoginButton;