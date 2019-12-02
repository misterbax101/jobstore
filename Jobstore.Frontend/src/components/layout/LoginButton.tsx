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
import { history } from './../../untils/history'
import { routes } from './../../constants';

interface LoginButtonProps {
    isAuthenticated: boolean,
    userName: string | null
    logout(): void;
}

class LoginButton extends React.Component<LoginButtonProps, {}>{
    onLogoutClick = (): void => {
        this.props.logout();
        history.push(routes.home);
    }

    render() {
        const { isAuthenticated, userName } = this.props;
        const { common: { buttonLabels }, header } = translations;

        if (!isAuthenticated) {
            return <NavLink tag={Link} to={routes.login}>{buttonLabels.login}</NavLink>
        }

        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {header.hi} {userName}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        <NavLink tag={Link} to={routes.myProfile}>{header.myProfile}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                        <NavLink tag={Link} to={routes.addVacancy}>{header.createVacancy}</NavLink>
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