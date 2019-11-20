import React from 'react';
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink
} from 'reactstrap';

import translations from './../../translations';


interface LoginButtonProps {
    isAuthenticated: boolean,
    userName: string | null
    logout(): void;
}

class LoginButton extends React.Component<LoginButtonProps, {}>{
    onLogoutClick = (): void => {
        this.props.logout();
    }

    render() {
        const { isAuthenticated, userName } = this.props;
        const { common:{buttonLabels}, header } = translations;

        if (!isAuthenticated) {
            return <NavLink tag={Link} to="/login">{buttonLabels.login}</NavLink>
        }

        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {header.hi} {userName}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink tag={Link} to="/">{header.myProfile}</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <NavLink onClick={this.onLogoutClick}>{buttonLabels.logout}</NavLink>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

export default LoginButton;