import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink
} from 'reactstrap';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppState } from './../../store';
import { logout } from './../../store/auth/actions';

interface LoginButtonProps {
    isAuthenticated: boolean,
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
                    Hi
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

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout: logout })(LoginButton);