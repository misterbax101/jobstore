import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router';
import { routes } from '../../constants';


interface PrivateRouteProps extends RouteProps {
    isAuthenticated: boolean,
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}
type RenderComponent = (props: RouteComponentProps<any>) => React.ReactNode;

export default class PrivateRoute extends Route<PrivateRouteProps> {
    render() {
        const { component: Component, isAuthenticated, ...rest }: PrivateRouteProps = this.props;
        const renderComponent: RenderComponent = (props) => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: routes.login,
                    state: {
                        from: rest.location ? rest.location.pathname : routes.home
                    }
                }} />
        );

        return (
            <Route {...rest} render={renderComponent} />
        );
    }
}