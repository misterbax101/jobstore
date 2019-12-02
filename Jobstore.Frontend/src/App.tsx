import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { user, vacancy } from './containers';
import { About, Contacts } from './components/support';
import PrivateRoute from './components/base/PrivateRoute';
import { Layout } from './containers/layout';
import { history } from './untils/history';
import { authCheckState } from './store/auth';
import { AppState } from './store';
import { routes } from './constants';

interface AppProps {
    onTryAutoSignup: () => Promise<void>,
    isAuthenticated: boolean
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path={routes.home} component={user.Home} />
                        <Route path={routes.login} component={user.Login} />
                        <Route path={routes.signUp} component={user.SignUp} />
                        <PrivateRoute path={routes.myProfile} component={user.UserProfile} isAuthenticated={isAuthenticated} />
                        <Route path={routes.vacancies} component={vacancy.Vacancies} exact />
                        <PrivateRoute path={routes.addVacancy} component={vacancy.AddVacancy} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path={`${routes.editVacancy}/:id`} component={vacancy.EditVacancy} isAuthenticated={isAuthenticated} />
                        <Route path={`${routes.home}/:id`} component={vacancy.VacancyDetails} />
                        <Route path={routes.about} component={About} />
                        <Route path={routes.contacts} component={Contacts} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

const mapStateToProps = (state: AppState) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps,
    {
        onTryAutoSignup: authCheckState
    })(App);